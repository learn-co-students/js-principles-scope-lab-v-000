// Write your solution in this file!
var customerName = "bob";

function upperCaseCustomerName () {
    return customerName = customerName.toUpperCase();
}

function setBestCustomer () {
    // didn't use var or const, so it's global.  don't do this normally.
    bestCustomer = "not bob";
}

function overwriteBestCustomer () {
    return bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Matt";

function changeLeastFavoriteCustomer () {
    leastFavoriteCustomer = "fred";
}

function attemptTwoFavoriteCustomers () {
    let favoriteCustomer = "Bonny";
} 