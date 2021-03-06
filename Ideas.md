language thoughts again

Specific focus on immutability and metaprogramming
The goal is to get a metaprogram to be useful in an IDE

Obviously Pharo is not the one to learn from - holy crap, a horrible user experience for sure.

When running something yields no type information, just be silent on the rest of the stuff and don't highlight.  It's fine.

Use a keyword to distinguish functions that are impure
Use atCompileTime() function to run things that are impure at compile time - probably rarely needed, but in the case of reading other modules it makes a lot of sense.

Pure-ish functions (like loading a package with a name/version) could be marked as pure - they either panic (as in, die horribly immediately) or succed in the same way every time.

Ideally, we want a really small bootstrap considering how much metaprogramming is possible.  We probably need a very minimal level of concepts available to begin working.

Memory safety is a priority, which will probably be the primary thing that screws up all the effort to be simple.

Interface adapting is also a high priority in order to work at the operating system level effectively.

What is the core element(s) of the system?

- Functions - purity/impurity is absolutely core to the system.
    - Parameters
    - Return values (single yields standard, multiple yields graphs)
- Function Call
    - Function to call
    - Inputs
    - Outputs
- Modules - Collections of values.  Evaluation-order agnostic; impurity cannot be introduced at the module access layer. (?)
- Objects - in order to have memory safety, we need to have objects, which essentially are maps.

VALUES are actually the key construct in all of this.  Functions are values, but values are not functions!

POSSIBLE VALUES:

- Call Result
    - Call
        - Function
        - Inputs
    - Output ID
- Constant
    - Numbers
    - Strings
    - Booleans
    - Composites
    - Arrays (?)
    - Functions
    - Modules
- Reference
    - Module
    - Key

To blur the line between programming and manipulating data, the real key is that everything can be made through calls, but everything can be a constant as well.

Value serialization is gonna be a big deal.  Whatever host language or system I use needs to be able to serialize to the same format.

The easiest format is probably some form of JSON, but in the end I'm gonna want more than that I think.  I'll want something much faster to put into memory.

This is a value manipulation system.  VMS might be the name.  Sounds oldschool, like VHS.  I like it.

JSON is the key.  I think I'll literally design the whole thing around it.  It's wonderfully easy to reason about.

Deserializing references is an interesting problem that JSON doesn't really handle, and it might be a big key to figuring the whole thing out.

One of the interesting design choices I have to decide on here is what I want to do with the references - are they hash based or name based?

I think a basic structured editor can't wait long, tbh.

Perhaps v1 should be in web?  Performance isn't critical to what I'm doing, at least initially.

Nah. JAVASCRIPT is the key, in a bit of irony.  Ooh, that hurts.

Graph-based is the option, due to the goal of representing ideas accurately.

There are no interfaces, there are only adapters.  Instead of saying 'A implements B', we say 'here is an adapter from A to B'.

Evaluatable value VS existing value
 

## Practical Planning

Ser/des could be done first, but it would end up being a really crappy scripting language effectively.  No type help whatsoever.

I think that's OK though - that's kinda the whole point, is the result is really easy to manipulate in code.  Later we'll be able to take care of it quite easily.

True minimal ser/des is basically JSON.  Would be a nightmare to write, but it would work.

## Priorites

Able to write/read as imperative style with functional checks - AKA context absorption in lambdas is a necessity.

Quoting - AKA code literals - shouldn't be a problem.  We can use that to build our transpiler and type executions.

That said, a built-in system to the language for creating infinitely extendable executions would be *really* nice.

This could be described as pattern matching.  I guess that works.  The only thing I really detest is that it creates hard-to-source effects, but that's kinda necessary here.

## Syntax Attempt

