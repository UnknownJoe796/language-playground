import {base} from '../base'
import {runRepl} from '../repl'
import {Scope} from "../types";

test('factorial runs properly', () => {
    const myScope = new Scope(base)
    runRepl("@import std", myScope)
    expect(runRepl("number.factorial(input: 4)", myScope).result).toBe(4 * 3 * 2)
})