var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
  return bestCustomer;
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
  return bestCustomer;
}

const leastFavoriteCustomer = 'john';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'paul';
  return leastFavoriteCustomer;
}
