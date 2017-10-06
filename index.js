var customerName = 'bob'

const leastFavoriteCustomer = 'bob'

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
  return leastFavoriteCustomer = 'not bob';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'joe';
  let favoriteCustomer = 'not bob';
}