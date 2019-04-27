var customerName = 'bob';
const leastFavoriteCustomer = 'sam';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(copy) {
  bestCustomer = copy;
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}
