grammar Alt;

file
    : fileHeader moduleContents
    ;

fileHeader
    : importLine* impliedConversion*
    ;

importLine
    : IMPORT IDENTIFIER end
    ;

impliedConversion
    : IMPLIED IDENTIFIER end
    ;

moduleContents
    : declaration*
    ;

declaration
    : IDENTIFIER EQ expression end
    ;

end
    : NL | SEMI
    ;


expressionBase
    : constant
    | anonFunctionDeclaration
    | listExpression
    | module
    | PAREN_OPEN expression PAREN_CLOSE
    | Identifier
    ;

expressionCall
    : expressionBase (selector)*
    ;

selector
    : NL* (DOT | BACK) NL* expressionBase
    | PAREN_OPEN NL* ((argument commaOrNl)* argument commaOrNl?)? PAREN_CLOSE NL* tailLambda?
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
    : expressionPlusMinus NL* (Identifier NL* expressionPlusMinus)*
    ;

expressionComparison
    : expressionInfix NL* ((EQEQ | NOTEQ | LTE | GTE | LT | GT) NL* expressionInfix)*
    ;

expression
    : expressionComparison
    ;

identifier
    : IDENTIFIER ()?
    ;
    
PLUS: '+';
MINUS: '-';
TIMES: '*';
DIVIDE: '/';
MODULUS: '%';
EQEQ: '==';
NOT: '!';
NOTEQ: '!=';
LTE: '<=';
GTE: '>=';
LT: '<';
GT: '>';

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
BACK: '\\';
NL: '\n';
SEMI: ';';
MODULE: 'module';
WITH: 'with';
USING: 'using';
IMPORT: 'import';
IMPLIED: 'implied';
FUN: 'fun';
IDENTIFIER: [a-zA-Z_][a-zA-Z0-9_]*;
WS:   (' ' | '\t' | '\r') -> channel(HIDDEN);