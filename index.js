var customerName = 'bob';
const leastFavoriteCustomer = 'mary';

function upperCaseCustomerName() {
    // customerName = 'BOB'; or
    customerName = customerName.toUpperCase();
  
    //notice that there is no return statement
    //if you try to use `return customerName.toUpperCase()`, it will return 'BOB', but will not redefine the variable!
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'bob';
}