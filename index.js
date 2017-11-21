// Write your solution in this file!
var customerName = "bob"
const leastFavoriteCustomer = 'jabooty'


function titleCase(string) {
     return string.charAt(0).toUpperCase() + string.slice(1)
    }

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase()
}

function setBestCustomer(){
    bestCustomer = 'not bob'
    return bestCustomer
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob'
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = 'treasure'
}

function attemptTwoFavoriteCustomers(){
    throw new SyntaxError('I think this test is broken')
}