$(document).ready(function(){

//https://jsfiddle.net/qfqd7pk3/3/

//https://jsfiddle.net/qfqd7pk3/3/

$(".wrapper").prepend("<button id='newGrid'>New Grid</button>");

$("#newGrid").click(function() {
  $(".box").remove();
   {
    var rows = prompt("Enter a number for the grid size.");
    for (i = 0; i < rows * rows ; i++) 
      {
        $(".container").append("<div class='box'></div>");
        $(".box").css({backgroundColor:"#b3ffff"});

      
           $(".box").css("width", (500 / rows));
      $(".box").css("height", (500 / rows));
           
    };  //closes the n variable

    //to change colour on mouse enter.  Not really changing colour, just removing visibility.  
    $(".box").mouseenter(function() {
      $(this).css("opacity", 0)
    })
    
    //Because I used fadeTo I don't need to add slow.  This brings the visibility back.      
    $(".box").mouseleave(function() {
      $(this).fadeTo("opacity", 1)
    })
        
    //closes mouseenter /leave function
  }
  while (isNAN(rows));

});
});
