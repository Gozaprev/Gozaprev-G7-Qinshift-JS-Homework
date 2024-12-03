/* HOMEWORK
Write a JavaScript program that will calculate the price of 30 Phones, 
where the price of one phone is $119.95 and the tax rate is 5%.

*/


let numberOfPhones = 30;
let priceOfOnePhone = 119.95;
let taxRate = 5/100;

let priceWithoutTax = priceOfOnePhone * numberOfPhones;

let taxAmount = priceWithoutTax * taxRate;
console.log(taxAmount);

let priceWithTax = priceWithoutTax + taxAmount;

console.log("The price before tax is:", priceWithoutTax,"The price after tax is:", priceWithTax);
