$(document).ready(function() {
    
    // Traversing the Dom
    
    // a on click: background yellow cards-jquery.html
    $("p").click(function(){
		$(this).children("a").css("background-color", "yellow");
		// returns all the <a> child elements that are within this paragraph
	});
	
	// index.html - button
	$("button").click(function(){
	    $(this).next().slideToggle("slow");
    });
    
    // cards-jquery.html - img slides down
    $("img").click(function(){
	    $(this).next().children("p").slideDown("slow");
    });
    
    // card background pink
    $(".card").click(function(){
	   $(this).toggleClass("highlight-card");
    });
    
    // Non slected cards are hidden with select_btn
	$("#select_btn").click(function() {
		$(".card:not(.highlight-card)").hide();	 
	});
	
	// All cards are shown with all_btn
	$("#all_btn").click(function() {
		$(".card").show();	 
	});
   
});