var customerName = "bob";
const leastFavoriteCustomer = undefined;

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
  return customerName;
};

function setBestCustomer() {
  bestCustomer = 'not bob';
  return bestCustomer;
};

function overwriteBestCustomer(customer) {
  bestCustomer = customer;
  return bestCustomer;
};

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "customer";
};
