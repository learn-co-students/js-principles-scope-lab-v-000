// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName () {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer () {
  bestCustomer = "not bob";
}

function overwriteBestCustomer (customer) {
  bestCustomer = customer;
}

const leastFavoriteCustomer = 'sharon';

function changeLeastFavoriteCustomer (customer) {
  leastFavoriteCustomer = customer;
}

function attemptTwoFavoriteCustomers (customer1, customer2) {
  const favoriteCustomer = customer1;
  favoriteCustomer = customer2;
}
