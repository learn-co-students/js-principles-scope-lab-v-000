// Write your solution in this file!
var customerName = "bob"


function upperCaseCustomerName() {
  customerName = customerName.toUpperCase()
}

var bestCustomer

function setBestCustomer() {
  console.log(bestCustomer)
  bestCustomer = "not bob"
  console.log(bestCustomer)
  console.log(window.bestCustomer)
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "john"

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "anyone else"
}
