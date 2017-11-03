// Write your solution in this file!

var customerName = "bob";

function upperCaseCustomerName () {
  var name = customerName.toUpperCase();
  customerName = name;
  return name;
}

function setBestCustomer () {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer () {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'secretely bob';

function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = "new customer";
}

function attemptTwoFavoriteCustomers () {
  let favoriteCustomer = "Taz";
  let favoriteCustomer = "Tweety";
}
