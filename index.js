// Write your solution in this file!

var customerName = 'bob'

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase()
  return customerName
}

var bestCustomer
function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'me'
function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'other'
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'bar';
  let favoriteCustomer = 'not bar';
}
