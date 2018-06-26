var customerName = "bob"

function upperCaseCustomerName() {
	return customerName = customerName.toUpperCase();
}

function setBestCustomer() {
	bestCustomer = 'not bob';
	return bestCustomer;	
}

function overwriteBestCustomer() {
	return bestCustomer = 'maybe bob';
}

const leastFavoriteCustomer = 'probably bob'

function changeLeastFavoriteCustomer() {
	leastFavoriteCustomer = 'most likely bob'
}