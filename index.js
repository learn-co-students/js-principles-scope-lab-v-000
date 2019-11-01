// Write your solution in this file!

// customerName: Declare a variable in global
// scope called customerName using the var keyword.
var customerName = 'bob';

// upperCaseCustomerName(): Write a function that accesses
// that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// setBestCustomer(): Write a function that when called,
// declares a variable called bestCustomer in global scope
// and assigns it to be 'not bob'. Declaring a global variable
// from inside a function is one of those things we would never
// want to do normally.
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// overwriteBestCustomer(): See the consequences of declaring
// a variable in global scope, by writing a new function called
// overwriteBestCustomer() that changes that bestCustomer variable.
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// leastFavoriteCustomer and changeLeastFavoriteCustomer():
// Now declare a constant in global scope called leastFavoriteCustomer,
// be sure to assign it some initial value. Ok, now write a function
// called changeLeastFavoriteCustomer() that attempts to change that
// constant - notice what JavaScript does when you try to change the constant.
const leastFavoriteCustomer ='tom';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer ='not tom';
}
// attemptTwoFavoriteCustomers(): Now write another function that
// will break down. Try declaring a variable called favoriteCustomer
// and redeclaring that same variable such that an error is thrown.
// This helps illustrate how let only allows a given variable to be
// declared one time, but that variable can be reassigned to a different
// value. However, const does not allow reassignment, nor does it allow
// the same constant to be declared more than once.
function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'terry';
  let favoriteCustomer = 'blue';
}
