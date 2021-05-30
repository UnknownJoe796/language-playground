grammar TestLang;

module
    :   statement*
    ;

statement
    : identifierSet '=' valueSet Semi
    | call Semi
    ;

valueSet
    : value
    | value ',' (value ',')* value
    | '(' (value ','?)* ')'
    | call
    ;

call
    : value '(' (value ','?)* ')'
    ;

value
    : functionDefinition
    | Constant
    | Identifier
    | value '.' Identifier
    | value ':' Identifier
    | '{' module '}'
    ;

identifierSet
    : Identifier ','? (Identifier ','?)*
    | '(' (Identifier ','?)* ')'
    ;

functionDefinition
    : Impure? identifierSet '->' identifierSet '{' module '}'
    | Impure? identifierSet '->' (Identifier '=')? value
    ;


fragment
Nondigit
    :   [a-zA-Z_]
    ;

fragment
Digit
    :   [0-9]
    ;

fragment
UniversalCharacterName
    :   '\\u' HexQuad
    |   '\\U' HexQuad HexQuad
    ;

fragment
HexQuad
    :   HexadecimalDigit HexadecimalDigit HexadecimalDigit HexadecimalDigit
    ;

Constant
    :   IntegerConstant
    |   FloatingConstant
    |   CharacterConstant
    | StringLiteral
    ;

fragment
IntegerConstant
    :   DecimalConstant
    |   HexadecimalConstant
    |	BinaryConstant
    ;

fragment
BinaryConstant
	:	'0' [bB] [0-1]+
	;

fragment
DecimalConstant
    :   NonzeroDigit Digit*
    ;

fragment
HexadecimalConstant
    :   HexadecimalPrefix HexadecimalDigit+
    ;

fragment
HexadecimalPrefix
    :   '0' [xX]
    ;

fragment
NonzeroDigit
    :   [1-9]
    ;

fragment
HexadecimalDigit
    :   [0-9a-fA-F]
    ;

fragment
FloatingConstant
    :   FractionalConstant ExponentPart?
    |   DigitSequence ExponentPart
    ;

fragment
FractionalConstant
    :   DigitSequence? '.' DigitSequence
    |   DigitSequence '.'
    ;

fragment
ExponentPart
    :   [eE] Sign? DigitSequence
    ;

fragment
Sign
    :   [+-]
    ;

DigitSequence
    :   Digit+
    ;

fragment
BinaryExponentPart
    :   [pP] Sign? DigitSequence
    ;

fragment
HexadecimalDigitSequence
    :   HexadecimalDigit+
    ;

fragment
CharacterConstant
    :   '\'' CCharSequence '\''
    |   'L\'' CCharSequence '\''
    |   'u\'' CCharSequence '\''
    |   'U\'' CCharSequence '\''
    ;

fragment
CCharSequence
    :   CChar+
    ;

fragment
CChar
    :   ~['\\\r\n]
    |   EscapeSequence
    ;
fragment
EscapeSequence
    :   SimpleEscapeSequence
    |   HexadecimalEscapeSequence
    |   UniversalCharacterName
    ;
fragment
SimpleEscapeSequence
    :   '\\' ['"?abfnrtv\\]
    ;
fragment
HexadecimalEscapeSequence
    :   '\\x' HexadecimalDigit+
    ;
StringLiteral
    :   '"' SCharSequence? '"'
    ;
fragment
SCharSequence
    :   SChar+
    ;
fragment
SChar
    :   ~["\\\r\n]
    |   EscapeSequence
    |   '\\\n'   // Added line
    |   '\\\r\n' // Added line
    ;

Impure: 'impure';
Identifier: [a-zA-Z_][a-zA-Z0-9_]*;
Semi: ';';

//
/* We're going to ignore all white space characters */
WS
    :   (' ' | '\t' | '\r'| '\n') -> channel(HIDDEN)
    ;

BlockComment
    :   '/*' .*? '*/'
        -> skip
    ;

LineComment
    :   '//' ~[\r\n]*
        -> skip
    ;