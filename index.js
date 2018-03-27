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

const leastFavoriteCustomer = 'richie';

function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = 'ralph';
}
