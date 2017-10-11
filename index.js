var customerName = "bob";

const upperCaseCustomerName = () => {customerName = customerName.toUpperCase();}

const setBestCustomer = () => {bestCustomer = "not bob";}

const overwriteBestCustomer = () => {bestCustomer = "maybe bob";}

const leastFavoriteCustomer = "bob";
const changeLeastFavoriteCustomer = () => {leastFavoriteCustomer = "not bob";}

const attemptTwoFavoriteCustomers = () => {
  let favoriteCustomer = "bob";
  let favoriteCustomer = "not bob";
}
