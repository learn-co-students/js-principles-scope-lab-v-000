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

const leastFavoriteCustomer = 'billy';

function changeLeastFavoriteCustomer() {
  return leastFavoriteCustomer = "sad billy";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'art';
  let favoriteCustomer = 'mary';
}