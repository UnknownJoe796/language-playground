// Generated from src/TestLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ModuleContext } from "./TestLangParser";
import { StatementContext } from "./TestLangParser";
import { ValueSetContext } from "./TestLangParser";
import { CallContext } from "./TestLangParser";
import { ValueContext } from "./TestLangParser";
import { IdentifierSetContext } from "./TestLangParser";
import { FunctionDefinitionContext } from "./TestLangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TestLangParser`.
 */
export interface TestLangListener extends ParseTreeListener {
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
	 * Enter a parse tree produced by `TestLangParser.valueSet`.
	 * @param ctx the parse tree
	 */
	enterValueSet?: (ctx: ValueSetContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.valueSet`.
	 * @param ctx the parse tree
	 */
	exitValueSet?: (ctx: ValueSetContext) => void;

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
	 * Enter a parse tree produced by `TestLangParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	enterFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
	/**
	 * Exit a parse tree produced by `TestLangParser.functionDefinition`.
	 * @param ctx the parse tree
	 */
	exitFunctionDefinition?: (ctx: FunctionDefinitionContext) => void;
}

