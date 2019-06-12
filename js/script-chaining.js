$(document).ready(function() {
 
 // jQuery Chaining Exercises
 
 $("button").mouseenter(function() {
    $("button").removeClass("makeRed").addClass("makeBorder");
 });
 $("button").mouseleave(function() {
    $("button").removeClass("makeBorder").addClass("makeRed");
 });
 
 $("button").click(function() {
    $(".card_para").slideToggle("slow");
 });
 
 $("button").click(function() {
    $(".card_para").hide("slow").show("slow");
 });
 
 $("button").click(function() {
    $(".card_para").fadeOut("slow").fadeIn("slow");
 });
 
 $("#button1").click(function() {
    $("#para1").slideToggle("slow");
 });
 
 $("#button2").click(function() {
    $("#para2").hide("slow").show("slow");
 });
 
 $("#button3").click(function() {
    $("#para3").fadeOut("slow").fadeIn("slow");
 });


}); 
