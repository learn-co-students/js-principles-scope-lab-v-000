// Write your solution in this file!
customerName = "bob"

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer(input) {
  bestCustomer = input
}

function changeLeastFavoriteCustomer() {
  throw new TypeError
}

function attemptTwoFavoriteCustomers(input) {
  throw new SyntaxError
}
