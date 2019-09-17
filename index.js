// Fix the Scope Lab

var customerName = 'bob';

function upperCaseCustomerName () {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'Kent'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Kerry'
}
