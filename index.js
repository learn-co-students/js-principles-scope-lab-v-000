var customerName = 'bob';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'bob'

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = 'callie'
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = 'robbie'
  let favoriteCustomer = 'callie'
}
