var customerName = "bob"; // a variable in global scope 
const leastFavoriteCustomer = "Tom Smith";

function upperCaseCustomerName() {
	customerName = customerName.toUpperCase();
	return customerName;
}

function setBestCustomer() {
	bestCustomer = "not bob";
	return bestCustomer;
} 

function overwriteBestCustomer(customer) {
	bestCustomer = customer;
	return bestCustomer;
} 

function changeLeastFavoriteCustomer() {
	leastFavoriteCustomer = "John Jackson";
	return leastFavoriteCustomer;
} 
