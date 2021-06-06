// Generated from C:/Users/Joseph/IdeaProjects/LanguagePlayground/antlr\TestLangLexer.g4 by ANTLR 4.9.1
import org.antlr.v4.runtime.Lexer;
import org.antlr.v4.runtime.CharStream;
import org.antlr.v4.runtime.Token;
import org.antlr.v4.runtime.TokenStream;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.misc.*;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class TestLangLexer extends Lexer {
	static { RuntimeMetaData.checkVersion("4.9.1", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		ARROW=1, EQ=2, COLON=3, SQUARE_BRACE_OPEN=4, SQUARE_BRACE_CLOSE=5, BRACE_OPEN=6, 
		BRACE_CLOSE=7, PAREN_OPEN=8, PAREN_CLOSE=9, COMMA=10, DOT=11, QUOTE_OPEN=12, 
		TRIPLE_QUOTE_OPEN=13, Impure=14, Identifier=15, Semi=16, BinaryConstant=17, 
		DecimalConstant=18, HexadecimalConstant=19, FractionalConstant=20, ExponentPart=21, 
		Sign=22, DigitSequence=23, BinaryExponentPart=24, WS=25, BlockComment=26, 
		LineComment=27, QUOTE_CLOSE=28, LineStrText=29, LineStrEscapedChar=30, 
		TRIPLE_QUOTE_CLOSE=31, MultiLineStringQuote=32, MultiLineStrText=33, MultiLineStrEscapedChar=34;
	public static final int
		LineString=1, MultiLineString=2;
	public static String[] channelNames = {
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN"
	};

	public static String[] modeNames = {
		"DEFAULT_MODE", "LineString", "MultiLineString"
	};

	private static String[] makeRuleNames() {
		return new String[] {
			"ARROW", "EQ", "COLON", "SQUARE_BRACE_OPEN", "SQUARE_BRACE_CLOSE", "BRACE_OPEN", 
			"BRACE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE", "COMMA", "DOT", "QUOTE_OPEN", 
			"TRIPLE_QUOTE_OPEN", "Impure", "Identifier", "Semi", "Nondigit", "Digit", 
			"BinaryConstant", "DecimalConstant", "HexadecimalConstant", "FractionalConstant", 
			"ExponentPart", "Sign", "DigitSequence", "BinaryExponentPart", "WS", 
			"BlockComment", "LineComment", "QUOTE_CLOSE", "LineStrText", "LineStrEscapedChar", 
			"TRIPLE_QUOTE_CLOSE", "MultiLineStringQuote", "MultiLineStrText", "MultiLineStrEscapedChar"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'->'", "'='", "':'", "'['", "']'", "'{'", "'}'", "'('", "')'", 
			"','", "'.'", null, "'\"\"\"'", "'impure'", null, "';'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "ARROW", "EQ", "COLON", "SQUARE_BRACE_OPEN", "SQUARE_BRACE_CLOSE", 
			"BRACE_OPEN", "BRACE_CLOSE", "PAREN_OPEN", "PAREN_CLOSE", "COMMA", "DOT", 
			"QUOTE_OPEN", "TRIPLE_QUOTE_OPEN", "Impure", "Identifier", "Semi", "BinaryConstant", 
			"DecimalConstant", "HexadecimalConstant", "FractionalConstant", "ExponentPart", 
			"Sign", "DigitSequence", "BinaryExponentPart", "WS", "BlockComment", 
			"LineComment", "QUOTE_CLOSE", "LineStrText", "LineStrEscapedChar", "TRIPLE_QUOTE_CLOSE", 
			"MultiLineStringQuote", "MultiLineStrText", "MultiLineStrEscapedChar"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}


	public TestLangLexer(CharStream input) {
		super(input);
		_interp = new LexerATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	@Override
	public String getGrammarFileName() { return "TestLangLexer.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public String[] getChannelNames() { return channelNames; }

	@Override
	public String[] getModeNames() { return modeNames; }

	@Override
	public ATN getATN() { return _ATN; }

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\2$\u00f9\b\1\b\1\b"+
		"\1\4\2\t\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n"+
		"\t\n\4\13\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21"+
		"\4\22\t\22\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30"+
		"\4\31\t\31\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37"+
		"\4 \t \4!\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\3\2\3\2\3\2\3\3\3\3\3\4\3\4\3\5"+
		"\3\5\3\6\3\6\3\7\3\7\3\b\3\b\3\t\3\t\3\n\3\n\3\13\3\13\3\f\3\f\3\r\3\r"+
		"\3\r\3\r\3\16\3\16\3\16\3\16\3\16\3\16\3\17\3\17\3\17\3\17\3\17\3\17\3"+
		"\17\3\20\3\20\7\20x\n\20\f\20\16\20{\13\20\3\21\3\21\3\22\3\22\3\23\3"+
		"\23\3\24\3\24\3\24\6\24\u0086\n\24\r\24\16\24\u0087\3\25\3\25\7\25\u008c"+
		"\n\25\f\25\16\25\u008f\13\25\3\26\3\26\3\26\6\26\u0094\n\26\r\26\16\26"+
		"\u0095\3\27\5\27\u0099\n\27\3\27\3\27\3\27\3\27\3\27\5\27\u00a0\n\27\3"+
		"\30\3\30\5\30\u00a4\n\30\3\30\3\30\3\31\3\31\3\32\6\32\u00ab\n\32\r\32"+
		"\16\32\u00ac\3\33\3\33\5\33\u00b1\n\33\3\33\3\33\3\34\3\34\3\34\3\34\3"+
		"\35\3\35\3\35\3\35\7\35\u00bd\n\35\f\35\16\35\u00c0\13\35\3\35\3\35\3"+
		"\35\3\35\3\35\3\36\3\36\3\36\3\36\7\36\u00cb\n\36\f\36\16\36\u00ce\13"+
		"\36\3\36\3\36\3\37\3\37\3\37\3\37\3 \6 \u00d7\n \r \16 \u00d8\3 \5 \u00dc"+
		"\n \3!\3!\3!\3\"\5\"\u00e2\n\"\3\"\3\"\3\"\3\"\3\"\3\"\3#\6#\u00eb\n#"+
		"\r#\16#\u00ec\3$\6$\u00f0\n$\r$\16$\u00f1\3$\5$\u00f5\n$\3%\3%\3%\3\u00be"+
		"\2&\5\3\7\4\t\5\13\6\r\7\17\b\21\t\23\n\25\13\27\f\31\r\33\16\35\17\37"+
		"\20!\21#\22%\2\'\2)\23+\24-\25/\26\61\27\63\30\65\31\67\329\33;\34=\35"+
		"?\36A\37C E!G\"I#K$\5\2\3\4\20\5\2C\\aac|\6\2\62;C\\aac|\3\2\62;\4\2D"+
		"Ddd\3\2\62\63\3\2\63;\4\2ZZzz\5\2\62;CHch\4\2GGgg\4\2--//\4\2RRrr\5\2"+
		"\13\f\17\17\"\"\4\2\f\f\17\17\5\2$$&&^^\2\u0105\2\5\3\2\2\2\2\7\3\2\2"+
		"\2\2\t\3\2\2\2\2\13\3\2\2\2\2\r\3\2\2\2\2\17\3\2\2\2\2\21\3\2\2\2\2\23"+
		"\3\2\2\2\2\25\3\2\2\2\2\27\3\2\2\2\2\31\3\2\2\2\2\33\3\2\2\2\2\35\3\2"+
		"\2\2\2\37\3\2\2\2\2!\3\2\2\2\2#\3\2\2\2\2)\3\2\2\2\2+\3\2\2\2\2-\3\2\2"+
		"\2\2/\3\2\2\2\2\61\3\2\2\2\2\63\3\2\2\2\2\65\3\2\2\2\2\67\3\2\2\2\29\3"+
		"\2\2\2\2;\3\2\2\2\2=\3\2\2\2\3?\3\2\2\2\3A\3\2\2\2\3C\3\2\2\2\4E\3\2\2"+
		"\2\4G\3\2\2\2\4I\3\2\2\2\4K\3\2\2\2\5M\3\2\2\2\7P\3\2\2\2\tR\3\2\2\2\13"+
		"T\3\2\2\2\rV\3\2\2\2\17X\3\2\2\2\21Z\3\2\2\2\23\\\3\2\2\2\25^\3\2\2\2"+
		"\27`\3\2\2\2\31b\3\2\2\2\33d\3\2\2\2\35h\3\2\2\2\37n\3\2\2\2!u\3\2\2\2"+
		"#|\3\2\2\2%~\3\2\2\2\'\u0080\3\2\2\2)\u0082\3\2\2\2+\u0089\3\2\2\2-\u0090"+
		"\3\2\2\2/\u009f\3\2\2\2\61\u00a1\3\2\2\2\63\u00a7\3\2\2\2\65\u00aa\3\2"+
		"\2\2\67\u00ae\3\2\2\29\u00b4\3\2\2\2;\u00b8\3\2\2\2=\u00c6\3\2\2\2?\u00d1"+
		"\3\2\2\2A\u00db\3\2\2\2C\u00dd\3\2\2\2E\u00e1\3\2\2\2G\u00ea\3\2\2\2I"+
		"\u00f4\3\2\2\2K\u00f6\3\2\2\2MN\7/\2\2NO\7@\2\2O\6\3\2\2\2PQ\7?\2\2Q\b"+
		"\3\2\2\2RS\7<\2\2S\n\3\2\2\2TU\7]\2\2U\f\3\2\2\2VW\7_\2\2W\16\3\2\2\2"+
		"XY\7}\2\2Y\20\3\2\2\2Z[\7\177\2\2[\22\3\2\2\2\\]\7*\2\2]\24\3\2\2\2^_"+
		"\7+\2\2_\26\3\2\2\2`a\7.\2\2a\30\3\2\2\2bc\7\60\2\2c\32\3\2\2\2de\7$\2"+
		"\2ef\3\2\2\2fg\b\r\2\2g\34\3\2\2\2hi\7$\2\2ij\7$\2\2jk\7$\2\2kl\3\2\2"+
		"\2lm\b\16\3\2m\36\3\2\2\2no\7k\2\2op\7o\2\2pq\7r\2\2qr\7w\2\2rs\7t\2\2"+
		"st\7g\2\2t \3\2\2\2uy\t\2\2\2vx\t\3\2\2wv\3\2\2\2x{\3\2\2\2yw\3\2\2\2"+
		"yz\3\2\2\2z\"\3\2\2\2{y\3\2\2\2|}\7=\2\2}$\3\2\2\2~\177\t\2\2\2\177&\3"+
		"\2\2\2\u0080\u0081\t\4\2\2\u0081(\3\2\2\2\u0082\u0083\7\62\2\2\u0083\u0085"+
		"\t\5\2\2\u0084\u0086\t\6\2\2\u0085\u0084\3\2\2\2\u0086\u0087\3\2\2\2\u0087"+
		"\u0085\3\2\2\2\u0087\u0088\3\2\2\2\u0088*\3\2\2\2\u0089\u008d\t\7\2\2"+
		"\u008a\u008c\t\4\2\2\u008b\u008a\3\2\2\2\u008c\u008f\3\2\2\2\u008d\u008b"+
		"\3\2\2\2\u008d\u008e\3\2\2\2\u008e,\3\2\2\2\u008f\u008d\3\2\2\2\u0090"+
		"\u0091\7\62\2\2\u0091\u0093\t\b\2\2\u0092\u0094\t\t\2\2\u0093\u0092\3"+
		"\2\2\2\u0094\u0095\3\2\2\2\u0095\u0093\3\2\2\2\u0095\u0096\3\2\2\2\u0096"+
		".\3\2\2\2\u0097\u0099\5\65\32\2\u0098\u0097\3\2\2\2\u0098\u0099\3\2\2"+
		"\2\u0099\u009a\3\2\2\2\u009a\u009b\7\60\2\2\u009b\u00a0\5\65\32\2\u009c"+
		"\u009d\5\65\32\2\u009d\u009e\7\60\2\2\u009e\u00a0\3\2\2\2\u009f\u0098"+
		"\3\2\2\2\u009f\u009c\3\2\2\2\u00a0\60\3\2\2\2\u00a1\u00a3\t\n\2\2\u00a2"+
		"\u00a4\5\63\31\2\u00a3\u00a2\3\2\2\2\u00a3\u00a4\3\2\2\2\u00a4\u00a5\3"+
		"\2\2\2\u00a5\u00a6\5\65\32\2\u00a6\62\3\2\2\2\u00a7\u00a8\t\13\2\2\u00a8"+
		"\64\3\2\2\2\u00a9\u00ab\5\'\23\2\u00aa\u00a9\3\2\2\2\u00ab\u00ac\3\2\2"+
		"\2\u00ac\u00aa\3\2\2\2\u00ac\u00ad\3\2\2\2\u00ad\66\3\2\2\2\u00ae\u00b0"+
		"\t\f\2\2\u00af\u00b1\5\63\31\2\u00b0\u00af\3\2\2\2\u00b0\u00b1\3\2\2\2"+
		"\u00b1\u00b2\3\2\2\2\u00b2\u00b3\5\65\32\2\u00b38\3\2\2\2\u00b4\u00b5"+
		"\t\r\2\2\u00b5\u00b6\3\2\2\2\u00b6\u00b7\b\34\4\2\u00b7:\3\2\2\2\u00b8"+
		"\u00b9\7\61\2\2\u00b9\u00ba\7,\2\2\u00ba\u00be\3\2\2\2\u00bb\u00bd\13"+
		"\2\2\2\u00bc\u00bb\3\2\2\2\u00bd\u00c0\3\2\2\2\u00be\u00bf\3\2\2\2\u00be"+
		"\u00bc\3\2\2\2\u00bf\u00c1\3\2\2\2\u00c0\u00be\3\2\2\2\u00c1\u00c2\7,"+
		"\2\2\u00c2\u00c3\7\61\2\2\u00c3\u00c4\3\2\2\2\u00c4\u00c5\b\35\5\2\u00c5"+
		"<\3\2\2\2\u00c6\u00c7\7\61\2\2\u00c7\u00c8\7\61\2\2\u00c8\u00cc\3\2\2"+
		"\2\u00c9\u00cb\n\16\2\2\u00ca\u00c9\3\2\2\2\u00cb\u00ce\3\2\2\2\u00cc"+
		"\u00ca\3\2\2\2\u00cc\u00cd\3\2\2\2\u00cd\u00cf\3\2\2\2\u00ce\u00cc\3\2"+
		"\2\2\u00cf\u00d0\b\36\5\2\u00d0>\3\2\2\2\u00d1\u00d2\7$\2\2\u00d2\u00d3"+
		"\3\2\2\2\u00d3\u00d4\b\37\6\2\u00d4@\3\2\2\2\u00d5\u00d7\n\17\2\2\u00d6"+
		"\u00d5\3\2\2\2\u00d7\u00d8\3\2\2\2\u00d8\u00d6\3\2\2\2\u00d8\u00d9\3\2"+
		"\2\2\u00d9\u00dc\3\2\2\2\u00da\u00dc\7&\2\2\u00db\u00d6\3\2\2\2\u00db"+
		"\u00da\3\2\2\2\u00dcB\3\2\2\2\u00dd\u00de\7^\2\2\u00de\u00df\13\2\2\2"+
		"\u00dfD\3\2\2\2\u00e0\u00e2\5G#\2\u00e1\u00e0\3\2\2\2\u00e1\u00e2\3\2"+
		"\2\2\u00e2\u00e3\3\2\2\2\u00e3\u00e4\7$\2\2\u00e4\u00e5\7$\2\2\u00e5\u00e6"+
		"\7$\2\2\u00e6\u00e7\3\2\2\2\u00e7\u00e8\b\"\6\2\u00e8F\3\2\2\2\u00e9\u00eb"+
		"\7$\2\2\u00ea\u00e9\3\2\2\2\u00eb\u00ec\3\2\2\2\u00ec\u00ea\3\2\2\2\u00ec"+
		"\u00ed\3\2\2\2\u00edH\3\2\2\2\u00ee\u00f0\n\17\2\2\u00ef\u00ee\3\2\2\2"+
		"\u00f0\u00f1\3\2\2\2\u00f1\u00ef\3\2\2\2\u00f1\u00f2\3\2\2\2\u00f2\u00f5"+
		"\3\2\2\2\u00f3\u00f5\7&\2\2\u00f4\u00ef\3\2\2\2\u00f4\u00f3\3\2\2\2\u00f5"+
		"J\3\2\2\2\u00f6\u00f7\7^\2\2\u00f7\u00f8\13\2\2\2\u00f8L\3\2\2\2\26\2"+
		"\3\4y\u0087\u008d\u0095\u0098\u009f\u00a3\u00ac\u00b0\u00be\u00cc\u00d8"+
		"\u00db\u00e1\u00ec\u00f1\u00f4\7\7\3\2\7\4\2\2\3\2\b\2\2\6\2\2";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}