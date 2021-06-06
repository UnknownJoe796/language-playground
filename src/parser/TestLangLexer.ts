// Generated from antlr/TestLangLexer.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class TestLangLexer extends Lexer {
	public static readonly LAZY = 1;
	public static readonly ARROW = 2;
	public static readonly EQ = 3;
	public static readonly COLON = 4;
	public static readonly SQUARE_BRACE_OPEN = 5;
	public static readonly SQUARE_BRACE_CLOSE = 6;
	public static readonly BRACE_OPEN = 7;
	public static readonly BRACE_CLOSE = 8;
	public static readonly PAREN_OPEN = 9;
	public static readonly PAREN_CLOSE = 10;
	public static readonly COMMA = 11;
	public static readonly DOT = 12;
	public static readonly QUOTE_OPEN = 13;
	public static readonly TRIPLE_QUOTE_OPEN = 14;
	public static readonly Impure = 15;
	public static readonly Identifier = 16;
	public static readonly Semi = 17;
	public static readonly BinaryConstant = 18;
	public static readonly DecimalConstant = 19;
	public static readonly HexadecimalConstant = 20;
	public static readonly FractionalConstant = 21;
	public static readonly ExponentPart = 22;
	public static readonly Sign = 23;
	public static readonly DigitSequence = 24;
	public static readonly BinaryExponentPart = 25;
	public static readonly WS = 26;
	public static readonly BlockComment = 27;
	public static readonly LineComment = 28;
	public static readonly QUOTE_CLOSE = 29;
	public static readonly LineStrText = 30;
	public static readonly LineStrEscapedChar = 31;
	public static readonly TRIPLE_QUOTE_CLOSE = 32;
	public static readonly MultiLineStringQuote = 33;
	public static readonly MultiLineStrText = 34;
	public static readonly MultiLineStrEscapedChar = 35;
	public static readonly LineString = 1;
	public static readonly MultiLineString = 2;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE", "LineString", "MultiLineString",
	];

	public static readonly ruleNames: string[] = [
		"LAZY", "ARROW", "EQ", "COLON", "SQUARE_BRACE_OPEN", "SQUARE_BRACE_CLOSE", 
		"BRACE_OPEN", "BRACE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE", "COMMA", "DOT", 
		"QUOTE_OPEN", "TRIPLE_QUOTE_OPEN", "Impure", "Identifier", "Semi", "Nondigit", 
		"Digit", "BinaryConstant", "DecimalConstant", "HexadecimalConstant", "FractionalConstant", 
		"ExponentPart", "Sign", "DigitSequence", "BinaryExponentPart", "WS", "BlockComment", 
		"LineComment", "QUOTE_CLOSE", "LineStrText", "LineStrEscapedChar", "TRIPLE_QUOTE_CLOSE", 
		"MultiLineStringQuote", "MultiLineStrText", "MultiLineStrEscapedChar",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'*'", "'->'", "'='", "':'", "'['", "']'", "'{'", "'}'", "'('", 
		"')'", "','", "'.'", undefined, "'\"\"\"'", "'impure'", undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "LAZY", "ARROW", "EQ", "COLON", "SQUARE_BRACE_OPEN", "SQUARE_BRACE_CLOSE", 
		"BRACE_OPEN", "BRACE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE", "COMMA", "DOT", 
		"QUOTE_OPEN", "TRIPLE_QUOTE_OPEN", "Impure", "Identifier", "Semi", "BinaryConstant", 
		"DecimalConstant", "HexadecimalConstant", "FractionalConstant", "ExponentPart", 
		"Sign", "DigitSequence", "BinaryExponentPart", "WS", "BlockComment", "LineComment", 
		"QUOTE_CLOSE", "LineStrText", "LineStrEscapedChar", "TRIPLE_QUOTE_CLOSE", 
		"MultiLineStringQuote", "MultiLineStrText", "MultiLineStrEscapedChar",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TestLangLexer._LITERAL_NAMES, TestLangLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TestLangLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(TestLangLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "TestLangLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return TestLangLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return TestLangLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return TestLangLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return TestLangLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02%\xFD\b\x01\b" +
		"\x01\b\x01\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04" +
		"\x06\t\x06\x04\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f" +
		"\t\f\x04\r\t\r\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11" +
		"\x04\x12\t\x12\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16" +
		"\x04\x17\t\x17\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B" +
		"\x04\x1C\t\x1C\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!" +
		"\t!\x04\"\t\"\x04#\t#\x04$\t$\x04%\t%\x04&\t&\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07" +
		"\x03\x07\x03\b\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03" +
		"\r\x03\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x0F\x03\x0F" +
		"\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10" +
		"\x03\x11\x03\x11\x07\x11|\n\x11\f\x11\x0E\x11\x7F\v\x11\x03\x12\x03\x12" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x06\x15\x8A\n" +
		"\x15\r\x15\x0E\x15\x8B\x03\x16\x03\x16\x07\x16\x90\n\x16\f\x16\x0E\x16" +
		"\x93\v\x16\x03\x17\x03\x17\x03\x17\x06\x17\x98\n\x17\r\x17\x0E\x17\x99" +
		"\x03\x18\x05\x18\x9D\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05" +
		"\x18\xA4\n\x18\x03\x19\x03\x19\x05\x19\xA8\n\x19\x03\x19\x03\x19\x03\x1A" +
		"\x03\x1A\x03\x1B\x06\x1B\xAF\n\x1B\r\x1B\x0E\x1B\xB0\x03\x1C\x03\x1C\x05" +
		"\x1C\xB5\n\x1C\x03\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1D\x03\x1D\x03\x1E" +
		"\x03\x1E\x03\x1E\x03\x1E\x07\x1E\xC1\n\x1E\f\x1E\x0E\x1E\xC4\v\x1E\x03" +
		"\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x07" +
		"\x1F\xCF\n\x1F\f\x1F\x0E\x1F\xD2\v\x1F\x03\x1F\x03\x1F\x03 \x03 \x03 " +
		"\x03 \x03!\x06!\xDB\n!\r!\x0E!\xDC\x03!\x05!\xE0\n!\x03\"\x03\"\x03\"" +
		"\x03#\x05#\xE6\n#\x03#\x03#\x03#\x03#\x03#\x03#\x03$\x06$\xEF\n$\r$\x0E" +
		"$\xF0\x03%\x06%\xF4\n%\r%\x0E%\xF5\x03%\x05%\xF9\n%\x03&\x03&\x03&\x03" +
		"\xC2\x02\x02\'\x05\x02\x03\x07\x02\x04\t\x02\x05\v\x02\x06\r\x02\x07\x0F" +
		"\x02\b\x11\x02\t\x13\x02\n\x15\x02\v\x17\x02\f\x19\x02\r\x1B\x02\x0E\x1D" +
		"\x02\x0F\x1F\x02\x10!\x02\x11#\x02\x12%\x02\x13\'\x02\x02)\x02\x02+\x02" +
		"\x14-\x02\x15/\x02\x161\x02\x173\x02\x185\x02\x197\x02\x1A9\x02\x1B;\x02" +
		"\x1C=\x02\x1D?\x02\x1EA\x02\x1FC\x02 E\x02!G\x02\"I\x02#K\x02$M\x02%\x05" +
		"\x02\x03\x04\x10\x05\x02C\\aac|\x06\x022;C\\aac|\x03\x022;\x04\x02DDd" +
		"d\x03\x0223\x03\x023;\x04\x02ZZzz\x05\x022;CHch\x04\x02GGgg\x04\x02--" +
		"//\x04\x02RRrr\x05\x02\v\f\x0F\x0F\"\"\x04\x02\f\f\x0F\x0F\x05\x02$$&" +
		"&^^\x02\u0109\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02\x02\t\x03" +
		"\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r\x03\x02\x02\x02\x02\x0F\x03\x02" +
		"\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13\x03\x02\x02\x02\x02\x15\x03\x02" +
		"\x02\x02\x02\x17\x03\x02\x02\x02\x02\x19\x03\x02\x02\x02\x02\x1B\x03\x02" +
		"\x02\x02\x02\x1D\x03\x02\x02\x02\x02\x1F\x03\x02\x02\x02\x02!\x03\x02" +
		"\x02\x02\x02#\x03\x02\x02\x02\x02%\x03\x02\x02\x02\x02+\x03\x02\x02\x02" +
		"\x02-\x03\x02\x02\x02\x02/\x03\x02\x02\x02\x021\x03\x02\x02\x02\x023\x03" +
		"\x02\x02\x02\x025\x03\x02\x02\x02\x027\x03\x02\x02\x02\x029\x03\x02\x02" +
		"\x02\x02;\x03\x02\x02\x02\x02=\x03\x02\x02\x02\x02?\x03\x02\x02\x02\x03" +
		"A\x03\x02\x02\x02\x03C\x03\x02\x02\x02\x03E\x03\x02\x02\x02\x04G\x03\x02" +
		"\x02\x02\x04I\x03\x02\x02\x02\x04K\x03\x02\x02\x02\x04M\x03\x02\x02\x02" +
		"\x05O\x03\x02\x02\x02\x07Q\x03\x02\x02\x02\tT\x03\x02\x02\x02\vV\x03\x02" +
		"\x02\x02\rX\x03\x02\x02\x02\x0FZ\x03\x02\x02\x02\x11\\\x03\x02\x02\x02" +
		"\x13^\x03\x02\x02\x02\x15`\x03\x02\x02\x02\x17b\x03\x02\x02\x02\x19d\x03" +
		"\x02\x02\x02\x1Bf\x03\x02\x02\x02\x1Dh\x03\x02\x02\x02\x1Fl\x03\x02\x02" +
		"\x02!r\x03\x02\x02\x02#y\x03\x02\x02\x02%\x80\x03\x02\x02\x02\'\x82\x03" +
		"\x02\x02\x02)\x84\x03\x02\x02\x02+\x86\x03\x02\x02\x02-\x8D\x03\x02\x02" +
		"\x02/\x94\x03\x02\x02\x021\xA3\x03\x02\x02\x023\xA5\x03\x02\x02\x025\xAB" +
		"\x03\x02\x02\x027\xAE\x03\x02\x02\x029\xB2\x03\x02\x02\x02;\xB8\x03\x02" +
		"\x02\x02=\xBC\x03\x02\x02\x02?\xCA\x03\x02\x02\x02A\xD5\x03\x02\x02\x02" +
		"C\xDF\x03\x02\x02\x02E\xE1\x03\x02\x02\x02G\xE5\x03\x02\x02\x02I\xEE\x03" +
		"\x02\x02\x02K\xF8\x03\x02\x02\x02M\xFA\x03\x02\x02\x02OP\x07,\x02\x02" +
		"P\x06\x03\x02\x02\x02QR\x07/\x02\x02RS\x07@\x02\x02S\b\x03\x02\x02\x02" +
		"TU\x07?\x02\x02U\n\x03\x02\x02\x02VW\x07<\x02\x02W\f\x03\x02\x02\x02X" +
		"Y\x07]\x02\x02Y\x0E\x03\x02\x02\x02Z[\x07_\x02\x02[\x10\x03\x02\x02\x02" +
		"\\]\x07}\x02\x02]\x12\x03\x02\x02\x02^_\x07\x7F\x02\x02_\x14\x03\x02\x02" +
		"\x02`a\x07*\x02\x02a\x16\x03\x02\x02\x02bc\x07+\x02\x02c\x18\x03\x02\x02" +
		"\x02de\x07.\x02\x02e\x1A\x03\x02\x02\x02fg\x070\x02\x02g\x1C\x03\x02\x02" +
		"\x02hi\x07$\x02\x02ij\x03\x02\x02\x02jk\b\x0E\x02\x02k\x1E\x03\x02\x02" +
		"\x02lm\x07$\x02\x02mn\x07$\x02\x02no\x07$\x02\x02op\x03\x02\x02\x02pq" +
		"\b\x0F\x03\x02q \x03\x02\x02\x02rs\x07k\x02\x02st\x07o\x02\x02tu\x07r" +
		"\x02\x02uv\x07w\x02\x02vw\x07t\x02\x02wx\x07g\x02\x02x\"\x03\x02\x02\x02" +
		"y}\t\x02\x02\x02z|\t\x03\x02\x02{z\x03\x02\x02\x02|\x7F\x03\x02\x02\x02" +
		"}{\x03\x02\x02\x02}~\x03\x02\x02\x02~$\x03\x02\x02\x02\x7F}\x03\x02\x02" +
		"\x02\x80\x81\x07=\x02\x02\x81&\x03\x02\x02\x02\x82\x83\t\x02\x02\x02\x83" +
		"(\x03\x02\x02\x02\x84\x85\t\x04\x02\x02\x85*\x03\x02\x02\x02\x86\x87\x07" +
		"2\x02\x02\x87\x89\t\x05\x02\x02\x88\x8A\t\x06\x02\x02\x89\x88\x03\x02" +
		"\x02\x02\x8A\x8B\x03\x02\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02" +
		"\x02\x02\x8C,\x03\x02\x02\x02\x8D\x91\t\x07\x02\x02\x8E\x90\t\x04\x02" +
		"\x02\x8F\x8E\x03\x02\x02\x02\x90\x93\x03\x02\x02\x02\x91\x8F\x03\x02\x02" +
		"\x02\x91\x92\x03\x02\x02\x02\x92.\x03\x02\x02\x02\x93\x91\x03\x02\x02" +
		"\x02\x94\x95\x072\x02\x02\x95\x97\t\b\x02\x02\x96\x98\t\t\x02\x02\x97" +
		"\x96\x03\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x99" +
		"\x9A\x03\x02\x02\x02\x9A0\x03\x02\x02\x02\x9B\x9D\x057\x1B\x02\x9C\x9B" +
		"\x03\x02\x02\x02\x9C\x9D\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F" +
		"\x070\x02\x02\x9F\xA4\x057\x1B\x02\xA0\xA1\x057\x1B\x02\xA1\xA2\x070\x02" +
		"\x02\xA2\xA4\x03\x02\x02\x02\xA3\x9C\x03\x02\x02\x02\xA3\xA0\x03\x02\x02" +
		"\x02\xA42\x03\x02\x02\x02\xA5\xA7\t\n\x02\x02\xA6\xA8\x055\x1A\x02\xA7" +
		"\xA6\x03\x02\x02\x02\xA7\xA8\x03\x02\x02\x02\xA8\xA9\x03\x02\x02\x02\xA9" +
		"\xAA\x057\x1B\x02\xAA4\x03\x02\x02\x02\xAB\xAC\t\v\x02\x02\xAC6\x03\x02" +
		"\x02\x02\xAD\xAF\x05)\x14\x02\xAE\xAD\x03\x02\x02\x02\xAF\xB0\x03\x02" +
		"\x02\x02\xB0\xAE\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB18\x03\x02" +
		"\x02\x02\xB2\xB4\t\f\x02\x02\xB3\xB5\x055\x1A\x02\xB4\xB3\x03\x02\x02" +
		"\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6\xB7\x057\x1B" +
		"\x02\xB7:\x03\x02\x02\x02\xB8\xB9\t\r\x02\x02\xB9\xBA\x03\x02\x02\x02" +
		"\xBA\xBB\b\x1D\x04\x02\xBB<\x03\x02\x02\x02\xBC\xBD\x071\x02\x02\xBD\xBE" +
		"\x07,\x02\x02\xBE\xC2\x03\x02\x02\x02\xBF\xC1\v\x02\x02\x02\xC0\xBF\x03" +
		"\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02\xC2\xC0\x03" +
		"\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xC2\x03\x02\x02\x02\xC5\xC6\x07" +
		",\x02\x02\xC6\xC7\x071\x02\x02\xC7\xC8\x03\x02\x02\x02\xC8\xC9\b\x1E\x05" +
		"\x02\xC9>\x03\x02\x02\x02\xCA\xCB\x071\x02\x02\xCB\xCC\x071\x02\x02\xCC" +
		"\xD0\x03\x02\x02\x02\xCD\xCF\n\x0E\x02\x02\xCE\xCD\x03\x02\x02\x02\xCF" +
		"\xD2\x03\x02\x02\x02\xD0\xCE\x03\x02\x02\x02\xD0\xD1\x03\x02\x02\x02\xD1" +
		"\xD3\x03\x02\x02\x02\xD2\xD0\x03\x02\x02\x02\xD3\xD4\b\x1F\x05\x02\xD4" +
		"@\x03\x02\x02\x02\xD5\xD6\x07$\x02\x02\xD6\xD7\x03\x02\x02\x02\xD7\xD8" +
		"\b \x06\x02\xD8B\x03\x02\x02\x02\xD9\xDB\n\x0F\x02\x02\xDA\xD9\x03\x02" +
		"\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDA\x03\x02\x02\x02\xDC\xDD\x03\x02" +
		"\x02\x02\xDD\xE0\x03\x02\x02\x02\xDE\xE0\x07&\x02\x02\xDF\xDA\x03\x02" +
		"\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0D\x03\x02\x02\x02\xE1\xE2\x07^\x02" +
		"\x02\xE2\xE3\v\x02\x02\x02\xE3F\x03\x02\x02\x02\xE4\xE6\x05I$\x02\xE5" +
		"\xE4\x03\x02\x02\x02\xE5\xE6\x03\x02\x02\x02\xE6\xE7\x03\x02\x02\x02\xE7" +
		"\xE8\x07$\x02\x02\xE8\xE9\x07$\x02\x02\xE9\xEA\x07$\x02\x02\xEA\xEB\x03" +
		"\x02\x02\x02\xEB\xEC\b#\x06\x02\xECH\x03\x02\x02\x02\xED\xEF\x07$\x02" +
		"\x02\xEE\xED\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0\xEE\x03\x02\x02" +
		"\x02\xF0\xF1\x03\x02\x02\x02\xF1J\x03\x02\x02\x02\xF2\xF4\n\x0F\x02\x02" +
		"\xF3\xF2\x03\x02\x02\x02\xF4\xF5\x03\x02\x02\x02\xF5\xF3\x03\x02\x02\x02" +
		"\xF5\xF6\x03\x02\x02\x02\xF6\xF9\x03\x02\x02\x02\xF7\xF9\x07&\x02\x02" +
		"\xF8\xF3\x03\x02\x02\x02\xF8\xF7\x03\x02\x02\x02\xF9L\x03\x02\x02\x02" +
		"\xFA\xFB\x07^\x02\x02\xFB\xFC\v\x02\x02\x02\xFCN\x03\x02\x02\x02\x16\x02" +
		"\x03\x04}\x8B\x91\x99\x9C\xA3\xA7\xB0\xB4\xC2\xD0\xDC\xDF\xE5\xF0\xF5" +
		"\xF8\x07\x07\x03\x02\x07\x04\x02\x02\x03\x02\b\x02\x02\x06\x02\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TestLangLexer.__ATN) {
			TestLangLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TestLangLexer._serializedATN));
		}

		return TestLangLexer.__ATN;
	}

}

