// Generated from antlr/TestLangParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { TestLangParserListener } from "./TestLangParserListener";

export class TestLangParser extends Parser {
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
	public static readonly RULE_replEntry = 0;
	public static readonly RULE_module = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_call = 3;
	public static readonly RULE_value = 4;
	public static readonly RULE_value1 = 5;
	public static readonly RULE_valueList = 6;
	public static readonly RULE_identifierSet = 7;
	public static readonly RULE_identifierList = 8;
	public static readonly RULE_identifierMapping = 9;
	public static readonly RULE_valueMapping = 10;
	public static readonly RULE_functionDefinition = 11;
	public static readonly RULE_constant = 12;
	public static readonly RULE_stringLiteral = 13;
	public static readonly RULE_lineStringLiteral = 14;
	public static readonly RULE_multiLineStringLiteral = 15;
	public static readonly RULE_lineStringContent = 16;
	public static readonly RULE_multiLineStringContent = 17;
	public static readonly RULE_integerConstant = 18;
	public static readonly RULE_floatingConstant = 19;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"replEntry", "module", "statement", "call", "value", "value1", "valueList", 
		"identifierSet", "identifierList", "identifierMapping", "valueMapping", 
		"functionDefinition", "constant", "stringLiteral", "lineStringLiteral", 
		"multiLineStringLiteral", "lineStringContent", "multiLineStringContent", 
		"integerConstant", "floatingConstant",
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
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TestLangParser._LITERAL_NAMES, TestLangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TestLangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TestLangParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return TestLangParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return TestLangParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(TestLangParser._ATN, this);
	}
	// @RuleVersion(0)
	public replEntry(): ReplEntryContext {
		let _localctx: ReplEntryContext = new ReplEntryContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TestLangParser.RULE_replEntry);
		try {
			this.state = 43;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 0, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 40;
				this.call();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 41;
				this.module();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 42;
				this.value(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, TestLangParser.RULE_module);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 50;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TestLangParser.LAZY) | (1 << TestLangParser.SQUARE_BRACE_OPEN) | (1 << TestLangParser.BRACE_OPEN) | (1 << TestLangParser.PAREN_OPEN) | (1 << TestLangParser.QUOTE_OPEN) | (1 << TestLangParser.TRIPLE_QUOTE_OPEN) | (1 << TestLangParser.Impure) | (1 << TestLangParser.Identifier) | (1 << TestLangParser.BinaryConstant) | (1 << TestLangParser.DecimalConstant) | (1 << TestLangParser.HexadecimalConstant) | (1 << TestLangParser.FractionalConstant) | (1 << TestLangParser.DigitSequence))) !== 0)) {
				{
				{
				this.state = 45;
				this.statement();
				this.state = 46;
				this.match(TestLangParser.Semi);
				}
				}
				this.state = 52;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TestLangParser.RULE_statement);
		try {
			this.state = 62;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 53;
				this.match(TestLangParser.Identifier);
				this.state = 54;
				this.match(TestLangParser.EQ);
				this.state = 55;
				this.value(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 59;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
				case 1:
					{
					this.state = 56;
					this.identifierSet();
					this.state = 57;
					this.match(TestLangParser.EQ);
					}
					break;
				}
				this.state = 61;
				this.call();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public call(): CallContext {
		let _localctx: CallContext = new CallContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, TestLangParser.RULE_call);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 64;
			this.value(0);
			this.state = 65;
			this.match(TestLangParser.PAREN_OPEN);
			this.state = 72;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TestLangParser.Identifier) {
				{
				{
				this.state = 66;
				this.valueMapping();
				this.state = 68;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TestLangParser.COMMA) {
					{
					this.state = 67;
					this.match(TestLangParser.COMMA);
					}
				}

				}
				}
				this.state = 74;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 75;
			this.match(TestLangParser.PAREN_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public value(): ValueContext;
	public value(_p: number): ValueContext;
	// @RuleVersion(0)
	public value(_p?: number): ValueContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ValueContext = new ValueContext(this._ctx, _parentState);
		let _prevctx: ValueContext = _localctx;
		let _startState: number = 8;
		this.enterRecursionRule(_localctx, 8, TestLangParser.RULE_value, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 81;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TestLangParser.LAZY:
				{
				this.state = 78;
				this.match(TestLangParser.LAZY);
				this.state = 79;
				this.value(2);
				}
				break;
			case TestLangParser.SQUARE_BRACE_OPEN:
			case TestLangParser.BRACE_OPEN:
			case TestLangParser.PAREN_OPEN:
			case TestLangParser.QUOTE_OPEN:
			case TestLangParser.TRIPLE_QUOTE_OPEN:
			case TestLangParser.Impure:
			case TestLangParser.Identifier:
			case TestLangParser.BinaryConstant:
			case TestLangParser.DecimalConstant:
			case TestLangParser.HexadecimalConstant:
			case TestLangParser.FractionalConstant:
			case TestLangParser.DigitSequence:
				{
				this.state = 80;
				this.value1();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 100;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 98;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						_localctx = new ValueContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TestLangParser.RULE_value);
						this.state = 83;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 84;
						this.match(TestLangParser.PAREN_OPEN);
						this.state = 91;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						while (_la === TestLangParser.Identifier) {
							{
							{
							this.state = 85;
							this.valueMapping();
							this.state = 87;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === TestLangParser.COMMA) {
								{
								this.state = 86;
								this.match(TestLangParser.COMMA);
								}
							}

							}
							}
							this.state = 93;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						}
						this.state = 94;
						this.match(TestLangParser.PAREN_CLOSE);
						}
						break;

					case 2:
						{
						_localctx = new ValueContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TestLangParser.RULE_value);
						this.state = 95;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 96;
						this.match(TestLangParser.DOT);
						this.state = 97;
						this.match(TestLangParser.Identifier);
						}
						break;
					}
					}
				}
				this.state = 102;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public value1(): Value1Context {
		let _localctx: Value1Context = new Value1Context(this._ctx, this.state);
		this.enterRule(_localctx, 10, TestLangParser.RULE_value1);
		try {
			this.state = 111;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 103;
				this.constant();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 104;
				this.functionDefinition();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 105;
				this.match(TestLangParser.BRACE_OPEN);
				this.state = 106;
				this.module();
				this.state = 107;
				this.match(TestLangParser.BRACE_CLOSE);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 109;
				this.valueList();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 110;
				this.match(TestLangParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueList(): ValueListContext {
		let _localctx: ValueListContext = new ValueListContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TestLangParser.RULE_valueList);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			this.match(TestLangParser.SQUARE_BRACE_OPEN);
			this.state = 120;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TestLangParser.LAZY) | (1 << TestLangParser.SQUARE_BRACE_OPEN) | (1 << TestLangParser.BRACE_OPEN) | (1 << TestLangParser.PAREN_OPEN) | (1 << TestLangParser.QUOTE_OPEN) | (1 << TestLangParser.TRIPLE_QUOTE_OPEN) | (1 << TestLangParser.Impure) | (1 << TestLangParser.Identifier) | (1 << TestLangParser.BinaryConstant) | (1 << TestLangParser.DecimalConstant) | (1 << TestLangParser.HexadecimalConstant) | (1 << TestLangParser.FractionalConstant) | (1 << TestLangParser.DigitSequence))) !== 0)) {
				{
				{
				this.state = 114;
				this.value(0);
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TestLangParser.COMMA) {
					{
					this.state = 115;
					this.match(TestLangParser.COMMA);
					}
				}

				}
				}
				this.state = 122;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 123;
			this.match(TestLangParser.SQUARE_BRACE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierSet(): IdentifierSetContext {
		let _localctx: IdentifierSetContext = new IdentifierSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, TestLangParser.RULE_identifierSet);
		let _la: number;
		try {
			this.state = 149;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TestLangParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 125;
				this.identifierMapping();
				this.state = 127;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TestLangParser.COMMA) {
					{
					this.state = 126;
					this.match(TestLangParser.COMMA);
					}
				}

				this.state = 135;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TestLangParser.Identifier) {
					{
					{
					this.state = 129;
					this.identifierMapping();
					this.state = 131;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TestLangParser.COMMA) {
						{
						this.state = 130;
						this.match(TestLangParser.COMMA);
						}
					}

					}
					}
					this.state = 137;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case TestLangParser.PAREN_OPEN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 138;
				this.match(TestLangParser.PAREN_OPEN);
				this.state = 145;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TestLangParser.Identifier) {
					{
					{
					this.state = 139;
					this.identifierMapping();
					this.state = 141;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TestLangParser.COMMA) {
						{
						this.state = 140;
						this.match(TestLangParser.COMMA);
						}
					}

					}
					}
					this.state = 147;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 148;
				this.match(TestLangParser.PAREN_CLOSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierList(): IdentifierListContext {
		let _localctx: IdentifierListContext = new IdentifierListContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, TestLangParser.RULE_identifierList);
		let _la: number;
		try {
			this.state = 175;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TestLangParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 151;
				this.match(TestLangParser.Identifier);
				this.state = 153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TestLangParser.COMMA) {
					{
					this.state = 152;
					this.match(TestLangParser.COMMA);
					}
				}

				this.state = 161;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TestLangParser.Identifier) {
					{
					{
					this.state = 155;
					this.match(TestLangParser.Identifier);
					this.state = 157;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TestLangParser.COMMA) {
						{
						this.state = 156;
						this.match(TestLangParser.COMMA);
						}
					}

					}
					}
					this.state = 163;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case TestLangParser.PAREN_OPEN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 164;
				this.match(TestLangParser.PAREN_OPEN);
				this.state = 171;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TestLangParser.Identifier) {
					{
					{
					this.state = 165;
					this.match(TestLangParser.Identifier);
					this.state = 167;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TestLangParser.COMMA) {
						{
						this.state = 166;
						this.match(TestLangParser.COMMA);
						}
					}

					}
					}
					this.state = 173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 174;
				this.match(TestLangParser.PAREN_CLOSE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifierMapping(): IdentifierMappingContext {
		let _localctx: IdentifierMappingContext = new IdentifierMappingContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, TestLangParser.RULE_identifierMapping);
		try {
			this.state = 181;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 177;
				this.match(TestLangParser.Identifier);
				this.state = 178;
				this.match(TestLangParser.COLON);
				this.state = 179;
				this.match(TestLangParser.Identifier);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 180;
				this.match(TestLangParser.Identifier);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public valueMapping(): ValueMappingContext {
		let _localctx: ValueMappingContext = new ValueMappingContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, TestLangParser.RULE_valueMapping);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 183;
			this.match(TestLangParser.Identifier);
			this.state = 184;
			this.match(TestLangParser.COLON);
			this.state = 185;
			this.value(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, TestLangParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.state = 208;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 188;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TestLangParser.Impure) {
					{
					this.state = 187;
					this.match(TestLangParser.Impure);
					}
				}

				this.state = 190;
				this.identifierList();
				this.state = 191;
				this.match(TestLangParser.ARROW);
				this.state = 192;
				this.identifierList();
				this.state = 193;
				this.match(TestLangParser.BRACE_OPEN);
				this.state = 194;
				this.module();
				this.state = 195;
				this.match(TestLangParser.BRACE_CLOSE);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 198;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TestLangParser.Impure) {
					{
					this.state = 197;
					this.match(TestLangParser.Impure);
					}
				}

				this.state = 200;
				this.identifierList();
				this.state = 201;
				this.match(TestLangParser.ARROW);
				this.state = 204;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 202;
					this.match(TestLangParser.Identifier);
					this.state = 203;
					this.match(TestLangParser.EQ);
					}
					break;
				}
				this.state = 206;
				this.value(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public constant(): ConstantContext {
		let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, TestLangParser.RULE_constant);
		try {
			this.state = 213;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TestLangParser.BinaryConstant:
			case TestLangParser.DecimalConstant:
			case TestLangParser.HexadecimalConstant:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 210;
				this.integerConstant();
				}
				break;
			case TestLangParser.FractionalConstant:
			case TestLangParser.DigitSequence:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 211;
				this.floatingConstant();
				}
				break;
			case TestLangParser.QUOTE_OPEN:
			case TestLangParser.TRIPLE_QUOTE_OPEN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 212;
				this.stringLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringLiteral(): StringLiteralContext {
		let _localctx: StringLiteralContext = new StringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, TestLangParser.RULE_stringLiteral);
		try {
			this.state = 217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TestLangParser.QUOTE_OPEN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 215;
				this.lineStringLiteral();
				}
				break;
			case TestLangParser.TRIPLE_QUOTE_OPEN:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 216;
				this.multiLineStringLiteral();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lineStringLiteral(): LineStringLiteralContext {
		let _localctx: LineStringLiteralContext = new LineStringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, TestLangParser.RULE_lineStringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 219;
			this.match(TestLangParser.QUOTE_OPEN);
			this.state = 223;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === TestLangParser.LineStrText || _la === TestLangParser.LineStrEscapedChar) {
				{
				{
				this.state = 220;
				this.lineStringContent();
				}
				}
				this.state = 225;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 226;
			this.match(TestLangParser.QUOTE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiLineStringLiteral(): MultiLineStringLiteralContext {
		let _localctx: MultiLineStringLiteralContext = new MultiLineStringLiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, TestLangParser.RULE_multiLineStringLiteral);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 228;
			this.match(TestLangParser.TRIPLE_QUOTE_OPEN);
			this.state = 234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (TestLangParser.QUOTE_OPEN - 13)) | (1 << (TestLangParser.MultiLineStringQuote - 13)) | (1 << (TestLangParser.MultiLineStrText - 13)) | (1 << (TestLangParser.MultiLineStrEscapedChar - 13)))) !== 0)) {
				{
				this.state = 232;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case TestLangParser.MultiLineStrText:
				case TestLangParser.MultiLineStrEscapedChar:
					{
					this.state = 229;
					this.multiLineStringContent();
					}
					break;
				case TestLangParser.QUOTE_OPEN:
					{
					this.state = 230;
					this.lineStringLiteral();
					}
					break;
				case TestLangParser.MultiLineStringQuote:
					{
					this.state = 231;
					this.match(TestLangParser.MultiLineStringQuote);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 237;
			this.match(TestLangParser.TRIPLE_QUOTE_CLOSE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lineStringContent(): LineStringContentContext {
		let _localctx: LineStringContentContext = new LineStringContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, TestLangParser.RULE_lineStringContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 239;
			_la = this._input.LA(1);
			if (!(_la === TestLangParser.LineStrText || _la === TestLangParser.LineStrEscapedChar)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiLineStringContent(): MultiLineStringContentContext {
		let _localctx: MultiLineStringContentContext = new MultiLineStringContentContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, TestLangParser.RULE_multiLineStringContent);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 241;
			_la = this._input.LA(1);
			if (!(_la === TestLangParser.MultiLineStrText || _la === TestLangParser.MultiLineStrEscapedChar)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public integerConstant(): IntegerConstantContext {
		let _localctx: IntegerConstantContext = new IntegerConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, TestLangParser.RULE_integerConstant);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 243;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TestLangParser.BinaryConstant) | (1 << TestLangParser.DecimalConstant) | (1 << TestLangParser.HexadecimalConstant))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatingConstant(): FloatingConstantContext {
		let _localctx: FloatingConstantContext = new FloatingConstantContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, TestLangParser.RULE_floatingConstant);
		try {
			this.state = 251;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TestLangParser.FractionalConstant:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 245;
				this.match(TestLangParser.FractionalConstant);
				this.state = 247;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
				case 1:
					{
					this.state = 246;
					this.match(TestLangParser.ExponentPart);
					}
					break;
				}
				}
				break;
			case TestLangParser.DigitSequence:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 249;
				this.match(TestLangParser.DigitSequence);
				this.state = 250;
				this.match(TestLangParser.ExponentPart);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 4:
			return this.value_sempred(_localctx as ValueContext, predIndex);
		}
		return true;
	}
	private value_sempred(_localctx: ValueContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);

		case 1:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03%\u0100\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x05\x02" +
		".\n\x02\x03\x03\x03\x03\x03\x03\x07\x033\n\x03\f\x03\x0E\x036\v\x03\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04>\n\x04\x03\x04\x05" +
		"\x04A\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05G\n\x05\x07\x05I\n" +
		"\x05\f\x05\x0E\x05L\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03" +
		"\x06\x05\x06T\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x05\x06Z\n\x06\x07" +
		"\x06\\\n\x06\f\x06\x0E\x06_\v\x06\x03\x06\x03\x06\x03\x06\x03\x06\x07" +
		"\x06e\n\x06\f\x06\x0E\x06h\v\x06\x03\x07\x03\x07\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x03\x07\x05\x07r\n\x07\x03\b\x03\b\x03\b\x05\bw\n\b\x07" +
		"\by\n\b\f\b\x0E\b|\v\b\x03\b\x03\b\x03\t\x03\t\x05\t\x82\n\t\x03\t\x03" +
		"\t\x05\t\x86\n\t\x07\t\x88\n\t\f\t\x0E\t\x8B\v\t\x03\t\x03\t\x03\t\x05" +
		"\t\x90\n\t\x07\t\x92\n\t\f\t\x0E\t\x95\v\t\x03\t\x05\t\x98\n\t\x03\n\x03" +
		"\n\x05\n\x9C\n\n\x03\n\x03\n\x05\n\xA0\n\n\x07\n\xA2\n\n\f\n\x0E\n\xA5" +
		"\v\n\x03\n\x03\n\x03\n\x05\n\xAA\n\n\x07\n\xAC\n\n\f\n\x0E\n\xAF\v\n\x03" +
		"\n\x05\n\xB2\n\n\x03\v\x03\v\x03\v\x03\v\x05\v\xB8\n\v\x03\f\x03\f\x03" +
		"\f\x03\f\x03\r\x05\r\xBF\n\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r\x03\r" +
		"\x03\r\x05\r\xC9\n\r\x03\r\x03\r\x03\r\x03\r\x05\r\xCF\n\r\x03\r\x03\r" +
		"\x05\r\xD3\n\r\x03\x0E\x03\x0E\x03\x0E\x05\x0E\xD8\n\x0E\x03\x0F\x03\x0F" +
		"\x05\x0F\xDC\n\x0F\x03\x10\x03\x10\x07\x10\xE0\n\x10\f\x10\x0E\x10\xE3" +
		"\v\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\xEB\n\x11" +
		"\f\x11\x0E\x11\xEE\v\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x13\x03\x13" +
		"\x03\x14\x03\x14\x03\x15\x03\x15\x05\x15\xFA\n\x15\x03\x15\x03\x15\x05" +
		"\x15\xFE\n\x15\x03\x15\x02\x02\x03\n\x16\x02\x02\x04\x02\x06\x02\b\x02" +
		"\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C" +
		"\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02\x02\x05\x03\x02 !\x03\x02$%\x03" +
		"\x02\x14\x16\x02\u0117\x02-\x03\x02\x02\x02\x044\x03\x02\x02\x02\x06@" +
		"\x03\x02\x02\x02\bB\x03\x02\x02\x02\nS\x03\x02\x02\x02\fq\x03\x02\x02" +
		"\x02\x0Es\x03\x02\x02\x02\x10\x97\x03\x02\x02\x02\x12\xB1\x03\x02\x02" +
		"\x02\x14\xB7\x03\x02\x02\x02\x16\xB9\x03\x02\x02\x02\x18\xD2\x03\x02\x02" +
		"\x02\x1A\xD7\x03\x02\x02\x02\x1C\xDB\x03\x02\x02\x02\x1E\xDD\x03\x02\x02" +
		"\x02 \xE6\x03\x02\x02\x02\"\xF1\x03\x02\x02\x02$\xF3\x03\x02\x02\x02&" +
		"\xF5\x03\x02\x02\x02(\xFD\x03\x02\x02\x02*.\x05\b\x05\x02+.\x05\x04\x03" +
		"\x02,.\x05\n\x06\x02-*\x03\x02\x02\x02-+\x03\x02\x02\x02-,\x03\x02\x02" +
		"\x02.\x03\x03\x02\x02\x02/0\x05\x06\x04\x0201\x07\x13\x02\x0213\x03\x02" +
		"\x02\x022/\x03\x02\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02" +
		"\x02\x025\x05\x03\x02\x02\x0264\x03\x02\x02\x0278\x07\x12\x02\x0289\x07" +
		"\x05\x02\x029A\x05\n\x06\x02:;\x05\x10\t\x02;<\x07\x05\x02\x02<>\x03\x02" +
		"\x02\x02=:\x03\x02\x02\x02=>\x03\x02\x02\x02>?\x03\x02\x02\x02?A\x05\b" +
		"\x05\x02@7\x03\x02\x02\x02@=\x03\x02\x02\x02A\x07\x03\x02\x02\x02BC\x05" +
		"\n\x06\x02CJ\x07\v\x02\x02DF\x05\x16\f\x02EG\x07\r\x02\x02FE\x03\x02\x02" +
		"\x02FG\x03\x02\x02\x02GI\x03\x02\x02\x02HD\x03\x02\x02\x02IL\x03\x02\x02" +
		"\x02JH\x03\x02\x02\x02JK\x03\x02\x02\x02KM\x03\x02\x02\x02LJ\x03\x02\x02" +
		"\x02MN\x07\f\x02\x02N\t\x03\x02\x02\x02OP\b\x06\x01\x02PQ\x07\x03\x02" +
		"\x02QT\x05\n\x06\x04RT\x05\f\x07\x02SO\x03\x02\x02\x02SR\x03\x02\x02\x02" +
		"Tf\x03\x02\x02\x02UV\f\x06\x02\x02V]\x07\v\x02\x02WY\x05\x16\f\x02XZ\x07" +
		"\r\x02\x02YX\x03\x02\x02\x02YZ\x03\x02\x02\x02Z\\\x03\x02\x02\x02[W\x03" +
		"\x02\x02\x02\\_\x03\x02\x02\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^`" +
		"\x03\x02\x02\x02_]\x03\x02\x02\x02`e\x07\f\x02\x02ab\f\x05\x02\x02bc\x07" +
		"\x0E\x02\x02ce\x07\x12\x02\x02dU\x03\x02\x02\x02da\x03\x02\x02\x02eh\x03" +
		"\x02\x02\x02fd\x03\x02\x02\x02fg\x03\x02\x02\x02g\v\x03\x02\x02\x02hf" +
		"\x03\x02\x02\x02ir\x05\x1A\x0E\x02jr\x05\x18\r\x02kl\x07\t\x02\x02lm\x05" +
		"\x04\x03\x02mn\x07\n\x02\x02nr\x03\x02\x02\x02or\x05\x0E\b\x02pr\x07\x12" +
		"\x02\x02qi\x03\x02\x02\x02qj\x03\x02\x02\x02qk\x03\x02\x02\x02qo\x03\x02" +
		"\x02\x02qp\x03\x02\x02\x02r\r\x03\x02\x02\x02sz\x07\x07\x02\x02tv\x05" +
		"\n\x06\x02uw\x07\r\x02\x02vu\x03\x02\x02\x02vw\x03\x02\x02\x02wy\x03\x02" +
		"\x02\x02xt\x03\x02\x02\x02y|\x03\x02\x02\x02zx\x03\x02\x02\x02z{\x03\x02" +
		"\x02\x02{}\x03\x02\x02\x02|z\x03\x02\x02\x02}~\x07\b\x02\x02~\x0F\x03" +
		"\x02\x02\x02\x7F\x81\x05\x14\v\x02\x80\x82\x07\r\x02\x02\x81\x80\x03\x02" +
		"\x02\x02\x81\x82\x03\x02\x02\x02\x82\x89\x03\x02\x02\x02\x83\x85\x05\x14" +
		"\v\x02\x84\x86\x07\r\x02\x02\x85\x84\x03\x02\x02\x02\x85\x86\x03\x02\x02" +
		"\x02\x86\x88\x03\x02\x02\x02\x87\x83\x03\x02\x02\x02\x88\x8B\x03\x02\x02" +
		"\x02\x89\x87\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x98\x03\x02\x02" +
		"\x02\x8B\x89\x03\x02\x02\x02\x8C\x93\x07\v\x02\x02\x8D\x8F\x05\x14\v\x02" +
		"\x8E\x90\x07\r\x02\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90\x03\x02\x02\x02" +
		"\x90\x92\x03\x02\x02\x02\x91\x8D\x03\x02\x02\x02\x92\x95\x03\x02\x02\x02" +
		"\x93\x91\x03\x02\x02\x02\x93\x94\x03\x02\x02\x02\x94\x96\x03\x02\x02\x02" +
		"\x95\x93\x03\x02\x02\x02\x96\x98\x07\f\x02\x02\x97\x7F\x03\x02\x02\x02" +
		"\x97\x8C\x03\x02\x02\x02\x98\x11\x03\x02\x02\x02\x99\x9B\x07\x12\x02\x02" +
		"\x9A\x9C\x07\r\x02\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02" +
		"\x9C\xA3\x03\x02\x02\x02\x9D\x9F\x07\x12\x02\x02\x9E\xA0\x07\r\x02\x02" +
		"\x9F\x9E\x03\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xA2\x03\x02\x02\x02" +
		"\xA1\x9D\x03\x02\x02\x02\xA2\xA5\x03\x02\x02\x02\xA3\xA1\x03\x02\x02\x02" +
		"\xA3\xA4\x03\x02\x02\x02\xA4\xB2\x03\x02\x02\x02\xA5\xA3\x03\x02\x02\x02" +
		"\xA6\xAD\x07\v\x02\x02\xA7\xA9\x07\x12\x02\x02\xA8\xAA\x07\r\x02\x02\xA9" +
		"\xA8\x03\x02\x02\x02\xA9\xAA\x03\x02\x02\x02\xAA\xAC\x03\x02\x02\x02\xAB" +
		"\xA7\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD\xAB\x03\x02\x02\x02\xAD" +
		"\xAE\x03\x02\x02\x02\xAE\xB0\x03\x02\x02\x02\xAF\xAD\x03\x02\x02\x02\xB0" +
		"\xB2\x07\f\x02\x02\xB1\x99\x03\x02\x02\x02\xB1\xA6\x03\x02\x02\x02\xB2" +
		"\x13\x03\x02\x02\x02\xB3\xB4\x07\x12\x02\x02\xB4\xB5\x07\x06\x02\x02\xB5" +
		"\xB8\x07\x12\x02\x02\xB6\xB8\x07\x12\x02\x02\xB7\xB3\x03\x02\x02\x02\xB7" +
		"\xB6\x03\x02\x02\x02\xB8\x15\x03\x02\x02\x02\xB9\xBA\x07\x12\x02\x02\xBA" +
		"\xBB\x07\x06\x02\x02\xBB\xBC\x05\n\x06\x02\xBC\x17\x03\x02\x02\x02\xBD" +
		"\xBF\x07\x11\x02\x02\xBE\xBD\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF" +
		"\xC0\x03\x02\x02\x02\xC0\xC1\x05\x12\n\x02\xC1\xC2\x07\x04\x02\x02\xC2" +
		"\xC3\x05\x12\n\x02\xC3\xC4\x07\t\x02\x02\xC4\xC5\x05\x04\x03\x02\xC5\xC6" +
		"\x07\n\x02\x02\xC6\xD3\x03\x02\x02\x02\xC7\xC9\x07\x11\x02\x02\xC8\xC7" +
		"\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCA\x03\x02\x02\x02\xCA\xCB" +
		"\x05\x12\n\x02\xCB\xCE\x07\x04\x02\x02\xCC\xCD\x07\x12\x02\x02\xCD\xCF" +
		"\x07\x05\x02\x02\xCE\xCC\x03\x02\x02\x02\xCE\xCF\x03\x02\x02\x02\xCF\xD0" +
		"\x03\x02\x02\x02\xD0\xD1\x05\n\x06\x02\xD1\xD3\x03\x02\x02\x02\xD2\xBE" +
		"\x03\x02\x02\x02\xD2\xC8\x03\x02\x02\x02\xD3\x19\x03\x02\x02\x02\xD4\xD8" +
		"\x05&\x14\x02\xD5\xD8\x05(\x15\x02\xD6\xD8\x05\x1C\x0F\x02\xD7\xD4\x03" +
		"\x02\x02\x02\xD7\xD5\x03\x02\x02\x02\xD7\xD6\x03\x02\x02\x02\xD8\x1B\x03" +
		"\x02\x02\x02\xD9\xDC\x05\x1E\x10\x02\xDA\xDC\x05 \x11\x02\xDB\xD9\x03" +
		"\x02\x02\x02\xDB\xDA\x03\x02\x02\x02\xDC\x1D\x03\x02\x02\x02\xDD\xE1\x07" +
		"\x0F\x02\x02\xDE\xE0\x05\"\x12\x02\xDF\xDE\x03\x02\x02\x02\xE0\xE3\x03" +
		"\x02\x02\x02\xE1\xDF\x03\x02\x02\x02\xE1\xE2\x03\x02\x02\x02\xE2\xE4\x03" +
		"\x02\x02\x02\xE3\xE1\x03\x02\x02\x02\xE4\xE5\x07\x1F\x02\x02\xE5\x1F\x03" +
		"\x02\x02\x02\xE6\xEC\x07\x10\x02\x02\xE7\xEB\x05$\x13\x02\xE8\xEB\x05" +
		"\x1E\x10\x02\xE9\xEB\x07#\x02\x02\xEA\xE7\x03\x02\x02\x02\xEA\xE8\x03" +
		"\x02\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB\xEE\x03\x02\x02\x02\xEC\xEA\x03" +
		"\x02\x02\x02\xEC\xED\x03\x02\x02\x02\xED\xEF\x03\x02\x02\x02\xEE\xEC\x03" +
		"\x02\x02\x02\xEF\xF0\x07\"\x02\x02\xF0!\x03\x02\x02\x02\xF1\xF2\t\x02" +
		"\x02\x02\xF2#\x03\x02\x02\x02\xF3\xF4\t\x03\x02\x02\xF4%\x03\x02\x02\x02" +
		"\xF5\xF6\t\x04\x02\x02\xF6\'\x03\x02\x02\x02\xF7\xF9\x07\x17\x02\x02\xF8" +
		"\xFA\x07\x18\x02\x02\xF9\xF8\x03\x02\x02\x02\xF9\xFA\x03\x02\x02\x02\xFA" +
		"\xFE\x03\x02\x02\x02\xFB\xFC\x07\x1A\x02\x02\xFC\xFE\x07\x18\x02\x02\xFD" +
		"\xF7\x03\x02\x02\x02\xFD\xFB\x03\x02\x02\x02\xFE)\x03\x02\x02\x02(-4=" +
		"@FJSY]dfqvz\x81\x85\x89\x8F\x93\x97\x9B\x9F\xA3\xA9\xAD\xB1\xB7\xBE\xC8" +
		"\xCE\xD2\xD7\xDB\xE1\xEA\xEC\xF9\xFD";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TestLangParser.__ATN) {
			TestLangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TestLangParser._serializedATN));
		}

		return TestLangParser.__ATN;
	}

}

