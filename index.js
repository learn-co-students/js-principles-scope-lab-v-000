// Write your solution in this file!


var customerName = "bob";
//this is a global scope because it uses var to set the vairable and because it is not in a function

function upperCaseCustomerName (){
    return customerName = customerName.toUpperCase()
}

function setBestCustomer(){
  bestCustomer = "not bob";
// declaring a global variable from inside a function is one of those things we would never want to do normally, but is good for us to explore right now.
}

function overwriteBestCustomer() {
  bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "steve";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "bill"
}
l//leastFavoriteCustomer and changeLeastFavoriteCustomer(): Now declare a constant in global scope called leastFavoriteCustomer, be sure to assign it some initial value. Ok, now write a function called changeLeastFavoriteCustomer() that attempts to change that constant - notice what JavaScript does when you try to change the constant.
