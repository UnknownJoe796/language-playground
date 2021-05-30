// Expressions

export class Call {
    target: Expression
    inputs: Record<string, Expression>

    constructor(target: Expression, inputs: Record<string, Expression>) {
        this.target = target
        this.inputs = inputs
    }

    evaluate(context: Module): Record<string, any> {
        const already = context.evaluatedCalls.get(this)
        if (already !== undefined) return already
        const evaluatedInputs: Record<string, any> = {}
        for (const key in this.inputs) {
            evaluatedInputs[key] = this.inputs[key].evaluate(context)
        }
        let result: Record<string, any>
        const callee = this.target.evaluate(context)
        if (typeof callee === "function") {
            const execution = new Module()
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

    abstract evaluate(context: Module): any
}

export class Lazy extends Expression {
    expression: Expression

    constructor(expression: Expression) {
        super()
        this.expression = expression
    }

    evaluate(context: Module): any {
        return () => this.expression.evaluate(context)
    }

    toString(): string {
        return `lazy<${this.expression}>`
    }
}

export class CallResult extends Expression {
    call: Call
    name: string

    constructor(call: Call, name: string) {
        super()
        this.call = call
        this.name = name
    }

    evaluate(context: Module): any {
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

    evaluate(context: Module): any {
        return this.value
    }

    toString(): string {
        return this.value.toString();
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

    evaluate(context: Module): any {
        if (this.module) {
            const m = this.module.evaluate(context) as Module;
            return m.get(this.key)
        } else {
            return context.get(this.key)
        }
    }

    toString(): string {
        return `${this.key}`
    }
}

// Functions

export class LangFunction {
    parent?: Module
    metadata: Metadata
    inputs: Record<string, InputMetadata>
    outputs: Record<string, OutputMetadata>
    moduleSource: Record<string, Expression>

    constructor(
        inputs: Record<string, InputMetadata>,
        outputs: Record<string, OutputMetadata>,
        moduleSource: Record<string, Expression>,
        metadata: Metadata = {},
        parent?: Module
    ) {
        this.parent = parent
        this.metadata = metadata
        this.inputs = inputs
        this.outputs = outputs
        this.moduleSource = moduleSource
    }

    evaluate(inputs: Record<string, any>): Record<string, any> {
        const execution = new Module()
        execution.parent = this.parent
        execution.source = this.moduleSource
        execution.stored = inputs
        const out: Record<string, any> = {}
        for (const key in this.outputs) {
            out[key] = execution.get(key)
        }
        return out
    }

    toString(): string {
        let out = "("
        for(const key in this.inputs){
            out += key
            out += " "
        }
        out += ") : ("
        for(const key in this.outputs){
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
}

export interface Metadata {
}

export interface InputMetadata extends Metadata {
}

export interface OutputMetadata extends Metadata {
}

// Modules

export class Module {
    parent?: Module
    source: Record<string, Expression> = {}
    evaluatedCalls: Map<any, Record<string, any>> = new Map()
    stored: Record<string, any> = {}

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

    toString(indent: number = 1): string {
        let out = "{\n"
        for(const key in this.source) {
            for(let i = 0; i < indent; i++)
                out += "  "
            out += key
            out += ": "
            out += this.source[key]
            out += "\n"
        }
        for(const key in this.stored) {
            for(let i = 0; i < indent; i++)
                out += "  "
            out += key
            out += ": "
            out += this.stored[key]
            out += "\n"
        }
        if(this.parent){
            out += this.parent.toString(indent + 1)
        }
        out += "}"
        return out
    }
}

/*
Ultra-minimal importable syntax

someModule = {
    a: a, b: b = otherModule_someFunc(c: c, d: d);
    nestedModule = {
        a = 6
    }
    c = nestedModule_a
    d = 123
    e = 43.10
    f = "asdf"
    plus = js("(x, y) -> x + y")
    g = [1, 2, 3]
}

actualMap = Map(
    Pair(1, 2),
    Pair(3, 4),
    Pair(5, 6)
)

someFunction = () -> () {

}

Next steps for this syntax:
- Types
- Infer module import from types (dot operator)
    - Will require multiple step process
- Operators
    - An extension of the above, really
 */