export class ReplEntryContext extends ParserRuleContext {
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
	}
	public module(): ModuleContext | undefined {
		return this.tryGetRuleContext(0, ModuleContext);
	}
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_replEntry; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterReplEntry) {
			listener.enterReplEntry(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitReplEntry) {
			listener.exitReplEntry(this);
		}
	}
}


export class ModuleContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public Semi(): TerminalNode[];
	public Semi(i: number): TerminalNode;
	public Semi(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.Semi);
		} else {
			return this.getToken(TestLangParser.Semi, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_module; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.Identifier, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.EQ, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
	}
	public identifierSet(): IdentifierSetContext | undefined {
		return this.tryGetRuleContext(0, IdentifierSetContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_statement; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	public PAREN_OPEN(): TerminalNode { return this.getToken(TestLangParser.PAREN_OPEN, 0); }
	public PAREN_CLOSE(): TerminalNode { return this.getToken(TestLangParser.PAREN_CLOSE, 0); }
	public valueMapping(): ValueMappingContext[];
	public valueMapping(i: number): ValueMappingContext;
	public valueMapping(i?: number): ValueMappingContext | ValueMappingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueMappingContext);
		} else {
			return this.getRuleContext(i, ValueMappingContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.COMMA);
		} else {
			return this.getToken(TestLangParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_call; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterCall) {
			listener.enterCall(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitCall) {
			listener.exitCall(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public PAREN_OPEN(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.PAREN_OPEN, 0); }
	public PAREN_CLOSE(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.PAREN_CLOSE, 0); }
	public valueMapping(): ValueMappingContext[];
	public valueMapping(i: number): ValueMappingContext;
	public valueMapping(i?: number): ValueMappingContext | ValueMappingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueMappingContext);
		} else {
			return this.getRuleContext(i, ValueMappingContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.COMMA);
		} else {
			return this.getToken(TestLangParser.COMMA, i);
		}
	}
	public DOT(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.DOT, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.Identifier, 0); }
	public LAZY(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.LAZY, 0); }
	public value1(): Value1Context | undefined {
		return this.tryGetRuleContext(0, Value1Context);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_value; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
}


