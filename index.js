// Write your solution in this file!

var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'definitely not bob';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'it was bob all along'
}
