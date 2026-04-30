  // START OF jQUERY
$(document).ready(function(){

/* Create 2 arrays that carry the text to be displayed on the HandiNAVI screen and the other to swap the href property of the element */

var i1;
var i2; 
i1 = 0;
i2 = 1;
var layers; 
layers = ["PRVW:<br>Nightmare", "Layer 01:<br>Wierd", "Layer 02:<br>Girls", "Layer 03:<br>Psyche", "Layer 04:<br>Religion",
 "Layer 05:<br>Distortion", "Layer 06:<br>Kids", "Layer 07:<br>Society" ,"Layer 08:<br>Rumors", "Layer 09:<br>Protocol", 
"Layer 10:<br>Love", "Layer 11:<br>Infornography", "Layer 12:<br>Landscape", "Layer 13:<br>Ego", "Layer 00:<br>Program"];

var layerlinks;
layerlinks = [
"Nightmare.html",
"Wierd.html",
"Girls.html",
"Psyche.html",
"Religion.html",
"Distortion.html",
"Kid.html",
"Society.html",
"Rumors.html",
"Protocol.html",
"Love.html",
"Infornography.html",
"Landscape.html",
"Ego.html",
"Program.html"
];

/* Displays the names of the layers on the screens and sets their href to the page address*/

$("#port").html(layers[i2]);
  $("#port").attr('href', layerlinks[i2]);
$("#starboard").html(layers[i1]);
  $("#starboard").attr('href', layerlinks[i1]);
  
/* Pressing the buttons moves through the indexes.*/  

    function swap_layer2() {
      
      $("#port").html(layers[i2]);
      $("#port").attr('href', layerlinks[i2]);
      
    }
        function swap_layer1() { 
        if( i2 !== layers.length){
      $("#starboard").html(layers[i2 - 1]);
      $("#starboard").attr('href', layerlinks[i2 - 1]);
        }
    }

$("#rightb").click(function(){
  i2 = Math.min(layers.length - 1, i2 + 1);
  console.log(i1,i2);
  swap_layer1();
  swap_layer2();
});
$("#leftb").click(function(){
  i2 = Math.max(1, i2 - 1);
  console.log(i1,i2);
  swap_layer1();
  swap_layer2();
});


$("#downb").click(function(){
    $(".wrapper").animate({
    bottom: "-400px"
  }, 2000, function(){});
});

$("#wrap").click(function(){
  $(".wrapper").animate({
    bottom: "-20px"
  }, 2000, function(){});
});




}); // End of document