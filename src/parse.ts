import {
    Call,
    Expression,
    CallResult,
    Constant,
    Reference,
    LangFunction,
    Metadata,
    InputMetadata,
    OutputMetadata,
    Scope, LazyConstant, ListExpression
} from './types'
import {
    CallContext,
    ModuleContext, ReplEntryContext,
    StringLiteralContext,
    TestLangParser, Value1Context,
    ValueContext,
    ValueMappingContext
} from "./parser/TestLangParser";
import {CharStreams, CommonTokenStream} from "antlr4ts";
import {TestLangLexer} from "./parser/TestLangLexer";
import {TerminalNode} from "antlr4ts/tree/TerminalNode";

export type CallContextLike = {
    value(): ValueContext | undefined
    PAREN_OPEN(): TerminalNode | undefined
    PAREN_CLOSE(): TerminalNode | undefined
    valueMapping(): ValueMappingContext[];
    valueMapping(i: number): ValueMappingContext;
    valueMapping(i?: number): ValueMappingContext | ValueMappingContext[]
    COMMA(): TerminalNode[];
    COMMA(i: number): TerminalNode;
    COMMA(i?: number): TerminalNode | TerminalNode[]
}

export function parseTestLang(text: string): TestLangParser {
    let inputStream = CharStreams.fromString(text);
    let lexer = new TestLangLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new TestLangParser(tokenStream);
    return parser
}

export function parseSource(m: ModuleContext): Record<string, Expression> {
    const source: Record<string, Expression> = {}
    for (const statement of m.statement()) {
        const identifier = statement.Identifier();
        const value = statement.value();
        if (identifier && value) {
            source[identifier.text] = parseValue(value)
            continue
        }
        const call = statement.call()
        const identifierSet = statement.identifierSet()?.identifierMapping() ?? []
        if (call) {
            const parsedCall = parseCall(call)
            for (const out of identifierSet) {
                const identifiers = out.Identifier()
                source[identifiers[0].text] = new CallResult(parsedCall, identifiers[1].text)
            }
            continue
        }
        throw new Error("Should never reach here")
    }
    return source
}

export function parseCall(call: CallContextLike): Call {
    return new Call(
        parseValue(call.value()!),
        parseValueMappings(call.valueMapping())
    );
}

export function parseValue(value: ValueContext): Expression {
    if(value.PAREN_OPEN()) {
        return new CallResult(
            parseCall(value),
            "result"
        )
    }
    if (value.DOT()) {
        return new Reference(
            value.Identifier()!.text,
            parseValue(value.value()!)
        )
    }
    const ref = value.Identifier()
    if (ref) {
        return new Reference(
            ref.text
        )
    }

    const next = value.value1()
    if(next) {
        return parseValue1(next)
    }

    throw new Error("Unknown value kind")
}

export function parseValue1(value: Value1Context): Expression {
    const list = value.valueList()
    if(list) {
        return new ListExpression(list.value().map(x => parseValue(x)))
    }
    const ref = value.Identifier()
    if (ref) {
        return new Reference(
            ref.text
        )
    }
    const c = value.constant()
    if (c) {
        const integer = c.integerConstant()
        if (integer) {
            const dec = integer.DecimalConstant()
            if (dec) {
                return new Constant(parseInt(dec.text))
            }
            const hex = integer.HexadecimalConstant()
            if (hex) {
                return new Constant(parseInt(hex.text.substring(2), 16))
            }
            const bin = integer.DecimalConstant()
            if (bin) {
                return new Constant(parseInt(bin.text.substring(2), 2))
            }
        }
        const float = c.floatingConstant()
        if (float) {
            return new Constant(parseFloat(float.text))
        }
        const string = c.stringLiteral()
        if (string) {
            return new Constant(parseString(string))
        }
    }
    const f = value.functionDefinition()
    if (f) {
        const identifierLists = f.identifierList()
        const inputs: Record<string, InputMetadata> = {}
        for (const mapping of identifierLists[0].Identifier()) {
            inputs[mapping.text] = {}
        }
        const outputs: Record<string, OutputMetadata> = {}
        if(identifierLists.length > 1){
            const outputList = f.identifierList(1)
            if (outputList) {
                for (const mapping of outputList.Identifier()) {
                    outputs[mapping.text] = {}
                }
            }
        } else {
            const outputName = f.Identifier()?.text ?? "result"
            outputs[outputName] = {}
        }
        const outputExpression = f.value()
        if (outputExpression) {
            const key = f.Identifier()?.text ?? "result"
            outputs[key] = {}
            return new LazyConstant(scope => {
                const vm: Record<string, Expression> = {}
                vm[key] = parseValue(outputExpression)
                return new LangFunction(
                    inputs,
                    outputs,
                    vm,
                    {},
                    scope
                )
            })
        }

        const m = f.module()
        if (m) {
            const source = parseSource(m)
            return new LazyConstant(scope => {
                return new LangFunction(
                    inputs,
                    outputs,
                    source,
                    {},
                    scope
                )
            })
        }
    }
    const m = value.module()
    if (m) {
        const source = parseSource(m)
        return new LazyConstant(parent => {
            const s = new Scope()
            s.parent = parent
            s.source = source
            return s
        })
    }

    throw new Error("Unknown value kind")
}

export function parseValueMappings(maps: Array<ValueMappingContext>): Record<string, Expression> {
    const out: Record<string, Expression> = {}
    for (const entry of maps) {
        out[entry.Identifier().text] = parseValue(entry.value())
    }
    return out
}

export function parseString(string: StringLiteralContext): string {
    let totalString = ""
    const line = string.lineStringLiteral()
    if (line) {
        for (const item of line.lineStringContent()) {
            const direct = item.LineStrText()
            if (direct) {
                totalString += direct.text
            }
            const escaped = item.LineStrEscapedChar()
            if (escaped) {
                const e = escaped.text[1]
                switch (e) {
                    case 'a':
                        totalString += '\a'
                        break
                    case 'b':
                        totalString += '\b'
                        break
                    case 'f':
                        totalString += '\f'
                        break
                    case 'n':
                        totalString += '\n'
                        break
                    case 'r':
                        totalString += '\r'
                        break
                    case 't':
                        totalString += '\t'
                        break
                    case 'v':
                        totalString += '\v'
                        break
                    default:
                        totalString += e
                }
            }
        }
    }
    const multi = string.multiLineStringLiteral()
    if (multi) {
        for (const item of multi.multiLineStringContent()) {
            const direct = item.MultiLineStrText()
            if (direct) {
                totalString += direct.text
            }
            const escaped = item.MultiLineStrEscapedChar()
            if (escaped) {
                const e = escaped.text[1]
                switch (e) {
                    case 'a':
                        totalString += '\a'
                        break
                    case 'b':
                        totalString += '\b'
                        break
                    case 'f':
                        totalString += '\f'
                        break
                    case 'n':
                        totalString += '\n'
                        break
                    case 'r':
                        totalString += '\r'
                        break
                    case 't':
                        totalString += '\t'
                        break
                    case 'v':
                        totalString += '\v'
                        break
                    default:
                        totalString += e
                }
            }
        }
    }
    return totalString
}