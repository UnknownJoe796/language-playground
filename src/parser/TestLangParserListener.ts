// Generated from antlr/TestLangParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ReplEntryContext } from "./TestLangParser";
import { ModuleContext } from "./TestLangParser";
import { StatementContext } from "./TestLangParser";
import { CallContext } from "./TestLangParser";
import { ValueContext } from "./TestLangParser";
import { Value1Context } from "./TestLangParser";
import { ValueListContext } from "./TestLangParser";
import { IdentifierSetContext } from "./TestLangParser";
import { IdentifierListContext } from "./TestLangParser";
import { IdentifierMappingContext } from "./TestLangParser";
import { ValueMappingContext } from "./TestLangParser";
import { FunctionDefinitionContext } from "./TestLangParser";
import { ConstantContext } from "./TestLangParser";
import { StringLiteralContext } from "./TestLangParser";
import { LineStringLiteralContext } from "./TestLangParser";
import { MultiLineStringLiteralContext } from "./TestLangParser";
import { LineStringContentContext } from "./TestLangParser";
import { MultiLineStringContentContext } from "./TestLangParser";
import { IntegerConstantContext } from "./TestLangParser";
import { FloatingConstantContext } from "./TestLangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TestLangParser`.
 */
export interface TestLangParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TestLangParser.replEntry`.
	 * @param ctx the parse tree
	 */
	enterReplEntry?: (ctx: ReplEntryContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.replEntry`.
	 * @param ctx the parse tree
	 */
	exitReplEntry?: (ctx: ReplEntryContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.module`.
	 * @param ctx the parse tree
	 */
	enterModule?: (ctx: ModuleContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.module`.
	 * @param ctx the parse tree
	 */
	exitModule?: (ctx: ModuleContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.call`.
	 * @param ctx the parse tree
	 */
	enterCall?: (ctx: CallContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.call`.
	 * @param ctx the parse tree
	 */
	exitCall?: (ctx: CallContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.value1`.
	 * @param ctx the parse tree
	 */
	enterValue1?: (ctx: Value1Context) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.value1`.
	 * @param ctx the parse tree
	 */
	exitValue1?: (ctx: Value1Context) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.valueList`.
	 * @param ctx the parse tree
	 */
	enterValueList?: (ctx: ValueListContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.valueList`.
	 * @param ctx the parse tree
	 */
	exitValueList?: (ctx: ValueListContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.identifierSet`.
	 * @param ctx the parse tree
	 */
	enterIdentifierSet?: (ctx: IdentifierSetContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.identifierSet`.
	 * @param ctx the parse tree
	 */
	exitIdentifierSet?: (ctx: IdentifierSetContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.identifierList`.
	 * @param ctx the parse tree
	 */
	enterIdentifierList?: (ctx: IdentifierListContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.identifierList`.
	 * @param ctx the parse tree
	 */
	exitIdentifierList?: (ctx: IdentifierListContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.identifierMapping`.
	 * @param ctx the parse tree
	 */
	enterIdentifierMapping?: (ctx: IdentifierMappingContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.identifierMapping`.
	 * @param ctx the parse tree
	 */
	exitIdentifierMapping?: (ctx: IdentifierMappingContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.valueMapping`.
	 * @param ctx the parse tree
	 */
	enterValueMapping?: (ctx: ValueMappingContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.valueMapping`.
	 * @param ctx the parse tree
	 */
	exitValueMapping?: (ctx: ValueMappingContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.stringLiteral`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.lineStringLiteral`.
	 * @param ctx the parse tree
	 */
	enterLineStringLiteral?: (ctx: LineStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.lineStringLiteral`.
	 * @param ctx the parse tree
	 */
	exitLineStringLiteral?: (ctx: LineStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.multiLineStringLiteral`.
	 * @param ctx the parse tree
	 */
	enterMultiLineStringLiteral?: (ctx: MultiLineStringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.multiLineStringLiteral`.
	 * @param ctx the parse tree
	 */
	exitMultiLineStringLiteral?: (ctx: MultiLineStringLiteralContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.lineStringContent`.
	 * @param ctx the parse tree
	 */
	enterLineStringContent?: (ctx: LineStringContentContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.lineStringContent`.
	 * @param ctx the parse tree
	 */
	exitLineStringContent?: (ctx: LineStringContentContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.multiLineStringContent`.
	 * @param ctx the parse tree
	 */
	enterMultiLineStringContent?: (ctx: MultiLineStringContentContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.multiLineStringContent`.
	 * @param ctx the parse tree
	 */
	exitMultiLineStringContent?: (ctx: MultiLineStringContentContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.integerConstant`.
	 * @param ctx the parse tree
	 */
	enterIntegerConstant?: (ctx: IntegerConstantContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.integerConstant`.
	 * @param ctx the parse tree
	 */
	exitIntegerConstant?: (ctx: IntegerConstantContext) => void;

	/**
	 * Enter a parse tree produced by `TestLangParser.floatingConstant`.
	 * @param ctx the parse tree
	 */
	enterFloatingConstant?: (ctx: FloatingConstantContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.floatingConstant`.
	 * @param ctx the parse tree
	 */
	exitFloatingConstant?: (ctx: FloatingConstantContext) => void;
}

