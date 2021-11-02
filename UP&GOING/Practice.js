/**
 * 
    • Write a program to calculate the total price of your phone pur‐
    chase. You will keep purchasing phones (hint: loop!) until you
    run out of money in your bank account. You’ll also buy accesso‐
    ries for each phone as long as your purchase amount is below
    your mental spending threshold.

    • After you’ve calculated your purchase amount, add in the tax,
    then print out the calculated purchase amount, properly for‐
    matted.

    • Finally, check the amount against your bank account balance to
    see if you can afford it or not.

    • You should set up some constants for the “tax rate,” “phone
    price,” “accessory price,” and “spending threshold,” as well as a
    variable for your “bank account balance.”

    • You should define functions for calculating the tax and for for‐
    matting the price with a “$” and rounding to two decimal
    places.
*/

const tax_rate = 0.08;
const phone_Price = 99.99;
const accessory_price = 9.99;
const spending_threshold = 99.99;

var bank_balance = 303.91;
var amount = 0;

function calculateTax(amount) {
    return amount * tax_rate;
}
function formatAmount(amount) {
    return "$" + amount.toFixed(2);
}

// keep buying the phone while you still have money
while (amount < bank_balance) {
    // buy a new phone!
    amount = amount + phone_Price;

    // can we afford the accessory?
    if(amount < spending_threshold) {
        amount = amount + accessory_price;
    }
}

// government price too
amount = amount + calculateTax(amount);

console.log(
    "Your purchase: " + formatAmount(amount)
);
// your purchase: `amount`

// can actually afford this purchase?
if(amount > bank_balance) {
    console.log(
        "You can't afford this purchase. "
    )
}

// you can't afford this purchase;


const SPENDING_THRESHOLD = 100;
const TAX_RATE = 1.99;
const PHONE_PRICE = 400.00;
const ACCESSORY_PRICE = 15.99;

var BANK_BALANCE = 450.00;
var amount = 0;

    function calculateTax(amount) {
        return amount * TAX_RATE;
    }
    
    function formatAmount(amount) {
        return "$" + amount.toFixed(2)      // learn what is toFixed()
    }

    // keep buying the phone
    while (amount < BANK_BALANCE) {
        amount = amount + PHONE_PRICE;
        // accessory
        if (amount < SPENDING_THRESHOLD) {
            amount = amount + ACCESSORY_PRICE;
        }
    }

    // government fee
    amount = amount + calculateTax(amount);
    console.log(
        "Your purchase: " + formatAmount(amount)
    );

    // another purchase
    if (amount > BANK_BALANCE) {
        console.log(
            "You cannot afford this purchase:"
        )
    }