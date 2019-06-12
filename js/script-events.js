$(document).ready(function() {
    
    // <p> on click: background peachy (red)
    // $("p").click(function() {
    //     $("p").css("background-color", "red");
    // });
    
    $("p").click(function() {
        $("p").addClass("highlight-peachy");
    });
    
    // <h2> hovered: background lightblue
    // $("h2").hover(function() {
    //     $("h2").css("background-color", "lightblue");
    // });
    
    $("h2").hover(function() {
        $("h2").addClass("highlight-skyblue");
    });
    
    // Single <h2> increases font size on hovered
    $("#hr_html").hover(function(){
        $("#hr_html").addClass("h2-big");
        $("#hr_mysql").removeClass("h2-big");
        $("#hr_python").removeClass("h2-big");
        $("#hr_jquery").removeClass("h2-big");
        $("#hr_django").removeClass("h2-big");
        $("#hr_css").removeClass("h2-big");
    });
    $("#hr_mysql").hover(function(){
        $("#hr_html").removeClass("h2-big");
        $("#hr_mysql").addClass("h2-big");
        $("#hr_python").removeClass("h2-big");
        $("#hr_jquery").removeClass("h2-big");
        $("#hr_django").removeClass("h2-big");
        $("#hr_css").removeClass("h2-big");
    });
    $("#hr_python").hover(function(){
        $("#hr_html").removeClass("h2-big");
        $("#hr_mysql").removeClass("h2-big");
        $("#hr_python").addClass("h2-big");
        $("#hr_jquery").removeClass("h2-big");
        $("#hr_django").removeClass("h2-big");
        $("#hr_css").removeClass("h2-big");
    });
    $("#hr_jquery").hover(function(){
        $("#hr_html").removeClass("h2-big");
        $("#hr_mysql").removeClass("h2-big");
        $("#hr_python").removeClass("h2-big");
        $("#hr_jquery").addClass("h2-big");
        $("#hr_django").removeClass("h2-big");
        $("#hr_css").removeClass("h2-big");
    });
    $("#hr_django").hover(function(){
        $("#hr_html").removeClass("h2-big");
        $("#hr_mysql").removeClass("h2-big");
        $("#hr_python").removeClass("h2-big");
        $("#hr_jquery").removeClass("h2-big");
        $("#hr_django").addClass("h2-big");
        $("#hr_css").removeClass("h2-big");
    });
    $("#hr_css").hover(function(){
        $("#hr_html").removeClass("h2-big");
        $("#hr_mysql").removeClass("h2-big");
        $("#hr_python").removeClass("h2-big");
        $("#hr_jquery").removeClass("h2-big");
        $("#hr_django").removeClass("h2-big");
        $("#hr_css").addClass("h2-big");
    });
    
    // button 1 hovered: body background is black
    $("#btn-1").mouseenter(function() {
        $("body").css("background-color", "#000");
    });
    // button 1 no longer hovered: body background is grey
    $("#btn-1").mouseleave(function() {
        $("body").css("background-color", "#eee");
    });
    
    // Button 2 disappears
    $("#btn-2").click(function() {
        $("#btn-2").hide("fast");
    });
    
    // Button 3 toggles
    $("#btn-3").click(function() {
        $("#para-3").toggle(1000);
    });
    
    // Button 4 slide toggles
    $("#btn-4").click(function() {
        $("#para-4").slideToggle("slow");
    });
    
    // Button 5 fades
    $("#btn-5").mouseenter(function() {
        $("#para-5").fadeTo(1000, 0.5);
    });
    $("#btn-5").mouseleave(function() {
        $("#para-5").fadeTo(1000, 1);
    });
    
    // button 6 clicked: body background pink
    $("#btn-6").click(function() {
        $("body").css("background-color", "pink");
    });
    
    //--End--
    
    $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
  });
  $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
  });
  $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
  });
   
  // The importance of this
   
  $('.card').on('click', function() {
        // when we click on an element that
        //  has a card class, this element will be fired
        var classNames = $(this).attr('class').split(' ');
        var cardClass = classNames[0];
        var className = classNames[1];
        if($(this).css('background-color') == '#fff') {
        // if this object is peach, turn it to white
            $('.' + className).css('background-color', '#fff');
        } else {
        // else turns all elements with a box class white
        // and then changes the color of all elements
        // with the same class name as the clicked element to peach.
        $('.' + cardClass).css('background-color', '#fff');
        $('.' + className).css('background-color', '#EB5255');
        }
    });
   
});