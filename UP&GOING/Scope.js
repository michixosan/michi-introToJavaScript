// Scope
/**
 * Scope - technically "lexical scope"/
 * It's basically a collection of variables as well as the rules for how those variables are accessed by name.
 * Only code inside that function can access that function's "scoped" variables.
 * 
 * A variable name has to be unique within the same scope, meaning that same parameter cannot be called twice
 * but can be called in two different scopes.
 */

    function one() {
        // this "a" only belongs to the `one()` function
        var a = 1;
        console.log(a);
    }

    function two() {
        // this `a` only belongs to the `two()` function
        var a = 2;
        console.log(a);
    }

    one();      // 1
    two();      // 2

    function outer() {
        var a = 1;
        function inner() {
            var b = 2;
            // we can access both `a` and `b` here
            console.log(a + b);     // 3
        }
        inner();
        // we can only access `a` here
        console.log(a);     // 1
    }
    outer();
    /**
     * Lexical scope rules say that code in one scope can access variables of
    either that scope or any scope outside of it.
    So, code inside the inner() function has access to both variables a
    and b, but code only in outer() has access only to a—it cannot
    access b because that variable is only inside inner().
     */

    // recall this code snippet from earlier:
    const tax_rate = 0.08;
    function calculateFinalPurchaseAmount(amt) {
        // calculate the new amount with the tax
        amt = amt + (amt * tax_rate);
        // return the new amount
        return amt;
    }