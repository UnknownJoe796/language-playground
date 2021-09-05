import readline from 'readline'
import {runReplSafe} from "./repl";
import {base } from './base'
import {Scope} from "./types";

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
    const myScope = new Scope(base)
    while(true){
        const toRun = await q("> ")
        if(toRun === "quit" || toRun === "exit") break
        runReplSafe(toRun, myScope)
    }

}

main().then(() => {
    process.exit(0)
})