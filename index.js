var customerName = "bob";// Write your solution in this file!
var bestCustomer;
const leastFavoriteCustomer = "amy";

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = "not bob";
}

function overwriteBestCustomer(){
  bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "not amy";
}
