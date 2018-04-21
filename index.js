var customerName = 'bob';
const meh = 'meh';

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer(){
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(){
  bestCustomer = 'maybe bob';
}

function changeLeastFavoriteCustomer(){
  meh = "not meh"
  console.log(meh)
}
