var customerName = "bob";

function upperCaseCustomerName() {
  var name = customerName.toUpperCase();
  customerName = name;
  return name;
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "def not bob";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "still not bob";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "What About Bob";
  let favoriteCustomer = "Forget about Bob";
}