export class Value1Context extends ParserRuleContext {
	public constant(): ConstantContext | undefined {
		return this.tryGetRuleContext(0, ConstantContext);
	}
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public BRACE_OPEN(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.BRACE_OPEN, 0); }
	public module(): ModuleContext | undefined {
		return this.tryGetRuleContext(0, ModuleContext);
	}
	public BRACE_CLOSE(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.BRACE_CLOSE, 0); }
	public valueList(): ValueListContext | undefined {
		return this.tryGetRuleContext(0, ValueListContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_value1; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterValue1) {
			listener.enterValue1(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitValue1) {
			listener.exitValue1(this);
		}
	}
}


export class ValueListContext extends ParserRuleContext {
	public SQUARE_BRACE_OPEN(): TerminalNode { return this.getToken(TestLangParser.SQUARE_BRACE_OPEN, 0); }
	public SQUARE_BRACE_CLOSE(): TerminalNode { return this.getToken(TestLangParser.SQUARE_BRACE_CLOSE, 0); }
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.COMMA);
		} else {
			return this.getToken(TestLangParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_valueList; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterValueList) {
			listener.enterValueList(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitValueList) {
			listener.exitValueList(this);
		}
	}
}


export class IdentifierSetContext extends ParserRuleContext {
	public identifierMapping(): IdentifierMappingContext[];
	public identifierMapping(i: number): IdentifierMappingContext;
	public identifierMapping(i?: number): IdentifierMappingContext | IdentifierMappingContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierMappingContext);
		} else {
			return this.getRuleContext(i, IdentifierMappingContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.COMMA);
		} else {
			return this.getToken(TestLangParser.COMMA, i);
		}
	}
	public PAREN_OPEN(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.PAREN_OPEN, 0); }
	public PAREN_CLOSE(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.PAREN_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_identifierSet; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterIdentifierSet) {
			listener.enterIdentifierSet(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitIdentifierSet) {
			listener.exitIdentifierSet(this);
		}
	}
}


