// Write your solution in this file!
var customerName = 'bob';
var bestCustomer;
const leastFavoriteCustomer = 'sally';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'stella';
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'pete';
  let favoriteCustomer = 'peter';
}
