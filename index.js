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
}

const leastFavoriteCustomer = 'not sure';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'who knows';
}
