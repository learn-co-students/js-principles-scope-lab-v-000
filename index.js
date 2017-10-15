var customerName = "bob";
const leastFavoriteCustomer = "cindy";

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = `not ${customerName.toLowerCase()}`;
}

function overwriteBestCustomer(str_statment){
    bestCustomer = str_statment;
}

function changeLeastFavoriteCustomer(){
    /*this will be unsuccessful because this variable is a const*/
    leastFavoriteCustomer = "jo";
}

function attemptTwoFavoriteCustomers() {
    
    let favoriteCustomer = 'foo';
    throw SyntaxError("Test suite no good.")   
}

