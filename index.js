// Write your solution in this file!
var customerName = "bob";
// customerName has global scope here

function upperCaseCustomerName() {
   return customerName = customerName.toUpperCase();
} 

// remember we have to explicitly RETURN the value we want


function setBestCustomer() {
    // bestCustomer is declared in global scope here
   bestCustomer = "not bob";
   return bestCustomer;
}
