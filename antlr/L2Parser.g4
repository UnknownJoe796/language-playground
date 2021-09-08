parser grammar L2Parser;
options { tokenVocab = L2Lexer; }

file
    : fileHeader statements
    ;

fileHeader
    : importLine* impliedConversion*
    ;

importLine
    : IMPORT IDENTIFIER semiOrNl
    ;

impliedConversion
    : IMPLIED IDENTIFIER semiOrNl
    ;

commaOrNl
    : NL* COMMA NL*
    | NL+
    ;

semiOrNl
    : NL* SEMI+ NL*
    | NL+
    ;

statements
    : (statement semiOrNl)* statement
    ;

block
    : BRACE_OPEN NL* statements? NL* BRACE_CLOSE
    ;

module
    : MODULE block
    ;

reference
    : Identifier (LT ((expression commaOrNl)* expression commaOrNl?)? GT)
    ;

statement
    : declaration
    | functionDeclaration
    | RETURN expression
    ;

declaration
    : Identifier EQ expression
    ;

functionDeclaration
    : IMPLIED? IMPURE? FUN Identifier functionParameters COLON expression EQ expression
    ;

functionParameters
    : LPAREN ((functionParameter commaOrNl)* functionParameter commaOrNl?)? RPAREN
    ;

functionParameter
    : IMPLIED? Identifier COLON expression NOT?
    ;

// Function Declaration
// Module Declaration
// List
// Constant
// Module Access
// Dot Call
// Dot Access
// Regular Call
// Prefix operator
// Binary operator
// Infix function

expressionBase
    : constant
    | module
    | block
    | PAREN_OPEN expression PAREN_CLOSE
    | reference
    ;

expressionCall
    : expressionBase (selector)*
    ;

selector
    : NL* (DOT | BACK) NL* expressionBase
    | PAREN_OPEN NL* ((argument commaOrNl)* argument commaOrNl?)? PAREN_CLOSE// NL* tailLambda?
    ;

expressionPrefix
    : (NOT | MINUS)* expressionCall
    ;

expressionTimesMinus
    : expressionPrefix NL* ((TIMES | DIVIDE) NL* expressionPrefix)*
    ;

expressionPlusMinus
    : expressionTimesMinus NL* ((PLUS | MINUS) NL* expressionTimesMinus)*
    ;

expressionInfix
    : expressionPlusMinus (Identifier expressionPlusMinus)*
    ;

expressionComparison
    : expressionInfix NL* ((EQEQ | NOTEQ | LTE | GTE | LT | GT) NL* expressionInfix)*
    ;

expression
    : expressionComparison
    ;

call
    : expression PAREN_OPEN NL* ((argument commaOrNl)* argument commaOrNl?)? PAREN_CLOSE // NL* tailLambda?
    ;

argument
    : expression
    | Identifier EQ expression
    ;


constant
    :   integerConstant
    |   floatingConstant
    |   stringLiteral
    ;

stringLiteral
    : lineStringLiteral
    | multiLineStringLiteral
    ;


lineStringLiteral
    : QUOTE_OPEN (lineStringContent)* QUOTE_CLOSE
    ;

multiLineStringLiteral
    : TRIPLE_QUOTE_OPEN (multiLineStringContent | lineStringLiteral | MultiLineStringQuote)* TRIPLE_QUOTE_CLOSE
    ;

lineStringContent
    : LineStrText
    | LineStrEscapedChar
    ;

multiLineStringContent
    : MultiLineStrText
    | MultiLineStrEscapedChar
    ;

integerConstant
    :   DecimalConstant
    |   HexadecimalConstant
    |	BinaryConstant
    ;

floatingConstant
    :   FractionalConstant ExponentPart?
    |   DigitSequence ExponentPart
    ;
/*

Constants
    number
        829_341_123.321
        48901
        412e2
    string
        "asdf"
    character
        'a'

List
    [a, b, c]

Reference through modules
    a\b\c
    a::b::c

Calls

    io is io, text is result from Console\readLine(io: io)

    result: result = Int\plus(left: 1, right: 2)
    result: result = plus(left: 1, right: 2)
    result = plus(left: 1, right: 2)
    result = plus(1, 2)
    result = plus(1, right: 2)
    result = 1.plus(2)
    result = 1 plus 2
    result = 1 + 2

    Preferences
        Operator
        Infix (if marked)
        Dot Notation

    Tail Lambdas
        list.map where x => x + 1
        list.map { it + 1 }  // How do we get implied typing information?

Access
    SomeStruct = {...}
    instance = SomeStruct\construct(x: 2)
    instanceX = SomeStruct\x(this: instance)
    instanceX = instance.x()
    instanceX = instance.x

    instanceX = SomeStruct\x(this: instance, value: 3)
    instance = instance.x(3)
    instance.x = 3

    linked = ...
    linked = LinkedStructure\next(linked, LinkedStructure\x(LinkedStructure\next(linked), 1))
    linked = linked.next(linked.next.x(1))
    linked.next.x = 1

    Reversing Preferences
        Always use shorthand


Needed Support
    Operation Flattening
    Implied Lambda Contexts
    "This" implied

// Function Declaration
// Module Declaration
// List
// Constant
// Module Access
// Dot Call
// Dot Access
// Regular Call
// Prefix operator
// Binary operator
// Infix function
*/