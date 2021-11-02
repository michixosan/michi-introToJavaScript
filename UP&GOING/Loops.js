// Loops

/**
 * Loops are a set of repeating actions that runs until a certain condition fails.
 * 
 * For example: the while loop and the do...while loop forms illustrate the concept of repeating
 *a block of statements until a condition no longer evaluated to true.
 */

while (numofCustomers > 0) {
    console.log("How may I help you?");

    //help the customer
    numofCustomers = numofCustomers - 1;
}

    //versus:
do {
    console.log("How may I help you?");

    // help the customer...
    numofCustomers = numofCustomers - 1;
} while (numofCustomers > 0)

/**if the conditional tests as false, the next iteration will not run
 * 
 * For a variety of historical reasons, programming languages almost always count things
 * in a zero based fashion, meaning starting with 0 instead of 1.
*/

// JavaScript has a "break" statement to stop a loop.
    var i = 0;
    
    //a "while...true" loop would run forever.
    while(true) {
        //  keep the loop going?
        if(i <= 9) {
            console.log(i);
            i = i + i;
        }
        // time to stop the loop!
        else {
            break;
        }
    }
    //  0 1 2 3 4 5 6 7 8 9 <-- illustration purposes only.

    //  while or do..while  =   can accomplish the task manually, there's another syntactic form called a for loop for just that purpose:

    for (var i = 0; i <= 9; i = i + 1) {
        console.log(i);
    }
    //  0 1 2 3 4 5 6 7 8 9
    /**
    i <= 9 is ture for the first 10 iterations (i of values through 9) of either loop form
    but becomes false once i is value 10
    */
    
    // the for loop has three clauses:
    /**
     * the initilization clause (var i=0)
     * the conditional test clause (i <= 9)
     * update clause (i=i+1)
     */