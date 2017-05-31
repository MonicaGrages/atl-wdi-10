console.log("i work");

//this only updates the display for donuts remaining. Does not update in the db.
$('#buy_donut').on('click', function (){
  var quantity = parseInt($('#qty').html());
  quantity --;
  $('#qty').html(quantity);
});

