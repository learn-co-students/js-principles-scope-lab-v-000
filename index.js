// Write your solution in this file!
 customerName = 'bob';

 function upperCaseCustomerName() {
   customerName = customerName.toUpperCase();
   return customerName;
 }

 function setBestCustomer(){
   bestCustomer = 'not bob';
 }

 function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
 }

 function changeLeastFavoriteCustomer() {
   const leastFavoriteCustomer = 'brandi';
   leastFavoriteCustomer = 'bill';
   return leastFavoriteCustomer;
 }
