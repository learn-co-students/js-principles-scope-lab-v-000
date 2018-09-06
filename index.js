var customerName = 'bob';
const leastFavoriteCustomer = 'M';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'maybe bob';
}