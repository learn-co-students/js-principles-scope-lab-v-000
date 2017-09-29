// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  return (bestCustomer = 'not bob');
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'ted';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bill';
}

function attemptTwoFavoriteCustomers() {
  throw SyntaxError();
}
