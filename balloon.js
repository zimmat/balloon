var orders = "4 sets of red, 3 sets of blue, and 3 sets of yellow.";
if (orders[orders.length - 1] === ".")
  orders = orders.slice(0, -1);
var oorder = orders.replace('and', '');

var ooder = oorder.trim();
console.log(ooder);

var Oneorder = ooder.split(',');
console.log(Oneorder);

var eachOrder = [];
Oneorder.forEach(function(orders) {
  eachOrder.push(orders.split("sets of"));
});
console.log(eachOrder);
console.log(eachOrder);

// number of ballons ordered
var numberofOrders = [];
var color = "";
eachOrder.forEach(function(orders) {
      var quantity = Number(orders[0]);
      var color = orders[1];
      var  orderPerSet = (quantity*3);
      numberofOrders.push(orderPerSet) ;
      console.log(numberofOrders);

    });

  // calculating total cost price per set ballon
  var pricePerBaloon = "R4 for red, R5 for blue, and R5.50 for yellow.";
  if (pricePerBaloon[pricePerBaloon.length - 1] === ".")
    pricePerBaloon = pricePerBaloon.slice(0, -1);
  var pricePerBaloon = pricePerBaloon.replace('and', '');

  var price = pricePerBaloon.split(',');

   price.forEach(function(pricePerBaloon){
     var priceForEach = pricePerBaloon.split("for");
     var eachPrice = pricePerBaloon.split("and");
     console.log(priceForEach);
   });
