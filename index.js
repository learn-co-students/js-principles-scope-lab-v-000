var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(name) {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Avi';

function changeLeastFavoriteCustomer(name) {
  leastFavoriteCustomer = name;
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "Denis"
  let favoriteCustomer = "Aya"
}
