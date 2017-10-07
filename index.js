// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName () {
  customerName = customerName.toUpperCase();
}

function setBestCustomer () {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer (newBestCustomer) {
  bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'bill';
function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = 'not bill';
}

function attemptTwoFavoriteCustomers () {
  let favoriteCustomer = 'john';
  let favoriteCustomer = 'not john';
}
