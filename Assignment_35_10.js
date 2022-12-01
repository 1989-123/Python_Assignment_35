/*
Create a human readable time format using the Date time object
   a. YYYY-MM-DD HH:mm
   b. DD-MM-YYYY HH:mm
   c. DD/MM/YYYY HH:mm
*/

let d1 = new Date();
console.log();
console.log(d1.getFullYear(), d1.getMonth(), d1.getDate(), d1.getHours(), d1.getMinutes());
console.log();
console.log();
console.log(d1.getDate(), d1.getMonth(), d1.getFullYear(), d1.getHours(), d1.getMinutes());
console.log();
