
// Transpilling is an option to convert a newer code into older code equivalents.
// This process is commonly called "transpilling" a term for transforming + compiling

// ES6 feature called "default parameter values"

    function foo(a = 2) {
        console.log(a);
    }

    foo();          // 2
    foo(42);        // 42
    // Above code is invalid in pre-ES6 engines.

    function foo() {
        var a = arguments[0] !== (void 0) ? arguments[0] : 2;
        console.log(a);
    }

// Babel (formerly 6to5) | transpiles ES6+ into ES5
// Traceus | transpiles ES6, ES7, and beyond into ES5