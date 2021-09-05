// Expressions

export class Call {
    target: Expression
    inputs: Record<string, Expression>

    constructor(target: Expression, inputs: Record<string, Expression>) {
        this.target = target
        this.inputs = inputs
    }

    evaluate(context: Scope): Record<string, any> {
        const already = context.evaluatedCalls.get(this)
        if (already !== undefined) return already
        const evaluatedInputs: Record<string, any> = {}
        for (const key in this.inputs) {
            evaluatedInputs[key] = this.inputs[key].evaluate(context)
        }
        let result: Record<string, any>
        const callee = this.target.evaluate(context)
        if (typeof callee === "function") {
            const execution = new Scope()
            execution.parent = context
            execution.stored = evaluatedInputs
            result = callee(execution)
        } else if (callee instanceof LangFunction) {
            result = callee.evaluate(evaluatedInputs)
        } else {
            throw Error(`Callee is not a function, it is ${callee} at ${this.target}\nContext: ${context}`)
        }
        context.evaluatedCalls.set(this, result)
        return result
    }

    toString(): string {
        let inputString = ""
        let first = true
        for (const key in this.inputs) {
            if (first) first = false
            else inputString += ", "
            inputString += key
            inputString += "="
            inputString += this.inputs[key]
        }
        return `${this.target}(${inputString})`
    }
}

export abstract class Expression {
    metadata?: Record<string, any>

    abstract evaluate(context: Scope): any
}

export class CallResult extends Expression {
    call: Call
    name: string

    constructor(call: Call, name: string) {
        super()
        this.call = call
        this.name = name
    }

    evaluate(context: Scope): any {
        const callResult = this.call.evaluate(context)
        return callResult[this.name]
    }

    toString(): string {
        return `${this.name} of ${this.call}`
    }
}

export class Constant extends Expression {
    value: any

    constructor(value: any) {
        super();
        this.value = value
    }

    evaluate(context: Scope): any {
        return this.value
    }

    toString(): string {
        return this.value.toString();
    }
}

export class Module extends Expression {
    source: Record<string, Expression>
    constructor(source: Record<string, Expression>) {
        super();
        this.source = source
    }
    evaluate(context: Scope): any {
        const s = new Scope()
        s.parent = context
        s.source = this.source
        return s
    }

    toString(): string {
        return this.source.toString();
    }
}

export class FunctionExpression extends Expression {
    inputs: Array<string>
    outputs: Array<string>
    moduleSource: Record<string, Expression>

    constructor(
        inputs: Array<string>,
        outputs: Array<string>,
        moduleSource: Record<string, Expression>
    ) {
        super();
        this.inputs = inputs
        this.outputs = outputs
        this.moduleSource = moduleSource
    }
    evaluate(context: Scope): any {
        return new LangFunction(
            this.inputs,
            this.outputs,
            this.moduleSource,
            context
        )
    }

    toString(): string {
        return this.moduleSource.toString();
    }
}

export class Reference extends Expression {
    module?: Expression
    key: string

    constructor(key: string, module?: Expression) {
        super();
        this.module = module
        this.key = key
    }

    evaluate(context: Scope): any {
        if (this.module) {
            const m = this.module.evaluate(context) as Scope | undefined;
            if(m === undefined) {
                throw Error(`${this.module} is undefined, not a scope`)
            }
            const result = m.get(this.key)
            if(result === undefined) {
                throw Error(`${this.module} does not contain '${this.key}', is: ${this.module}`)
            }
            return result
        } else {
            const result = context.get(this.key)
            if(result === undefined) {
                throw Error(`Context does not contain '${this.key}', is: ${context}`)
            }
            return result
        }
    }

    toString(): string {
        return `${this.key}`
    }
}

export class ListExpression extends Expression {
    parts: Array<Expression>

    constructor(parts: Array<Expression>) {
        super();
        this.parts = parts
    }

    evaluate(context: Scope): any {
        return this.parts.map(x => x.evaluate(context))
    }

    toString(): string {
        return `[${this.parts.join()}]`
    }
}

// Functions

export class LangFunction {
    parent?: Scope
    inputs: Array<string>
    outputs: Array<string>
    moduleSource: Record<string, Expression>

    constructor(
        inputs: Array<string>,
        outputs: Array<string>,
        moduleSource: Record<string, Expression>,
        parent?: Scope
    ) {
        this.parent = parent
        this.inputs = inputs
        this.outputs = outputs
        this.moduleSource = moduleSource
    }

    evaluate(inputs: Record<string, any>): Record<string, any> {
        const execution = new Scope()
        execution.parent = this.parent
        execution.source = this.moduleSource
        execution.stored = inputs
        const out: Record<string, any> = {}
        for (const key of this.outputs) {
            out[key] = execution.get(key)
        }
        return out
    }

    toString(): string {
        let out = "("
        for(const key of this.inputs){
            out += key
            out += " "
        }
        out += ") : ("
        for(const key of this.outputs){
            out += key
            out += " "
        }
        out += ") { "
        for(const key in this.moduleSource){
            out += key
            out += ": "
            out += this.moduleSource[key]
        }
        out += " }"
        return out
    }

    r(args: Record<string, any> = {}, desired: string = "result"): any {
        return this.evaluate(args)[desired]
    }
}

export interface Metadata {
}

export interface InputMetadata extends Metadata {
}

export interface OutputMetadata extends Metadata {
}

// Modules

export class Scope {
    parent?: Scope
    source: Record<string, Expression> = {}
    evaluatedCalls: Map<any, Record<string, any>> = new Map()
    stored: Record<string, any> = {}

    constructor(parent?: Scope) {
        this.parent = parent
    }

    get(key: string): any {
        const s = this.stored[key]
        if (s !== undefined) return s
        const e = this.source[key]
        if (e !== undefined) {
            const calculated = e.evaluate(this)
            this.stored[key] = calculated;
            return calculated
        }
        return this.parent?.get(key)
    }

    set(key: string, value: any) {
        this.stored[key] = value;
    }

    toString(): string {
        return `Scope { ${Object.keys(this.source).concat(Object.keys(this.stored)).join()}, parent is ${this.parent} }`
    }
}
