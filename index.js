// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = 'not bob'
  return bestCustomer
}

function overwriteBestCustomer(best) {
  bestCustomer = best
  return bestCustomer
}

const leastFavoriteCustomer = "travis"

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "bob"
  return leastFavoriteCustomer
}
