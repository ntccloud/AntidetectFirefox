// This file was procedurally generated from the following sources:
// - src/annex-b-fns/eval-global-exsting-fn-no-init.case
// - src/annex-b-fns/eval-global/direct-if-decl-no-else.template
/*---
description: Existing variable binding is not modified (IfStatement without an else clause in eval code)
esid: sec-functiondeclarations-in-ifstatement-statement-clauses
es6id: B.3.4
flags: [generated, noStrict]
info: |
    The following rules for IfStatement augment those in 13.6:

    IfStatement[Yield, Return]:
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield] else Statement[?Yield, ?Return]
        if ( Expression[In, ?Yield] ) Statement[?Yield, ?Return] else FunctionDeclaration[?Yield]
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield] else FunctionDeclaration[?Yield]
        if ( Expression[In, ?Yield] ) FunctionDeclaration[?Yield]


    B.3.3.3 Changes to EvalDeclarationInstantiation

    [...]
    a. If declaredFunctionOrVarNames does not contain F, then
    [...]
---*/

eval(
  'assert.sameValue(f(), "outer declaration");if (true) function f() { return "inner declaration"; }function f() {\
    return "outer declaration";\
  }'
);

reportCompare(0, 0);
