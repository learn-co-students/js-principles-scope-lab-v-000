// Write your solution in this file!
var customerName = "bob"

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = `not ${customerName.toLowerCase()}`;
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = `maybe ${customerName.toLowerCase()}`;
  return bestCustomer;
}

const leastFavoriteCustomer = "bob"

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "henry";
}