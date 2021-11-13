
// Variables that have no value currently actually have the undefined value. Calling typeof against such variables will return "undefined":

var a;

typeof a;       // "undefined"

var b = 42;
var c;

// later
b = c;
typeof b;       // "undefined"
typeof c;       // "undefined"

/** An "undefined" variable in one that has been declared in the accessible scope, but at the moment
 * has other value in it. By contrast, an "undeclared" variable is one that has not been formally declared in the accessible scope.
 */

var ;
a;      // undefined
b;      // ReferenceError: b is not defined

/** There's also  a special behaviour associated with typeof as it relates to undeclared variables that even further reinforces the confusion. */

var a;

typeof a;       // "undefined"
typeof b;       // "undefined"