export class IdentifierListContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.Identifier);
		} else {
			return this.getToken(TestLangParser.Identifier, i);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.COMMA);
		} else {
			return this.getToken(TestLangParser.COMMA, i);
		}
	}
	public PAREN_OPEN(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.PAREN_OPEN, 0); }
	public PAREN_CLOSE(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.PAREN_CLOSE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_identifierList; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterIdentifierList) {
			listener.enterIdentifierList(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitIdentifierList) {
			listener.exitIdentifierList(this);
		}
	}
}


export class IdentifierMappingContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.Identifier);
		} else {
			return this.getToken(TestLangParser.Identifier, i);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_identifierMapping; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterIdentifierMapping) {
			listener.enterIdentifierMapping(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitIdentifierMapping) {
			listener.exitIdentifierMapping(this);
		}
	}
}


export class ValueMappingContext extends ParserRuleContext {
	public Identifier(): TerminalNode { return this.getToken(TestLangParser.Identifier, 0); }
	public COLON(): TerminalNode { return this.getToken(TestLangParser.COLON, 0); }
	public value(): ValueContext {
		return this.getRuleContext(0, ValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_valueMapping; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterValueMapping) {
			listener.enterValueMapping(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitValueMapping) {
			listener.exitValueMapping(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public identifierList(): IdentifierListContext[];
	public identifierList(i: number): IdentifierListContext;
	public identifierList(i?: number): IdentifierListContext | IdentifierListContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierListContext);
		} else {
			return this.getRuleContext(i, IdentifierListContext);
		}
	}
	public ARROW(): TerminalNode { return this.getToken(TestLangParser.ARROW, 0); }
	public BRACE_OPEN(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.BRACE_OPEN, 0); }
	public module(): ModuleContext | undefined {
		return this.tryGetRuleContext(0, ModuleContext);
	}
	public BRACE_CLOSE(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.BRACE_CLOSE, 0); }
	public Impure(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.Impure, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.Identifier, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
}


