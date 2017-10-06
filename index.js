var customerName = 'bob';
const leastFavoriteCustomer = 'define only once';

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "this isn't gonna work";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'me';
  let favoriteCustomer = 'not you';
}