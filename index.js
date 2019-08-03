var customerName = "bob";
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'Chris';
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Jack";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "Alice";
  let favoriteCustomer = "Ella";
}