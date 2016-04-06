var orders = "4 sets of red, 3 sets of blue, and 3 sets of yellow.";
if (orders[orders.length - 1] === ".")
  orders = orders.slice(0, -1);
var oorder = orders.replace('and', '');

var ooder = oorder.trim();
// console.log(ooder);

var Oneorder = ooder.split(',');
// console.log(Oneorder);

var eachOrder = [];
Oneorder.forEach(function(orders) {
  eachOrder.push(orders.split("sets of"));
});

    var numberofOrders = {};
eachOrder.forEach(function(orders) {
      var quantity = Number(orders[0]);
      var color = orders[1];
              numberofOrders[color] = (quantity) * 3;
    });
console.log(numberofOrders);

  // calculating total cost price per set ballon

  var pricePerBaloon = "R4 for red, R5 for blue, and R5.50 for yellow.";
    if (pricePerBaloon[pricePerBaloon.length - 1] === ".")
      pricePerBaloon = pricePerBaloon.slice(0, -1);
    var pricePerBaloon = pricePerBaloon.replace(/R/g,"")
    .replace(/and /, "");
  var price = pricePerBaloon.split(',');

var priceForEach = [];
     price.forEach(function(pricePerBaloon){
      priceForEach.push(pricePerBaloon.split("for"));
     });
        // console.log(priceForEach);

     var priceOfBaloons = {};
       priceForEach.forEach(function(baloon){
           var priceOfOne = Number(baloon[0]);
           var colorOne = baloon[1];
           priceOfBaloons[colorOne] = priceOfOne;

         });
var total = 0;

var color = "";
  for(keys in numberofOrders){
    var sum = numberofOrders[keys] * priceOfBaloons[keys];
    total += sum;
  }
 console.log(total);


var inflate = 0;
 for(keys in numberofOrders){
    var newCost = numberofOrders[keys] * (priceOfBaloons[keys]+2);
   inflate += newCost;
 }
 console.log(inflate);

var people = 25;
var baloons = 0;
 for(baloon in numberofOrders){
   var baloonTotal = (numberofOrders[keys]);
   baloons += baloonTotal;
    var sparebaloons = baloons - people;
 }
console.log(baloons);
console.log(sparebaloons);
