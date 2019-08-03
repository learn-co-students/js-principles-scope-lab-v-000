var customerName = "bob";

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer () {
  bestCustomer = "not bob";
}

function overwriteBestCustomer () {
  bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "jim";

function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = "not jim";
}

let favoriteCustomer = "not will";

function attemptTwoFavoriteCustomers () {
  let favoriteCustomer = "will";

  throw SyntaxError();
}
