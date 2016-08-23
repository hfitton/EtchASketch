
$(document).ready(function(){

//https://jsfiddle.net/qfqd7pk3/3/

//https://jsfiddle.net/qfqd7pk3/3/

$(".wrapper").prepend("<button id='newGrid'>New Grid</button>");

$("#newGrid").click(function() {
  $(".box").remove();
   do {
    var rows = prompt("Enter a number for the grid size.");
    for (i = 0; i < rows; i++) {
   for (n = 0; n < rows; n++) 
      {
        $(".container").append("<div class='box'></div>");
        $(".box").css({backgroundColor:"#b3ffff"});

      }; 
           $(".box").css("width", (500 / rows));
      $(".box").css("height", (500 / rows));
           
    };  //closes the n variable

    //to change colour
    $(".box").mouseenter(function() {
      $(this).css("background-color", "blue")
    })
  }
  while (isNAN(rows));

});

