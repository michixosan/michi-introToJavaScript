// Nested Scopes

/**
 * When you declare a variable, it is available anywhere in that scope, as well as any lower/inner scopes.
 */

function foo() {
    var a = 1;
    function bar() {
        var b = 2;
        function baz() {
            var c = 3;
            
            console.log(a, b, c);   // 1 2 3
        }
        baz();
        console.log(a, b)           // 1 2
    }
    bar();
    console.log( a );               // 1
}

foo();

function foo() {
    a = 1   // `a` not formally declared
}

foo();
a;          //1--oops, auto global variable :(

    function foo() {
        var a = 1;

        if( a>= 1) {
            let b = 2;

            while(b < 5) {
                let c = b * 2;
                b++

                console.log(a + c)
            }
        }
    }
    foo();
    //  5 7 9
/**
 * using let instead of var, b (in our case) will belong only to the if statement
 * and thus not to whole foo() function's scope. Similarly, c belongs only to the while loop.
 * Block scoping is very useful for managing your variable scope in a more fine-grained fashion,
 * which can make your code much easier to maintain over time.
 */