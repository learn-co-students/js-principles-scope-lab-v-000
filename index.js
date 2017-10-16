var customerName = "bob";
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
};

function setBestCustomer(){
    bestCustomer = 'not bob';
};

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'probably bob';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'other bob';
}

function attemptTwoFavoriteCustomers() {
  let favoriteCustomer = "bob";
  let favoriteCustomer = "Robert";
}
