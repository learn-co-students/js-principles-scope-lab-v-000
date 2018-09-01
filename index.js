// Write your solution in this file!

// declare customerName to be bob in global scope
var customerName = 'bob';

// modifies the customerName variable
function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  return bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  return bestCustomer = 'maybe bob';
}

const LeastFavoriteCustomer= 'wrong';
function changeLeastFavoriteCustomer() {
  LeastFavoriteCustomer = 'wrong'
}
