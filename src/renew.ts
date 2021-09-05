type NameAndContext = string

interface Scope {
    publicMembers: Record<NameAndContext, Expression>
    privateMembers: Record<NameAndContext, Expression>
}

type Expression = Reference | Constant | Extern | Call | List
interface Reference {
    on?: Expression,
    key: string
}
interface Constant { value: any }
interface Extern { getValue: (context: LiveScope)=>any }
interface Call { func: Expression, inputs: Scope }
interface List { items: Array<Expression> }

//---

interface ILiveScope {
    get(key: string): any
}
class LiveScope implements ILiveScope {
    source: Scope
    parent?: LiveScope
    calculatedCalls: Map<Call, any>
    calculated: Record<NameAndContext, any>
    get(key: string, context: string): any {

    }
}

//---

interface L2Scope {
    publicMembers: Record<NameAndContext, L2Expression>
    privateMembers: Record<NameAndContext, L2Expression>
}
type L2Expression = L2Reference | Constant | Extern | L2Call | L2ReceiverCall | L2List
interface L2Reference {
    on?: L2Expression,
    key: string
}
interface L2Call { func: L2Expression, inputs: L2Scope }
interface L2ReceiverCall { name: string, receiver: L2Expression, inputs: L2Scope }  // Simplifies to Call
interface L2List { items: Array<L2Expression> }

//---
