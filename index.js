// Write your solution in this file!
var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = 'drop light';

function upperCaseCustomerName() {
	customerName = customerName.toUpperCase();
	return customerName;
}

function setBestCustomer() {
	const cust  = customerName.toLowerCase();
	bestCustomer = `not ${cust}`;
}

function overwriteBestCustomer(newName) {
	bestCustomer = newName;
}

function changeLeastFavoriteCustomer(newName) {
	leastFavoriteCustomer	= newName;
}
