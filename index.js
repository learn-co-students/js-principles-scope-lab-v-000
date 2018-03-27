var customerName = 'bob';

function upperCaseCustomerName () {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer () {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer (newFavorite) {
  bestCustomer = newFavorite;
}

const leastFavoriteCustomer = 'sour fred';

function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = 'sour fred';
}
