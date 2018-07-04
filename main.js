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
  return item.currency_code === "GBP";
});
brit.forEach(function(item) {
  console.log(item.title + " £" +
    item.price);
});

// question 4
// Show me how to find which items are made of wood. Please console.log the ones you find.
// SALE Mid Century Siesta Ware White Mug with Anchor - Set of 3 is made of wood.
// Bottle cap catcher personalized. Man cave gift for him- Wooden Beer pub sign - Groomsmen wedding Gift is made of wood.
// Medium Size, Welcome To Our Firepit-Where Friends And Marshmallows Get Toasted At The Same Time-Painted Wood Sign-Custom Colors is made of wood.
// Magnetic Wall Mount Bottle Opener Barware Set - Stainless Steel or Black - Personalized if you like! is made of wood.
// Engraved Pocket Knife, Personalized Groomsmen Gift, Ring Bearer Gift, Graduation Gift, 4 Knives is made of wood.

// var wood = items.filter(function(item) {
//   return item.materials == "wood";
// });
// console.log(wood)
// wood.forEach(function(item) {
//   console.log(item.descrition);
// });

// var materials = items.forEach(function(item) {
//   console.log(item.materials);
// });
//
// materials.forEach(function(item) {
//   console.log(["wood"]);
// });

// question 5
// Show me how to find which items are made of eight or more materials. Please console.log the ones you find.
// Qty of 2 Groomsmen Gift - Stainless Steel Personalized Bottle Opener - NO Capcatcher has 9 materials:
// wall mount bottle opener
// wedding
// man cave
// christmas gift
// guy gift
// fathers day
// home bar
// beer
// bar
// The Three Broomsticks Customizable Beer Stein Mug, Harry Potter  Inspired, hogsmeade village, harry potter gift, three broomsticks mug  has 13 materials:
// glass
// sandblast cabinet
// vinyl
// beer glass
// pint glass
// etched pint glass
// etched glass
// etched beer glass
// 16 oz pint
// beer gift
// etched harry potter glass
// the three broomsticks glass
// personalized harry potter glass

var x = items.filter(function(item) {
  return item.materials.length >= 8;
});
x.forEach(function(item) {
  console.log(item.title + item.materials);
});

// question 6
// Show me how to calculate how many items were made by their sellers. Please console.log your answer.
// 18 were made by their sellers

var self = items.filter(function(item) {
  return item.who_made === "i_did";
});
console.log(self.length + " were made by their sellers")