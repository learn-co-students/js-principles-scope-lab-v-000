// Write your solution in this file!

var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'someone';

function upperCaseCustomerName() {
  // Referencing the globle
  // variable customerName
 customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'no one';
}
