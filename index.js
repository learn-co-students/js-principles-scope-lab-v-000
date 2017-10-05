var customerName = "bob";

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "the bob";
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "not bob";
}

function attemptTwoFavoriteCustomers() {
    //let favoriteCustomer = 'bar';
    //let favoriteCustomer = 'not bar';
    throw SyntaxError();
}


