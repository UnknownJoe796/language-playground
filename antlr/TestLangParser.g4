parser grammar TestLangParser;
options { tokenVocab = TestLangLexer; }

replEntry
    : call
    | module
    | value
    ;

module
    :   (statement Semi)*
    ;

statement
    : Identifier EQ value
    | (identifierSet EQ)? call
    ;

call
    : value PAREN_OPEN (valueMapping COMMA?)* PAREN_CLOSE
    ;

value
    : value PAREN_OPEN (valueMapping COMMA?)* PAREN_CLOSE
    | value DOT Identifier
    | value1
    ;

value1
    : constant
    | functionDefinition
    | BRACE_OPEN module BRACE_CLOSE
    | valueList
    | Identifier
    ;

valueList
    : SQUARE_BRACE_OPEN (value COMMA?)* SQUARE_BRACE_CLOSE
    ;

identifierSet
    : identifierMapping COMMA? (identifierMapping COMMA?)*
    | PAREN_OPEN (identifierMapping COMMA?)* PAREN_CLOSE
    ;

identifierList
    : Identifier COMMA? (Identifier COMMA?)*
    | PAREN_OPEN (Identifier COMMA?)* PAREN_CLOSE
    ;

identifierMapping
    : Identifier COLON Identifier
    | Identifier
    ;

valueMapping
    : Identifier COLON value
    ;

functionDefinition
    : Impure? identifierList ARROW identifierList BRACE_OPEN module BRACE_CLOSE
    | Impure? identifierList ARROW (Identifier EQ)? value
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