export class ConstantContext extends ParserRuleContext {
	public integerConstant(): IntegerConstantContext | undefined {
		return this.tryGetRuleContext(0, IntegerConstantContext);
	}
	public floatingConstant(): FloatingConstantContext | undefined {
		return this.tryGetRuleContext(0, FloatingConstantContext);
	}
	public stringLiteral(): StringLiteralContext | undefined {
		return this.tryGetRuleContext(0, StringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_constant; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterConstant) {
			listener.enterConstant(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitConstant) {
			listener.exitConstant(this);
		}
	}
}


export class StringLiteralContext extends ParserRuleContext {
	public lineStringLiteral(): LineStringLiteralContext | undefined {
		return this.tryGetRuleContext(0, LineStringLiteralContext);
	}
	public multiLineStringLiteral(): MultiLineStringLiteralContext | undefined {
		return this.tryGetRuleContext(0, MultiLineStringLiteralContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_stringLiteral; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterStringLiteral) {
			listener.enterStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitStringLiteral) {
			listener.exitStringLiteral(this);
		}
	}
}


export class LineStringLiteralContext extends ParserRuleContext {
	public QUOTE_OPEN(): TerminalNode { return this.getToken(TestLangParser.QUOTE_OPEN, 0); }
	public QUOTE_CLOSE(): TerminalNode { return this.getToken(TestLangParser.QUOTE_CLOSE, 0); }
	public lineStringContent(): LineStringContentContext[];
	public lineStringContent(i: number): LineStringContentContext;
	public lineStringContent(i?: number): LineStringContentContext | LineStringContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineStringContentContext);
		} else {
			return this.getRuleContext(i, LineStringContentContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_lineStringLiteral; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterLineStringLiteral) {
			listener.enterLineStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitLineStringLiteral) {
			listener.exitLineStringLiteral(this);
		}
	}
}


