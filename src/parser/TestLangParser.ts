// Generated from src/TestLang.g4 by ANTLR 4.9.0-SNAPSHOT


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

import { TestLangListener } from "./TestLangListener";
import { TestLangVisitor } from "./TestLangVisitor";


export class TestLangParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly Constant = 10;
	public static readonly DigitSequence = 11;
	public static readonly StringLiteral = 12;
	public static readonly Impure = 13;
	public static readonly Identifier = 14;
	public static readonly Semi = 15;
	public static readonly WS = 16;
	public static readonly BlockComment = 17;
	public static readonly LineComment = 18;
	public static readonly RULE_module = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_valueSet = 2;
	public static readonly RULE_call = 3;
	public static readonly RULE_value = 4;
	public static readonly RULE_identifierSet = 5;
	public static readonly RULE_functionDefinition = 6;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"module", "statement", "valueSet", "call", "value", "identifierSet", "functionDefinition",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'='", "','", "'('", "')'", "'.'", "':'", "'{'", "'}'", "'->'", 
		undefined, undefined, undefined, "'impure'", undefined, "';'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, undefined, undefined, 
		undefined, undefined, undefined, "Constant", "DigitSequence", "StringLiteral", 
		"Impure", "Identifier", "Semi", "WS", "BlockComment", "LineComment",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(TestLangParser._LITERAL_NAMES, TestLangParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return TestLangParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "TestLang.g4"; }

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
	public module(): ModuleContext {
		let _localctx: ModuleContext = new ModuleContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, TestLangParser.RULE_module);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TestLangParser.T__2) | (1 << TestLangParser.T__6) | (1 << TestLangParser.Constant) | (1 << TestLangParser.Impure) | (1 << TestLangParser.Identifier))) !== 0)) {
				{
				{
				this.state = 14;
				this.statement();
				}
				}
				this.state = 19;
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
		this.enterRule(_localctx, 2, TestLangParser.RULE_statement);
		try {
			this.state = 28;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 20;
				this.identifierSet();
				this.state = 21;
				this.match(TestLangParser.T__0);
				this.state = 22;
				this.valueSet();
				this.state = 23;
				this.match(TestLangParser.Semi);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 25;
				this.call();
				this.state = 26;
				this.match(TestLangParser.Semi);
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
	public valueSet(): ValueSetContext {
		let _localctx: ValueSetContext = new ValueSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, TestLangParser.RULE_valueSet);
		let _la: number;
		try {
			let _alt: number;
			this.state = 55;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 30;
				this.value(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 31;
				this.value(0);
				this.state = 32;
				this.match(TestLangParser.T__1);
				this.state = 38;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 33;
						this.value(0);
						this.state = 34;
						this.match(TestLangParser.T__1);
						}
						}
					}
					this.state = 40;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				}
				this.state = 41;
				this.value(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 43;
				this.match(TestLangParser.T__2);
				this.state = 50;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TestLangParser.T__2) | (1 << TestLangParser.T__6) | (1 << TestLangParser.Constant) | (1 << TestLangParser.Impure) | (1 << TestLangParser.Identifier))) !== 0)) {
					{
					{
					this.state = 44;
					this.value(0);
					this.state = 46;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TestLangParser.T__1) {
						{
						this.state = 45;
						this.match(TestLangParser.T__1);
						}
					}

					}
					}
					this.state = 52;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 53;
				this.match(TestLangParser.T__3);
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 54;
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
			this.state = 57;
			this.value(0);
			this.state = 58;
			this.match(TestLangParser.T__2);
			this.state = 65;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << TestLangParser.T__2) | (1 << TestLangParser.T__6) | (1 << TestLangParser.Constant) | (1 << TestLangParser.Impure) | (1 << TestLangParser.Identifier))) !== 0)) {
				{
				{
				this.state = 59;
				this.value(0);
				this.state = 61;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TestLangParser.T__1) {
					{
					this.state = 60;
					this.match(TestLangParser.T__1);
					}
				}

				}
				}
				this.state = 67;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 68;
			this.match(TestLangParser.T__3);
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
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 78;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 71;
				this.functionDefinition();
				}
				break;

			case 2:
				{
				this.state = 72;
				this.match(TestLangParser.Constant);
				}
				break;

			case 3:
				{
				this.state = 73;
				this.match(TestLangParser.Identifier);
				}
				break;

			case 4:
				{
				this.state = 74;
				this.match(TestLangParser.T__6);
				this.state = 75;
				this.module();
				this.state = 76;
				this.match(TestLangParser.T__7);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 88;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 86;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
					case 1:
						{
						_localctx = new ValueContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TestLangParser.RULE_value);
						this.state = 80;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 81;
						this.match(TestLangParser.T__4);
						this.state = 82;
						this.match(TestLangParser.Identifier);
						}
						break;

					case 2:
						{
						_localctx = new ValueContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, TestLangParser.RULE_value);
						this.state = 83;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 84;
						this.match(TestLangParser.T__5);
						this.state = 85;
						this.match(TestLangParser.Identifier);
						}
						break;
					}
					}
				}
				this.state = 90;
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
	public identifierSet(): IdentifierSetContext {
		let _localctx: IdentifierSetContext = new IdentifierSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, TestLangParser.RULE_identifierSet);
		let _la: number;
		try {
			this.state = 115;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case TestLangParser.Identifier:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 91;
				this.match(TestLangParser.Identifier);
				this.state = 93;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TestLangParser.T__1) {
					{
					this.state = 92;
					this.match(TestLangParser.T__1);
					}
				}

				this.state = 101;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TestLangParser.Identifier) {
					{
					{
					this.state = 95;
					this.match(TestLangParser.Identifier);
					this.state = 97;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TestLangParser.T__1) {
						{
						this.state = 96;
						this.match(TestLangParser.T__1);
						}
					}

					}
					}
					this.state = 103;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			case TestLangParser.T__2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 104;
				this.match(TestLangParser.T__2);
				this.state = 111;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la === TestLangParser.Identifier) {
					{
					{
					this.state = 105;
					this.match(TestLangParser.Identifier);
					this.state = 107;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === TestLangParser.T__1) {
						{
						this.state = 106;
						this.match(TestLangParser.T__1);
						}
					}

					}
					}
					this.state = 113;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 114;
				this.match(TestLangParser.T__3);
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
	public functionDefinition(): FunctionDefinitionContext {
		let _localctx: FunctionDefinitionContext = new FunctionDefinitionContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, TestLangParser.RULE_functionDefinition);
		let _la: number;
		try {
			this.state = 138;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 118;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TestLangParser.Impure) {
					{
					this.state = 117;
					this.match(TestLangParser.Impure);
					}
				}

				this.state = 120;
				this.identifierSet();
				this.state = 121;
				this.match(TestLangParser.T__8);
				this.state = 122;
				this.identifierSet();
				this.state = 123;
				this.match(TestLangParser.T__6);
				this.state = 124;
				this.module();
				this.state = 125;
				this.match(TestLangParser.T__7);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 128;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === TestLangParser.Impure) {
					{
					this.state = 127;
					this.match(TestLangParser.Impure);
					}
				}

				this.state = 130;
				this.identifierSet();
				this.state = 131;
				this.match(TestLangParser.T__8);
				this.state = 134;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 19, this._ctx) ) {
				case 1:
					{
					this.state = 132;
					this.match(TestLangParser.Identifier);
					this.state = 133;
					this.match(TestLangParser.T__0);
					}
					break;
				}
				this.state = 136;
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
			return this.precpred(this._ctx, 3);

		case 1:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x14\x8F\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x03\x02\x07\x02\x12\n\x02\f\x02\x0E\x02\x15\v\x02\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03\x1F" +
		"\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\'\n\x04" +
		"\f\x04\x0E\x04*\v\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04" +
		"1\n\x04\x07\x043\n\x04\f\x04\x0E\x046\v\x04\x03\x04\x03\x04\x05\x04:\n" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05@\n\x05\x07\x05B\n\x05\f\x05" +
		"\x0E\x05E\v\x05\x03\x05\x03\x05\x03\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x03\x06\x05\x06Q\n\x06\x03\x06\x03\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x07\x06Y\n\x06\f\x06\x0E\x06\\\v\x06\x03\x07\x03\x07" +
		"\x05\x07`\n\x07\x03\x07\x03\x07\x05\x07d\n\x07\x07\x07f\n\x07\f\x07\x0E" +
		"\x07i\v\x07\x03\x07\x03\x07\x03\x07\x05\x07n\n\x07\x07\x07p\n\x07\f\x07" +
		"\x0E\x07s\v\x07\x03\x07\x05\x07v\n\x07\x03\b\x05\by\n\b\x03\b\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x03\b\x03\b\x05\b\x83\n\b\x03\b\x03\b\x03\b\x03\b" +
		"\x05\b\x89\n\b\x03\b\x03\b\x05\b\x8D\n\b\x03\b\x02\x02\x03\n\t\x02\x02" +
		"\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x02\x02\x02\xA0\x02\x13\x03" +
		"\x02\x02\x02\x04\x1E\x03\x02\x02\x02\x069\x03\x02\x02\x02\b;\x03\x02\x02" +
		"\x02\nP\x03\x02\x02\x02\fu\x03\x02\x02\x02\x0E\x8C\x03\x02\x02\x02\x10" +
		"\x12\x05\x04\x03\x02\x11\x10\x03\x02\x02\x02\x12\x15\x03\x02\x02\x02\x13" +
		"\x11\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14\x03\x03\x02\x02\x02\x15" +
		"\x13\x03\x02\x02\x02\x16\x17\x05\f\x07\x02\x17\x18\x07\x03\x02\x02\x18" +
		"\x19\x05\x06\x04\x02\x19\x1A\x07\x11\x02\x02\x1A\x1F\x03\x02\x02\x02\x1B" +
		"\x1C\x05\b\x05\x02\x1C\x1D\x07\x11\x02\x02\x1D\x1F\x03\x02\x02\x02\x1E" +
		"\x16\x03\x02\x02\x02\x1E\x1B\x03\x02\x02\x02\x1F\x05\x03\x02\x02\x02 " +
		":\x05\n\x06\x02!\"\x05\n\x06\x02\"(\x07\x04\x02\x02#$\x05\n\x06\x02$%" +
		"\x07\x04\x02\x02%\'\x03\x02\x02\x02&#\x03\x02\x02\x02\'*\x03\x02\x02\x02" +
		"(&\x03\x02\x02\x02()\x03\x02\x02\x02)+\x03\x02\x02\x02*(\x03\x02\x02\x02" +
		"+,\x05\n\x06\x02,:\x03\x02\x02\x02-4\x07\x05\x02\x02.0\x05\n\x06\x02/" +
		"1\x07\x04\x02\x020/\x03\x02\x02\x0201\x03\x02\x02\x0213\x03\x02\x02\x02" +
		"2.\x03\x02\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x0245\x03\x02\x02\x02" +
		"57\x03\x02\x02\x0264\x03\x02\x02\x027:\x07\x06\x02\x028:\x05\b\x05\x02" +
		"9 \x03\x02\x02\x029!\x03\x02\x02\x029-\x03\x02\x02\x0298\x03\x02\x02\x02" +
		":\x07\x03\x02\x02\x02;<\x05\n\x06\x02<C\x07\x05\x02\x02=?\x05\n\x06\x02" +
		">@\x07\x04\x02\x02?>\x03\x02\x02\x02?@\x03\x02\x02\x02@B\x03\x02\x02\x02" +
		"A=\x03\x02\x02\x02BE\x03\x02\x02\x02CA\x03\x02\x02\x02CD\x03\x02\x02\x02" +
		"DF\x03\x02\x02\x02EC\x03\x02\x02\x02FG\x07\x06\x02\x02G\t\x03\x02\x02" +
		"\x02HI\b\x06\x01\x02IQ\x05\x0E\b\x02JQ\x07\f\x02\x02KQ\x07\x10\x02\x02" +
		"LM\x07\t\x02\x02MN\x05\x02\x02\x02NO\x07\n\x02\x02OQ\x03\x02\x02\x02P" +
		"H\x03\x02\x02\x02PJ\x03\x02\x02\x02PK\x03\x02\x02\x02PL\x03\x02\x02\x02" +
		"QZ\x03\x02\x02\x02RS\f\x05\x02\x02ST\x07\x07\x02\x02TY\x07\x10\x02\x02" +
		"UV\f\x04\x02\x02VW\x07\b\x02\x02WY\x07\x10\x02\x02XR\x03\x02\x02\x02X" +
		"U\x03\x02\x02\x02Y\\\x03\x02\x02\x02ZX\x03\x02\x02\x02Z[\x03\x02\x02\x02" +
		"[\v\x03\x02\x02\x02\\Z\x03\x02\x02\x02]_\x07\x10\x02\x02^`\x07\x04\x02" +
		"\x02_^\x03\x02\x02\x02_`\x03\x02\x02\x02`g\x03\x02\x02\x02ac\x07\x10\x02" +
		"\x02bd\x07\x04\x02\x02cb\x03\x02\x02\x02cd\x03\x02\x02\x02df\x03\x02\x02" +
		"\x02ea\x03\x02\x02\x02fi\x03\x02\x02\x02ge\x03\x02\x02\x02gh\x03\x02\x02" +
		"\x02hv\x03\x02\x02\x02ig\x03\x02\x02\x02jq\x07\x05\x02\x02km\x07\x10\x02" +
		"\x02ln\x07\x04\x02\x02ml\x03\x02\x02\x02mn\x03\x02\x02\x02np\x03\x02\x02" +
		"\x02ok\x03\x02\x02\x02ps\x03\x02\x02\x02qo\x03\x02\x02\x02qr\x03\x02\x02" +
		"\x02rt\x03\x02\x02\x02sq\x03\x02\x02\x02tv\x07\x06\x02\x02u]\x03\x02\x02" +
		"\x02uj\x03\x02\x02\x02v\r\x03\x02\x02\x02wy\x07\x0F\x02\x02xw\x03\x02" +
		"\x02\x02xy\x03\x02\x02\x02yz\x03\x02\x02\x02z{\x05\f\x07\x02{|\x07\v\x02" +
		"\x02|}\x05\f\x07\x02}~\x07\t\x02\x02~\x7F\x05\x02\x02\x02\x7F\x80\x07" +
		"\n\x02\x02\x80\x8D\x03\x02\x02\x02\x81\x83\x07\x0F\x02\x02\x82\x81\x03" +
		"\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x84\x03\x02\x02\x02\x84\x85\x05" +
		"\f\x07\x02\x85\x88\x07\v\x02\x02\x86\x87\x07\x10\x02\x02\x87\x89\x07\x03" +
		"\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x03\x02" +
		"\x02\x02\x8A\x8B\x05\n\x06\x02\x8B\x8D\x03\x02\x02\x02\x8Cx\x03\x02\x02" +
		"\x02\x8C\x82\x03\x02\x02\x02\x8D\x0F\x03\x02\x02\x02\x17\x13\x1E(049?" +
		"CPXZ_cgmqux\x82\x88\x8C";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TestLangParser.__ATN) {
			TestLangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(TestLangParser._serializedATN));
		}

		return TestLangParser.__ATN;
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
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_module; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterModule) {
			listener.enterModule(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitModule) {
			listener.exitModule(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitModule) {
			return visitor.visitModule(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public identifierSet(): IdentifierSetContext | undefined {
		return this.tryGetRuleContext(0, IdentifierSetContext);
	}
	public valueSet(): ValueSetContext | undefined {
		return this.tryGetRuleContext(0, ValueSetContext);
	}
	public Semi(): TerminalNode { return this.getToken(TestLangParser.Semi, 0); }
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_statement; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueSetContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	public call(): CallContext | undefined {
		return this.tryGetRuleContext(0, CallContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_valueSet; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterValueSet) {
			listener.enterValueSet(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitValueSet) {
			listener.exitValueSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitValueSet) {
			return visitor.visitValueSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CallContext extends ParserRuleContext {
	public value(): ValueContext[];
	public value(i: number): ValueContext;
	public value(i?: number): ValueContext | ValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ValueContext);
		} else {
			return this.getRuleContext(i, ValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_call; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterCall) {
			listener.enterCall(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitCall) {
			listener.exitCall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitCall) {
			return visitor.visitCall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	public functionDefinition(): FunctionDefinitionContext | undefined {
		return this.tryGetRuleContext(0, FunctionDefinitionContext);
	}
	public Constant(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.Constant, 0); }
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.Identifier, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public module(): ModuleContext | undefined {
		return this.tryGetRuleContext(0, ModuleContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_value; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterValue) {
			listener.enterValue(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitValue) {
			listener.exitValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitValue) {
			return visitor.visitValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierSetContext extends ParserRuleContext {
	public Identifier(): TerminalNode[];
	public Identifier(i: number): TerminalNode;
	public Identifier(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(TestLangParser.Identifier);
		} else {
			return this.getToken(TestLangParser.Identifier, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_identifierSet; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterIdentifierSet) {
			listener.enterIdentifierSet(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitIdentifierSet) {
			listener.exitIdentifierSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitIdentifierSet) {
			return visitor.visitIdentifierSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FunctionDefinitionContext extends ParserRuleContext {
	public identifierSet(): IdentifierSetContext[];
	public identifierSet(i: number): IdentifierSetContext;
	public identifierSet(i?: number): IdentifierSetContext | IdentifierSetContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdentifierSetContext);
		} else {
			return this.getRuleContext(i, IdentifierSetContext);
		}
	}
	public module(): ModuleContext | undefined {
		return this.tryGetRuleContext(0, ModuleContext);
	}
	public Impure(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.Impure, 0); }
	public value(): ValueContext | undefined {
		return this.tryGetRuleContext(0, ValueContext);
	}
	public Identifier(): TerminalNode | undefined { return this.tryGetToken(TestLangParser.Identifier, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return TestLangParser.RULE_functionDefinition; }
	// @Override
	public enterRule(listener: TestLangListener): void {
		if (listener.enterFunctionDefinition) {
			listener.enterFunctionDefinition(this);
		}
	}
	// @Override
	public exitRule(listener: TestLangListener): void {
		if (listener.exitFunctionDefinition) {
			listener.exitFunctionDefinition(this);
		}
	}
	// @Override
	public accept<Result>(visitor: TestLangVisitor<Result>): Result {
		if (visitor.visitFunctionDefinition) {
			return visitor.visitFunctionDefinition(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


