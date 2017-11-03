var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "ron"

function upperCaseCustomerName(){
 var toUpper = customerName.toUpperCase();
  customerName = toUpper
   return toUpper;
}

function setBestCustomer(){
   bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "becky"
}

function attemptTwoFavoriteCustomers(){
  const favoriteCustomer = "sally"
  let favoriteCustomer = "lisa"
}
