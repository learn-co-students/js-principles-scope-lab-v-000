// Write your solution in this file!
'use strict'
var customerName = 'bob'
var bestCustomer = undefined
function upperCaseCustomerName(){
   customerName = customerName.toUpperCase();
}
function setBestCustomer(){
  bestCustomer = 'not bob'
}
function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
}
function changeLeastFavoriteCustomer(){
  throw TypeError
}
