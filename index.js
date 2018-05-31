// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(name){
  bestCustomer = name;
}

function changeLeastFavoriteCustomer(){
  const least = 'bob';
  least = 'not bob';
}
