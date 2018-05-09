// Write your solution in this file!
var customerName;
var customerName = "bob"
https://learn.co/tracks/full-stack-web-development-v4/javascript/principles/scope-lab#
function upperCaseCustomerName(){
 customerName = customerName.toUpperCase();
}


function setBestCustomer(){
  bestCustomer = "not bob";
}


function overwriteBestCustomer(){
   bestCustomer = "maybe bob";
}


const leastFavoriteCustomer = "Reni";

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "jeze";
}