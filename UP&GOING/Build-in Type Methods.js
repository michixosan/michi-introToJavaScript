/**
 * The built-in types and subtypes we've just discussed have behaviors exposed
 * as properties and methods that are quite powerful and useful.
 */

var a = "hello world";
var b = 3.14159;

a.length;               // 11
a.toUpperCase();        // "HELLO WORLD"
a.toFixed(4)            // 3.1416

/**
 * String (capital S) object wrapper form, typically called a "native", that pairs with primitive string type;
 * it's this object wrapper that defines the toUpperCase() method on its prototype.
 */