
// You can think of "closure" as a way to "remember" and continue to access a function's scope (its variable) even once the function has finshed running.

// Consider

function makeAdder(x) {
    // parameter 'x' is an inner variable

    // inner function 'add()' uses 'x', so
    // it has a "closure" over it
    function add(y) {
        return y + x;
    };
    
    return add;
}

// `plusOne` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusOne = makeAdder( 1 );
// `plusTen` gets a reference to the inner `add(..)`
// function with closure over the `x` parameter of
// the outer `makeAdder(..)`
var plusTen = makeAdder( 10 );
plusOne( 3 ); // 4 <-- 1 + 3
plusOne( 41 ); // 42 <-- 1 + 41
plusTen( 13 ); // 23 <-- 10 + 13

/**
 * More on how this code works:
1. When we call makeAdder(1), we get back a reference to its inner
add(..) that remembers x as 1. We call this function reference
plusOne(..).
2. When we call makeAdder(10), we get back another reference to
its inner add(..) that remembers x as 10. We call this function
reference plusTen(..).
3. When we call plusOne(3), it adds 3 (its inner y) to the 1
(remembered by x), and we get 4 as the result.
4. When we call plusTen(13), it adds 13 (its inner y) to the 10
(remembered by x), and we get 23 as the result.
 */








