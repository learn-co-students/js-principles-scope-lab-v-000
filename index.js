var customerName = "bob";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
}

function overwriteBestCustomer(name) {
  bestCustomer = name;
}

const leastFavoriteCustomer = "Susan";

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "Alex";
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "John";
  let favoriteCustomer = "Kate";
}
