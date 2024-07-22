/*******************************************************************************

You work at a grocery store, and items over $10 are getting a 20% discount.
Write a function that takes in an array of grocery items and returns an array
of grocery items that qualify for the sale. Include their new sale price.

Example:

groceryItems = [
  {name: "eggs", price: 6},
  {name: "bread", price: 5},
  {name: "milk", price: 4},
  {name: "walnuts", price: 15}
];
console.log(applySale(groceryItems)); // [ {name: "walnuts", price: 12} ]

*******************************************************************************/
// Your code here 
function applySale(items) {
  
  return items
    .filter(item => item.price > 10)
    .map(item => ({
      name: item.name,
      price: (item.price * 0.80)
    }));
}

/*****************DO NOT MODIFY ANYTHING UNDER THIS LINE**********************/
module.exports = applySale;
