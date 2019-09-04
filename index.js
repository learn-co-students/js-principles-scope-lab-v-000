var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Suspected Thief';

function changeLeastFavoriteCustomer() {
  return leastFavoriteCustomer = 'Creepy Dude'
}

function attemptTwoFavoriteCustomers() {
  const favoriteCustomer = 'BFF'
  const favoriteCustomer = 'BF'
}
