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
    Module, Lazy
} from './types'

const base = new Module();

base.set("plus", (inputs: Record<string, any>): Record<string, any> => {
    return {
        result: inputs.left as number + inputs.right as number
    }
})
base.set("minus", (inputs: Record<string, any>): Record<string, any> => {
    return {
        result: inputs.left as number - inputs.right as number
    }
})
base.set("times", (inputs: Record<string, any>): Record<string, any> => {
    return {
        result: inputs.left as number * inputs.right as number
    }
})
base.set("if", (inputs: Record<string, any>): Record<string, any> => {
    return {
        result: inputs.condition ? inputs.then() : inputs.else()
    }
})
base.set("equals", (inputs: Record<string, any>): Record<string, any> => {
    return {
        result: inputs.left === inputs.right
    }
})

const double = new LangFunction()
double.parent = base
double.inputs = {input: {}}
double.outputs = {result: {}}
double.moduleSource = {
    result: new CallResult(new Call(new Reference("plus"), {
        left: new Reference("input"),
        right: new Reference("input")
    }), "result")
}
base.set("double", double)

const factorial = new LangFunction()
factorial.parent = base
factorial.inputs = {input: {}}
factorial.outputs = {result: {}}
factorial.moduleSource = {
    result: new CallResult(new Call(new Reference("if"), {
        condition: new CallResult(new Call(new Reference("equals"), {
            left: new Reference("input"),
            right: new Constant(1)
        }), "result"),
        then: new Lazy(new Constant(1)),
        else: new Lazy(new CallResult(new Call(new Reference("times"), {
            left: new Reference("input"),
            right: new CallResult(new Call(new Reference("factorial"), {
                input: new CallResult(new Call(new Reference("minus"), {
                    left: new Reference("input"),
                    right: new Constant(1)
                }), "result")
            }), "result")
        }), "result"))
    }), "result")
}
base.set("factorial", factorial)

base.set("defineFunction", (inputs: Record<string, any>): Record<string, any> => {
    const func = new LangFunction()
    func.parent = base
    func.inputs = inputs['inputs']
    func.outputs = inputs['outputs']
    func.moduleSource = inputs['module']
    return {result: func}
})

console.log(new Call(new CallResult(new Call(new Reference("defineFunction"), {
    inputs: new Constant({input: {}}),
    outputs: new Constant({result: {}}),
    module: new Constant({
        result: new CallResult(new Call(new Reference("plus"), {
            left: new Reference("input"),
            right: new Reference("input")
        }), "result")
    })
}), "result"), {
    input: new Constant(8)
}).evaluate(base).result)
console.log(new Call(new Reference("factorial"), {
    input: new Constant(8)
}).evaluate(base).result)
console.log(new Call(new Reference("factorial"), {
    input: new Constant(9)
}).evaluate(base).result)
console.log(new Call(new Reference("factorial"), {
    input: new Constant(10)
}).evaluate(base).result)


/*

Next problems to solve:

- Is lazy what I really want?  I actually want function definitions with proper module context
- The question is this:  Can I make a 'defineFunction' function?  Using lazy perhaps?

 */