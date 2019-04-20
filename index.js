// Write your solution in this file!
var customerName = "bob"
var bestCustomer;

const leastFavoriteCustomer = "Mary";

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(name){
  bestCustomer = "maybe bob";
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "someone";
}
