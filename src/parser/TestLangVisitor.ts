// Generated from src/TestLang.g4 by ANTLR 4.9.0-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

import { ModuleContext } from "./TestLangParser";
import { StatementContext } from "./TestLangParser";
import { ValueSetContext } from "./TestLangParser";
import { CallContext } from "./TestLangParser";
import { ValueContext } from "./TestLangParser";
import { IdentifierSetContext } from "./TestLangParser";
import { FunctionDefinitionContext } from "./TestLangParser";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `TestLangParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface TestLangVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `TestLangParser.module`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitModule?: (ctx: ModuleContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.valueSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValueSet?: (ctx: ValueSetContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.call`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitCall?: (ctx: CallContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.value`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitValue?: (ctx: ValueContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.identifierSet`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifierSet?: (ctx: IdentifierSetContext) => Result;

	/**
	 * Visit a parse tree produced by `TestLangParser.functionDefinition`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitFunctionDefinition?: (ctx: FunctionDefinitionContext) => Result;
}

