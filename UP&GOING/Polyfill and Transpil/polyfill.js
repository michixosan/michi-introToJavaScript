
// Polyfill

if (!Number.isNaN) {
    Number.isNaN = function isNaN(x) {
        return x !== x;
    }
}
/** if statement guards against applying the polyfill defintion in ES6 browsers where it will already exist.
 * If it's not already present, we define Number.isNaN(..)
 */


/** Polyfill is used to take a definition of a newer feature of JS and producing a pieace of code
 *  equivalent to the behaviour, but is able to run in older JS environments
 */