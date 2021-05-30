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

base.set("plus", (context: Module): Record<string, any> => {
    return {
        result: context.get("left") as number + context.get("right") as number
    }
})
base.set("minus", (context: Module): Record<string, any> => {
    return {
        result: context.get("left") as number - context.get("right") as number
    }
})
base.set("times", (context: Module): Record<string, any> => {
    return {
        result: context.get("left") as number * context.get("right") as number
    }
})
base.set("if", (context: Module): Record<string, any> => {
    return {
        result: context.get("condition") ? context.get("then")() : context.get("else")()
    }
})
base.set("equals", (context: Module): Record<string, any> => {
    return {
        result: context.get("left") === context.get("right")
    }
})

base.set("double", new LangFunction(
    {input: {}},
    {result: {}},
    {
        result: new CallResult(new Call(new Reference("plus"), {
            left: new Reference("input"),
            right: new Reference("input")
        }), "result")
    },
    {},
    base
))

base.set("factorial", new LangFunction(
    {input: {}},
    {result: {}},
    {
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
    },
    {},
    base
))

base.set("defineFunction", (context: Module): Record<string, any> => {
    return {
        result: new LangFunction(
            context.get('inputs'),
            context.get('outputs'),
            context.get('module'),
            {},
            context.parent
        )
    }
})

base.set("makePlus", new LangFunction(
    {by: {}},
    {result: {}},
    {
        result: new CallResult(new Call(new Reference("defineFunction"), {
            inputs: new Constant({input: {}}),
            outputs: new Constant({result: {}}),
            module: new Constant({
                result: new CallResult(new Call(new Reference("plus"), {
                    left: new Reference("input"),
                    right: new Reference("by")
                }), "result")
            })
        }), "result")
    },
    {},
    base
))

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

console.log(new Call(new CallResult(new Call(new Reference("makePlus"), {
    by: new Constant(2)
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