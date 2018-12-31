var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'bob\'s best friend';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob\'s boss';
}
