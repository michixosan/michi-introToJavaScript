// Blocks

var amount = 99.99;

// a general block
{
    amount = amount * 2;
    console.log(amount);    //199.98
}

/**Typically, blocks are attached to some other control statement, such as an if statement */

var amount = 99.99;

// is amount big enough?
if (amount > 10) {          // <-- blocks attached to 'if'
    amount = amount * 2;
    console.log(amount);    // 199.98
}

// Unlike most other statements like console.log(amount), a block statement doesn't need a semicolon

