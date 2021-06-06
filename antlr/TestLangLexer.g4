lexer grammar TestLangLexer;

ARROW: '->';
EQ: '=';
COLON: ':';
SQUARE_BRACE_OPEN: '[';
SQUARE_BRACE_CLOSE: ']';
BRACE_OPEN: '{';
BRACE_CLOSE: '}';
PAREN_OPEN: '(';
PAREN_CLOSE: ')';
COMMA: ',';
DOT: '.';
QUOTE_OPEN: '"' -> pushMode(LineString) ;
TRIPLE_QUOTE_OPEN: '"""' -> pushMode(MultiLineString) ;
Impure: 'impure';
Identifier: [a-zA-Z_][a-zA-Z0-9_]*;
Semi: ';';

fragment
Nondigit
    :   [a-zA-Z_]
    ;

fragment
Digit
    :   [0-9]
    ;

BinaryConstant
	: '0' [bB] [0-1]+
	;

DecimalConstant
    :   [1-9] [0-9]*
    ;

HexadecimalConstant
	: '0' [xX] [0-9a-fA-F]+
    ;

FractionalConstant
    :   DigitSequence? '.' DigitSequence
    |   DigitSequence '.'
    ;

ExponentPart
    :   [eE] Sign? DigitSequence
    ;

Sign
    :   [+-]
    ;

DigitSequence
    :   Digit+
    ;

BinaryExponentPart
    :   [pP] Sign? DigitSequence
    ;

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



mode LineString ;

QUOTE_CLOSE
    : '"' -> popMode
    ;

LineStrText
    : ~('\\' | '"' | '$')+ | '$'
    ;

LineStrEscapedChar
    : '\\' .
    ;


mode MultiLineString ;

TRIPLE_QUOTE_CLOSE
    : MultiLineStringQuote? '"""' -> popMode
    ;

MultiLineStringQuote
    : '"'+
    ;

MultiLineStrText
    :  ~('\\' | '"' | '$')+ | '$'
    ;

MultiLineStrEscapedChar
    : '\\' .
    ;
