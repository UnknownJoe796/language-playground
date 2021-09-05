import {ReplEntryContext} from "./parser/TestLangParser";
import {Scope} from "./types";
import {parseCall, parseSource, parseTestLang, parseValue} from "./parse";
import {readFileSync} from "fs";


export function runRepl(text: string, context: Scope): any {
    if(text.startsWith("@import ")) {
        const m = parseSource(parseTestLang(readFileSync(text.substring(8) as string + ".sya").toString("utf8")).module())
        for (const key in m) {
            delete context.stored[key]
            context.source[key] = m[key]
        }
        return
    }
    const e = parseTestLang(text).replEntry()
    const entries = e.module()
    if (entries) {
        const m = parseSource(entries)
        for (const key in m) {
            delete context.stored[key]
            context.source[key] = m[key]
        }
    }
    const value = e.value()
    if (value) {
        const expr = parseValue(value)
        return expr.evaluate(context)
    }
    const call = e.call()
    if (call) {
        const c = parseCall(call)
        return c.evaluate(context)
    }
}

export function runReplSafe(text: string, context: Scope): any {
    try {
        const result = runRepl(text, context)
        console.log(result)
    } catch (e) {
        console.error(e)
    }
}