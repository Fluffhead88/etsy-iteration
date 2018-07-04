// question 1
// Show me how to calculate the average price of all items. Please console.log the average.
// The average price is $23.63

var priceArray = items.map(function(item) {
  return item.price;
})


var priceTotal = priceArray.reduce(function(accum, i) {
  return accum + i;
});

dec_answer = priceTotal / priceArray.length

answer = dec_answer.toFixed(2)

console.log("The average price is $" +
  answer)

//   question 2
//   Show me how to get an array of items that cost between $14.00 and $18.00 USD. Please console.log the answer.
// "Items that cost between $14.00 USD and $18.00 USD:"
//   [
//    {
//       title: "1970s Coors Banquet Glass Beer Pitcher",
//       ...
//    },
//    {
//       title: "The Three Broomsticks Customizable Beer Stein Mug, Harry Potter Inspired, hogsmeade village, harry potter gift, three broomsticks mug",
//       ...
//    },
//    {
//       title: "Hand Painted Colorful Feather Glass",
//       ...
//    }
//   ]

var x = items.filter(function(item) {
  return item.price > 13.99 && item.price < 18.01;
});
console.log("Items that cost between $14.00 USD and $18.00 USD")
x.forEach(function(item) {
  console.log(item.title + '\n');
});

// question 3
// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

var brit = items.filter(function(item) {
  return item.current_code === "GBP";
});
console.log(brit)