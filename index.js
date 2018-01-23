var customerName = 'bob'

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer() {
  const leaseFavoriteCustomer = 'Kyle'
  leaseFavoriteCustomer = 'Troy'
}