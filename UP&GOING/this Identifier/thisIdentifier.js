
// this Identifier

function foo() {
    console.log(this.bar);
}
var bar = "global";

var obj1 = {
    bar: "obj1",
    foo: foo
};

var obj2 = {
    bar: "obj2"
};

// -------
foo();          // "global"
obj1.foo();     // "obj1"           // sets 'this' to the obj1 object
foo.call(obj2); // "obj2"           // sets 'this' to the obj2 object
new foo();      // undefined        // sets 'this' to a brand new empty object