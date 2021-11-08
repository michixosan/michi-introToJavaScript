/**
 * ES5 feature, a "sctrict mode" which tightens the rules for certain behaviors.
 * Scrict mode is a big win for code.
 */

function foo() {
    "use sctrict";
    // this code is strict mode

    function bar() {
        // this code is strict mode
    }
}

// Compare that to:

    "use strict"

    function foo() {
        // this code is strict mode

        function bar() {
            // this code is strict mode
        }
    }

    // this code is strict mode

    /**
     * One key difference (improvement) with strict mode is disallowing
     * the implicit auto-global variable declaration from omitting the var:
     */

    function foo() {
        "use strict";   // turn on strict mode
        a = 1;          // `var` missing, ReferenceError
    }

    foo();

    /**
     * If strict mode causes issues in your program, it's almost certainly
     * a sign that you have things in your program you should fix.
     */

    