// Write your solution in this file!

var customerName = "bob"; // global scope

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Bob";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Tammy";
}