export class MultiLineStringLiteralContext extends ParserRuleContext {
	public TRIPLE_QUOTE_OPEN(): TerminalNode { return this.getToken(TestLangParser.TRIPLE_QUOTE_OPEN, 0); }
	public TRIPLE_QUOTE_CLOSE(): TerminalNode { return this.getToken(TestLangParser.TRIPLE_QUOTE_CLOSE, 0); }
	public multiLineStringContent(): MultiLineStringContentContext[];
	public multiLineStringContent(i: number): MultiLineStringContentContext;
	public multiLineStringContent(i?: number): MultiLineStringContentContext | MultiLineStringContentContext[] {
		if (i === undefined) {
			return this.getRuleContexts(MultiLineStringContentContext);
		} else {
			return this.getRuleContext(i, MultiLineStringContentContext);
		}
	}
	public lineStringLiteral(): LineStringLiteralContext[];
	public lineStringLiteral(i: number): LineStringLiteralContext;
	public lineStringLiteral(i?: number): LineStringLiteralContext | LineStringLiteralContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LineStringLiteralContext);
		} else {
			return this.getRuleContext(i, LineStringLiteralContext);
		}
	}
	public MultiLineStringQuote(): TerminalNode[];
	public MultiLineStringQuote(i: number): TerminalNode;
	public MultiLineStringQuote(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.MultiLineStringQuote);
		} else {
			return this.getToken(TestLangParser.MultiLineStringQuote, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_multiLineStringLiteral; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterMultiLineStringLiteral) {
			listener.enterMultiLineStringLiteral(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitMultiLineStringLiteral) {
			listener.exitMultiLineStringLiteral(this);
		}
	}
}


