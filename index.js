
var customerName = 'bob';
function upperCaseCustomerName () {
	return customerName = customerName.toUpperCase();
}

function setBestCustomer () {
	bestCustomer = 'not bob'
}

function overwriteBestCustomer() {
	bestCustomer = 'maybe bob'
}

const leastFavoriteCustomer = "something"
function changeLeastFavoriteCustomer() {
	leastFavoriteCustomer = "something that is not gonna happen"
}