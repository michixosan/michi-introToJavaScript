// The other "object" subtype if 'functions'

function foo() {
    return 42;
}

foo.bar = "hello world";

typeof foo;     // "funciton"
typeof foo();   // "number"
typeof foo.bar; // "string"