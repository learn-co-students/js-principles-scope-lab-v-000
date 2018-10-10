var customerName = 'bob'

function upperCaseCustomerName() {
  customerName = `${customerName}`.toUpperCase()
}

function setBestCustomer() {
  bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = 'fanny'

function changeLeastFavoriteCustomer(name) {
  leastFavoriteCustomer = name
}
