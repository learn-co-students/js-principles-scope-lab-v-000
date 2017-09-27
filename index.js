var customerName = 'bob';

const leastFavoriteCustomer = 'jeffrey';

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
  leastFavoriteCustomer = 'not bob';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomers = 'maybe bob';
  let favoriteCustomers = 'bob';
}
