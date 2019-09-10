// Write your solution in this file!

var customerName = "bob"

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  // Check this that I didn't need to put var in front of customerName
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer () {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "not me";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "did it change?";
}
