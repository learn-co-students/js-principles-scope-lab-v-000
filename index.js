// Write your solution in this file!
customerName = "bob"

function upperCaseCustomerName(name){
  customerName = customerName.toUpperCase()
}


function setBestCustomer() {
  bestCustomer = "not bob"
}

function overwriteBestCustomer(){
  bestCustomer = "maybe bob"
}

const leastFavoriteCustomer = "kat"
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "bob"
}

changeLeastFavoriteCustomer()
