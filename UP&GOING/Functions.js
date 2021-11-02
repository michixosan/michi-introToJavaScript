    // Functions
    // a function is generally a named section of code that can be "called" by name, and the code inside it will be run each time.

    function printAmount() {
        console.log(amount.toFixed(2));
    }
    
    var amount = 99.99;
    printAmount();      // "99.99"
    // multiply the amount by 2
    amount = amount * 2;
    printAmount();      // "199.98"

    // Functions can optionally take arguements (aka parameters)- value you pass in. and it can also optionally return a value back

    function printAmount() {
        console.log(amt.toFixed(2));
    }
    
    function formatAmount() {
        return "$" + amount.toFixed(2);
    }

    var amount = 99.99;
    printAmount(amount * 2);     // "199.98"

    amount = formatAmount();
    console.log(amount);        //"$99.99"

    const tax_rate = 0.08;

    function calculateFinalPurchaseAmount(amt) {
        // calculate the new amount with the tax
        amt = amt + (amt * tax_rate);

        // return the new amount
        return amt;
    }

    var amount = 99.99;
    amount = calculateFinalPurchaseAmount(amount);
    console.log(amount.toFixed(2))  // "107.99"