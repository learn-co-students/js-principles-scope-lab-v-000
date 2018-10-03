// Write your solution in this file!

// 	• .toUpperCase()


customerName = "bob"

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(customerName) {
  bestCustomer = customerName;
}

const leastFavoriteCustomer = "ethel"

function changeLeastFavoriteCustomer(newName) {
  leastFavoriteCustomer = newName;
}
