$(document).ready(function(){


$("#btnSelectors").click(function(){

$("p:first").css("color","red");
$("p:last").css("color","blue");

$("#list li:even").css("background","lightgray");

});



$("#changeImg").click(function(){

$("#myImage").attr("src","/home/ismail/Desktop/jqtask/city.png");

});

$("#getVal").click(function(){

alert($("#name").val());

});

$("#disableBox").click(function(){

$("#agree").prop("disabled",true);

});

// Events

$("#clickBtn").click(function(){
alert("Button Clicked");
});

$("#box").mouseenter(function(){
$(this).css("background","yellow");
});

$("#box").mouseleave(function(){
$(this).css("background","lightblue");
});

$("#keyInput").keyup(function(){
console.log("Key Released");
});

$("#myForm").submit(function(e){

e.preventDefault();
alert("Form Submitted");

});

// styles

$("#colorBtn").click(function(){

$("#para").css("color","green");

});

$("#addClassBtn").click(function(){

$("#para").addClass("highlight");

});

$("#toggleBtn").click(function(){

$("#para").toggleClass("highlight");

});

// Traversing

$("#traverseBtn").click(function(){

$(".selected").parent().css("border","2px solid red");

$(".selected").siblings().css("color","orange");

});

// Effects
$("#hideBtn").click(function(){
    $("#animateBox").hide();
});
$("#showBtn").click(function(){
    $("#animateBox").show();
});

$("#fadeBtn").click(function(){
    $("#animateBox").fadeIn();
});
$("#slideBtn").click(function(){
    $("#animateBox").slideDown();
});
$("#toggleEffectBtn").click(function(){
    $("#animateBox").toggle();
});

$('#fadeOutBtn').click(function(){
    $("#animateBox").fadeOut();

});

});