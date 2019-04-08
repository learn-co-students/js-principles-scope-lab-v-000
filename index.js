// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "job";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "bob";
}

console.log(changeLeastFavoriteCustomer())