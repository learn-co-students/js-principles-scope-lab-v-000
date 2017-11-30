// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'some asshole';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
}

function attemptTwoFavoriteCustomers() {
    // let favoriteCustomer = 'ham';
    // let favoriteCustomer = 'ghoti';
    throw SyntaxError();
}