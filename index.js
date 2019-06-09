// Write your solution in this file!
var customerName = `bob`
const leastFavoriteCustomer = 'bob'
function upperCaseCustomerName(){
  customerName = customerName.toUpperCase()
}
function setBestCustomer(){
  bestCustomer = 'not bob'
  console.log(bestCustomer)
  return bestCustomer
}
function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
  return bestCustomer
}
function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'joe'
}
