// Declare a variable in global scope called customerName using the var keyword.
var customerName = 'bob'

// Write a function that accesses that global customerName variable, and uppercases it.
function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

/* Write a function that when called, declares a variable called bestCustomer in

                                  global scope and assigns it to be 'not bob' */
function setBestCustomer() {
  bestCustomer = 'not bob';
}

/*See the consequences of declaring a variable in global scope, by writing a new
 function called overwriteBestCustomer() that changes that bestCustomer variable.*/
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

/* Declare a constant in global scope and write a function that attempts to change
  that constant */
const leastFavoriteCustomer = 'somename';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'bob';
}

/* Try declaring a variable called favoriteCustomer and redeclaring that same
variable such that an error is thrown. */
function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'sam';
  let favoriteCustomer = 'bob';
}
