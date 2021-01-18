//ADD NUMBER TO BASKET SYMBOL//
$(".btn-success").on("click", function(){

var orders = $(".basket").text();
var plus = "1";
var basket = Number(orders)+Number(plus);
$(".basket").text(basket);
})



//SHOPCARD DROPDOWN//
$(".shop-card").hide();
$(".buy").hide();

$(".btn-outline-success").on("click", function(){

$(".shop-card").slideToggle();
$(".buy").slideToggle();
})



//BUY NOW//
$("#btn-buy").on("click", function(){
    var numberBasket= document.getElementsByClassName("basket")[0].innerHTML;
if(numberBasket>0){
    var name = prompt("Please add your name")
    var address = prompt("Please add your address")
    
    alert("Thank you " + name + "\n" +"Your purchase will be delivered in 3 working days"+"\n"+"at "+address)}
    else{alert("Sorry" + "\n" +"There is no Items in your basket")};
setTimeout("location.reload(true);");
})




//ADD ITEM TO SHOPCARD & ADDITION PRICES//
//1//
$("#card1-btn").on("click", function(){
    $("#card1").clone().appendTo(".shop-card");   
    $("#card1-btn").hide();
    var price = $("#price1").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//2//
$("#card2-btn").on("click", function(){
    $("#card2").clone().appendTo(".shop-card");   
    $("#card2-btn").hide();
    var price = $("#price2").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//3//
$("#card3-btn").on("click", function(){
    $("#card3").clone().appendTo(".shop-card");   
    $("#card3-btn").hide();
    var price = $("#price3").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})



//4//
$("#card4-btn").on("click", function(){
    $("#card4").clone().appendTo(".shop-card");   
    $("#card4-btn").hide();
    var price = $("#price4").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//5//
$("#card5-btn").on("click", function(){
    $("#card5").clone().appendTo(".shop-card");   
    $("#card5-btn").hide();
    var price = $("#price5").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//6//
$("#card6-btn").on("click", function(){
    $("#card6").clone().appendTo(".shop-card");   
    $("#card6-btn").hide();
    var price = $("#price6").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})



//7//
$("#card7-btn").on("click", function(){
    $("#card7").clone().appendTo(".shop-card");   
    $("#card7-btn").hide();
    var price = $("#price7").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//8//
$("#card8-btn").on("click", function(){
    $("#card8").clone().appendTo(".shop-card");   
    $("#card8-btn").hide();
    var price = $("#price8").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//9//
$("#card9-btn").on("click", function(){
    $("#card9").clone().appendTo(".shop-card");   
    $("#card9-btn").hide();
    var price = $("#price9").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//10//
$("#card10-btn").on("click", function(){
    $("#card10").clone().appendTo(".shop-card");   
    $("#card10-btn").hide();
    var price = $("#price10").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//11//
$("#card11-btn").on("click", function(){
    $("#card11").clone().appendTo(".shop-card");   
    $("#card11-btn").hide();
    var price = $("#price11").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//12//
$("#card12-btn").on("click", function(){
    $("#card12").clone().appendTo(".shop-card");   
    $("#card12-btn").hide();
    var price = $("#price12").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//13//
$("#card13-btn").on("click", function(){
    $("#card13").clone().appendTo(".shop-card");   
    $("#card13-btn").hide();
    var price = $("#price13").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//14//
$("#card14-btn").on("click", function(){
    $("#card14").clone().appendTo(".shop-card");   
    $("#card14-btn").hide();
    var price = $("#price14").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//15//
$("#card15-btn").on("click", function(){
    $("#card15").clone().appendTo(".shop-card");   
    $("#card15-btn").hide();
    var price = $("#price15").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//16//
$("#card16-btn").on("click", function(){
    $("#card16").clone().appendTo(".shop-card");   
    $("#card16-btn").hide();
    var price = $("#price16").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//17//
$("#card17-btn").on("click", function(){
    $("#card17").clone().appendTo(".shop-card");   
    $("#card17-btn").hide();
    var price = $("#price17").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//18//
$("#card18-btn").on("click", function(){
    $("#card18").clone().appendTo(".shop-card");   
    $("#card18-btn").hide();
    var price = $("#price18").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//19//
$("#card19-btn").on("click", function(){
    $("#card19").clone().appendTo(".shop-card");   
    $("#card19-btn").hide();
    var price = $("#price19").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})


//20//
$("#card20-btn").on("click", function(){
    $("#card20").clone().appendTo(".shop-card");   
    $("#card20-btn").hide();
    var price = $("#price20").text();
    var totalPrice = $("h7").text();
    $("h7").text(Number(price) + Number(totalPrice));
})



//REMOVE ITEMS FROM BASKET//
$("#btn-clear").on("click", function(){
document.getElementsByTagName("h7")[0].innerHTML = "";
document.getElementsByClassName("shop-card")[0].innerHTML= "";
document.getElementsByClassName("basket")[0].innerHTML = "0";
})



