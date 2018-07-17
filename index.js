// Write your solution in this file!
var customerName = "bob";
// customerName has global scope here

const leastFavoriteCustomer = "henry"
//constant in global scope. when we try to overwrite within a function we see a typeError

function upperCaseCustomerName() {
   return customerName = customerName.toUpperCase();
} 

// remember we have to explicitly RETURN the value we want


function setBestCustomer() {
    // bestCustomer is declared in global scope here
   bestCustomer = "not bob";
   return bestCustomer;
}

function overwriteBestCustomer () {
    bestCustomer = "maybe bob";
    return bestCustomer;
    // because bestCustomer was declared in global scope, we are able 
    // to overwrite the variable without any hiccups. This is dangerous! 
}

function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = "not henry";
}