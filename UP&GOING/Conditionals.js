// Conditionals

/*
There are quite few ways we can express conditionals (aka decisions) in our programs

The most common one is the if statement. Essentially, you're saying, "if this condition is true, do the following"

*/

var bank_balance = 302.13;
var amount = 99.99;

if (amount < bank_balance) {
    console.log(" I want to buy this phone! ");
}

    /*
    if statement requires an expression in between the parentheses () that can be treated as true or false.
    an alternative if the condition isn't true, called an "else" clause.
    */

    const accessory_price = 9.99;
    var bank_balance = 302.13;
    var amount = 99.99;
    amount = amount * 2;

    // can we afford the extra purchase?
    if (amount < bank_balance) {
        console.log("I'll take the accessory!")
        amount = amount + accessory_price;
    }
    //otherwise
    else {
        console.log("No, thanks.")
    }

    /**
     * if amount < bank_balance is true, we'll print out "I'll take the accessory"
     * and add the 9.99 to our amount variable, otherwise, the else clause says we'll just politely respond
     * with "No, thanks." and leave amount unchanged.
     */

    /**
     * value like 0 and " " are falsy, because JavaScript defines a list of specific values that are considered "falsy"
     * any other value not on the "falsy" become automatically "truthy"
     */