```
// Literals
x = 2
y = 3

// Operators
z = x + y

// Operators desugared
z = add(x, y)

// Modules / Objects
module = {
  x = "hi"
}
loaded = module.x

// Functions
addInts = (lhs, rhs) => (result) {
  result = NATIVE("add", lhs, rhs)
}
double = (input) => (result) {
  result = addInts(input, input)
}
// Sugar shorthand, name 'result' is implied
double = (input) => addInts(input, input)

// Structs - combination of properties and module
Point = (x, y) {
  add = (left, right) => constructor(left.x + right.x, left.y + right.y)
}

// Desugared Structs
Point = {
  constructor(x, y) = { _type_ = Point; x = x; y = y }
  add = (left, right) => constructor(left.x + right.x, left.y + right.y)
}

// Pattern matcher declaration
type = PATTERN (expression) => (result) {
  // Default declaration here
  result = if(expression._type_ == Call) expression.call.function.implementation else UNKNOWN 
}

extend type addInts.lhs = (call) => Int
extend type addInts.rhs = (call) => Int
extend type addInts.result = (call) => Int

extend type double.input = (call) => Int
extend type double.result = (call) => Int

// Many possible generic patterns
ErasedList = (subtype, ...items) {
  typeConstructor(subtype) => { base = ErasedList; subtype = subtype }  // ErasedList<Int> syntax
  add(self, item) => ...
}
extend type ErasedList.constructor = (call) => ErasedList.typeConstructor(call.type)
extend type ErasedList.add.item = (call) => type(call.self).subtype

GeneratedList = (type) => (...items) {
  add(self, item) => ...
  // uhhh not sure how this works
  extend type add.self = module
  extend type add.item = (call) => type
}


// Transpilation
toKotlin = PATTERN
extend type toKotlin = (call: Expression) -> (result: KotlinExpression)
extend toKotlin addInts = (call) => "${toKotlin(call.lhs)} + ${toKotlin(call.rhs)}"



// Typing sugar!
addInts = (lhs: Int, rhs: Int) => (result: Int) {
  result = NATIVE("Add", lhs, rhs)
}
// -> 
addInts = (lhs, rhs) => (result) {
  result = NATIVE("Add", lhs, rhs)
}
extend type addInts.lhs = Int
extend type addInts.rhs = Int
extend type addInts.result = Int


// Metadata oriented
addInts = (@Type(Int) lhs, @Type(Int) rhs) => (@Type(Int) result) {
  result = NATIVE("Add", lhs, rhs)
}
// Oh yeah, that's it.  That's much better.  For typing at least.


// Transpilation still needs a cross-file extendable pattern matchy thing.
toKotlin = PATTERN

extend toKotlin where
  it.type == "call"
  it.function == addInts  // Clauses can only be equals for indexing
is
  (it) => "${toKotlin(call.lhs)} + ${toKotlin(call.rhs)}"
  
extend toKotlin where
  it.type == "constant"
  it.value.type == Int
is
  (it) => Int.toString(it)
  


```

## Syntax II

```

identifier = 

```





## Types!

What do we need in order to process something?

- Default ending to look up
- Mapping per expression type
  - CallResult
  - Constant
  - Module
  - FunctionExpression
  - Reference
  - ListExpression

Transpilation is tricky because this is a graph-based language, not a tree-based language - how on earth do you model some of these things in other languages?!

The graph is necessary for effect-tracking, and thus metaprogramming.

Perhaps in/out parameters?  It effectively means the same thing, but it transpiles much easier.

Transpilation frequently requires contextual information, such as looking at information about the parent node.

```
type(x) = ...
kotlin(x) = ...

type(_ == number.add) = Function(number, number, number)
main = number.add(1, 2)

kotlin(number.add) = (left, right) => "(${left} + ${right})"

kotlin(type(x) == Function) = 

Point = struct()
  .addProperty("x")
  .addProperty("y")

_ = type(\main)
_ = kotlin(\main)
_ = type(kotlin(\main))

kotlin = (previous: Conversions) => previous
  .add(x => type(x) == Int, x => )
```