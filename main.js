// question 1
// Show me how to calculate the average price of all items. Please console.log the average.
// The average price is $23.63

// creates array of just prices
var priceArray = items.map(function(item) {
  return item.price;
})

// adds all prices together
var priceTotal = priceArray.reduce(function(accum, i) {
  return accum + i;
});

// divides prices by the length or total number of prices
dec_answer = priceTotal / priceArray.length

// truncates decimal to 2 places
answer = dec_answer.toFixed(2)

// prints the answer
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

// filters items that are between the price range
var x = items.filter(function(item) {
  return item.price > 13.99 && item.price < 18.01;
});
console.log("Items that cost between $14.00 USD and $18.00 USD")

// add title
x.forEach(function(item) {
  console.log(item.title + '\n');
});

// question 3
// Show me how find the item with a "GBP" currency code and print its name and price. Please console.log the one you find.
// 1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18

// filters items based on currency code and targets GBP
var brit = items.filter(function(item) {
  return item.currency_code === "GBP";
});

// prints title and the price
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

// filters materials based on an index that includes wood
var wood = items.filter(function(item) {
  return item.materials.indexOf("wood") != -1;
});

// adds is made of wood to title
wood.forEach(function(item) {
  console.log(item.title + "is made of wood");
});

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

// filters items with materials that have a length more than 8
var x = items.filter(function(item) {
  return item.materials.length >= 8;
});
// prints title and materials
x.forEach(function(item) {
  console.log(item.title + item.materials);
});

// question 6
// Show me how to calculate how many items were made by their sellers. Please console.log your answer.
// 18 were made by their sellers

// filters items by who made them by i did
var self = items.filter(function(item) {
  return item.who_made === "i_did";
});
// takes length of items that are self made 
console.log(self.length + " were made by their sellers")