export class LineStringContentContext extends ParserRuleContext {
	public LineStrText(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.LineStrText, 0); }
	public LineStrEscapedChar(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.LineStrEscapedChar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_lineStringContent; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterLineStringContent) {
			listener.enterLineStringContent(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitLineStringContent) {
			listener.exitLineStringContent(this);
		}
	}
}


export class MultiLineStringContentContext extends ParserRuleContext {
	public MultiLineStrText(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.MultiLineStrText, 0); }
	public MultiLineStrEscapedChar(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.MultiLineStrEscapedChar, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_multiLineStringContent; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterMultiLineStringContent) {
			listener.enterMultiLineStringContent(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitMultiLineStringContent) {
			listener.exitMultiLineStringContent(this);
		}
	}
}


export class IntegerConstantContext extends ParserRuleContext {
	public DecimalConstant(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.DecimalConstant, 0); }
	public HexadecimalConstant(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.HexadecimalConstant, 0); }
	public BinaryConstant(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.BinaryConstant, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_integerConstant; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterIntegerConstant) {
			listener.enterIntegerConstant(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitIntegerConstant) {
			listener.exitIntegerConstant(this);
		}
	}
}


export class FloatingConstantContext extends ParserRuleContext {
	public FractionalConstant(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.FractionalConstant, 0); }
	public ExponentPart(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.ExponentPart, 0); }
	public DigitSequence(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.DigitSequence, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_floatingConstant; }
	// @Override
	public enterRule(listener: TestLangParserListener): void {
		if (listener.enterFloatingConstant) {
			listener.enterFloatingConstant(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangParserListener): void {
		if (listener.exitFloatingConstant) {
			listener.exitFloatingConstant(this);
		}
	}
}


