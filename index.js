// Write your solution in this file!
customerName = "bob";

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = `not ${customerName.toLowerCase()}`;
}

function overwriteBestCustomer(){
  bestCustomer = `maybe ${customerName.toLowerCase()}`;
}

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = customerName;
  // throw TypeError;
}
