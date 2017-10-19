// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob';
}
// Write a function that when called,
// declares a variable called bestCustomer in global scope
// and assigns it to be 'not bob'. (Poor Bob.)
// Also, poor us, declaring a global variable from inside a
// function is one of those things we would never want to do
// normally, but is good for us to explore right now.

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}
// overwriteBestCustomer(): See the consequences of declaring a variable
// in global scope, by writing a new function called
// overwriteBestCustomer() that changes that bestCustomer variable.

const leastFavoriteCustomer = 'jill';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'mortimer';
  let favoriteCustomer = 'cindy';
}
// leastFavoriteCustomer and changeLeastFavoriteCustomer():
// Now declare a constant in global scope called
// leastFavoriteCustomer, be sure to assign it some initial value.
// Ok, now write a function called changeLeastFavoriteCustomer()
// that attempts to change that constant - notice what JavaScript
// does when you try to change the constant.
