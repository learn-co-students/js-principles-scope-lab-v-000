// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'Axeman';

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}


function setBestCustomer() {
 bestCustomer = 'not bob';

}

function overwriteBestCustomer()  {
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'Minnie';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = 'Alvin';
  let favoriteCustomer = 'Blob';
}
// attemptTwoFavoriteCustomers(): Now write another function that will break down.
// Try declaring a variable called favoriteCustomer and redeclaring that same
// variable such that an error is thrown. This helps illustrate how let only allows
// a given variable to be declared one time, but that variable can be reassigned to
// a different value. However, const does not allow reassignment, nor does it allow
// the same constant to be declared more than once.
