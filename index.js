// Write your solution in this file!
var customerName = 'bob'

function upperCaseCustomerName() {
 customerName = customerName.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob'
  return bestCustomer
}

function overwriteBestCustomer(customer) {
  bestCustomer = customer
}

const leastFavoriteCustomer = 'stan'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob'
}
