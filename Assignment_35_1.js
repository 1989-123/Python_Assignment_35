/*
In the following shopping cart add, remove, edit items const shoppingCart = ['Milk',
'Coffee', 'Tea', 'Honey']
a. add 'Meat' in the beginning of your shopping cart if it has not been already
added
b. add Sugar at the end of you shopping cart if it has not been already added
c. remove 'Honey' if you are allergic to honey
d. modify Tea to 'Green Tea'
*/

const shoppingCart = ['Milk','Coffee', 'Tea', 'Honey'];

console.log(shoppingCart.pop());
console.log(shoppingCart);

let x = 'Meat';
shoppingCart.unshift(x);
console.log(shoppingCart);

let y = 'Sugar';
console.log(shoppingCart.push(y));
console.log(shoppingCart);


shoppingCart[2] = 'Green Tea';
console.log(shoppingCart);
