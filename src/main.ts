import {
    Call,
    Expression,
    CallResult,
    Constant,
    Reference,
    LangFunction,
    Metadata,
    InputMetadata,
    OutputMetadata,
    Scope
} from './types'
import readline from 'readline'
import {runRepl} from "./repl";
import {readFileSync} from "fs";
import {parseSource, parseTestLang} from "./parse";

const base = new Scope();

base.set("import", (context: Scope): Record<string, any> => {
    const src = parseSource(parseTestLang(readFileSync(context.get("file") as string + ".sya").toString("utf8")).module())
    const scope = new Scope()
    scope.source = src
    scope.parent = context.parent
    return {
        result: scope
    }
})
base.set("jsFunction", (context: Scope): Record<string, any> => {
    const inputs = context.get("inputs") as Array<string>
    const f = eval(`(${inputs}) => ${context.get("code")}`)
    return {
        result: (context: Scope): Record<string, any> => { return {
            result: f(...inputs.map(x => context.get(x)))
        }}
    }
})

const io = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
function q(prompt: string): Promise<string> {
    return new Promise<string>((resolve, reject) => {
        io.question(prompt, (input) => resolve(input) );
    });
}

async function main(){
    while(true){
        const toRun = await q("> ")
        if(toRun === "quit" || toRun === "exit") break
        runRepl(toRun, base)
    }

}

main().then(() => {
    process.exit(0)
})