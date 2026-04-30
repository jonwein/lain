$(document).ready(function(){
      
    var page = [
      "http://i.imgur.com/JWQ7ZAd.gif",
      "http://i.imgur.com/mOfUkwp.jpg",
      "http://i.imgur.com/4p6Nxv9.jpg",
      "http://i.imgur.com/Iu8aTgJ.jpg",
      "http://i.imgur.com/K3PU4BX.jpg",
      "http://i.imgur.com/V55NJ9S.jpg",
      "http://i.imgur.com/LPRMFCw.jpg",
      "http://i.imgur.com/FFFbe0y.jpg",
      "http://i.imgur.com/XHGF7Es.jpg",
      "http://i.imgur.com/o2mdb40.jpg",
      "http://i.imgur.com/5rHlDQ8.jpg",
      "http://i.imgur.com/Ej4O1v2.jpg",
      "http://i.imgur.com/DGZa0JX.jpg",
      "http://i.imgur.com/JHlPkAI.jpg",
      "http://i.imgur.com/hFlpBIf.jpg",
      "http://i.imgur.com/VRAmQhW.jpg",
      "http://i.imgur.com/oI9qB61.jpg",
      "http://i.imgur.com/73gYiUu.jpg",
      "http://i.imgur.com/1nUgunB.png"];
    var i = 0; //works as the index for the array of links
      
    //dramatic fade in
    $('body').hide().fadeIn(4000);

    $('#linkcontainer').hide();

    $('#bell').draggable();
    $('#bell').dblclick(function(){
        $('#bell').fadeOut('fast',0);
    });
    $("#bike").click(function(){
         $("#bike").hide("explode", 4000);
      });
      
    $('.tab').click(function(){ $('#linkcontainer').slideToggle('slow');} );
   
    // GALLERY NAVIGATION    
     $("#stage").attr("src", page[i]); 
            
    // MAKING BUTTONS OUT OF THE IMAGES AND NAVIGATING PAGE BY PAGE     
     function swap_image() { $("#stage").attr("src", page[i]); }
     
      $("#left").click(function(){ 
        $('#left').effect('slide',{direction: "right"}); i = Math.max(0, i-1); swap_image(); 
        $("html, body").animate({ scrollTop: 0 }, "slow"); return false;});
  
     $("#right").click(function(){ 
        $('#right').effect('slide',{direction: "left"}); i = Math.min(page.length, i+1); swap_image(); 
        $("html, body").animate({ scrollTop: 0 }, "slow"); return false; });
    
});
            

     

  