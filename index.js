var customerName = 'bob'

function upperCaseCustomerName(){
	return customerName = customerName.toUpperCase();
}
	
function setBestCustomer(){
	bestCustomer = "not bob";
}

function overwriteBestCustomer(newCustomer){
	bestCustomer = newCustomer;
}

const leastFavoriteCustomer = 'mickey';

function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = 'goofy';
}