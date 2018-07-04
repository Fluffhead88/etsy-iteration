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