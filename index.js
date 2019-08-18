// Write your solution in this file!
customerName = "bob"
const leastFavoriteCustomer = "me"

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
  return customerName
}

function setBestCustomer(name){
  bestCustomer = "not bob"
  return bestCustomer;
}

function overwriteBestCustomer(){
  setBestCustomer();
  bestCustomer = "maybe bob"
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "james";
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = "jenny"
  let favoriteCustomer = "jonny"
}
