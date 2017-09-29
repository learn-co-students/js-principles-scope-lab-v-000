var customerName = 'bob'
const leastFavoriteCustomer = "joe"

function upperCaseCustomerName(){
  customerName = customerName.toUpperCase()
  return customerName
}

function setBestCustomer(asdf){
  bestCustomer = 'not bob'
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob'
}

function reassignLeastFavorite(){
  changeLeastFavoriteCustomer()
} 

function changeLeastFavoriteCustomer(){
  leastFavoriteCustomer = "sam"
}

function attemptTwoFavoriteCustomers(){
  let favoriteCustomer = "tim"
  let favoriteCustomer = "moe"
}