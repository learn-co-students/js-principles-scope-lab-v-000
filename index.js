// Write your solution in this file!
customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = 'not bob';
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
  return bestCustomer;
}

function changeLeastFavoriteCustomer() {
  const leastFavoriteCustomer = "prob bob";
  leastFavoriteCustomer = "def not bob";
  return leastFavoriteCustomer;
}
