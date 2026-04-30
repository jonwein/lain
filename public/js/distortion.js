  // START OF jQUERY?
  $(document).ready(function(){
    
    // Linkcontainer sliding code
    $('#linkcontainer').hide();
    $('.tab').click(function(){ $('#linkcontainer').slideToggle('slow'); });
    
    // Hides the completion window on page open
    $('#end').hide();
    
    // Sets a total to be counted
    var total_clicks = 0;
    // Checks for a total and displays the end when true 
    function check(){    
         if( total_clicks >= 7){
            $('#follower').stop();
            $('#follower').hide( "size", "slow" );
            $('#end').fadeTo(5000,1);
         }
     }
     // Performs various actions on the object that has been clicked passed as the word parameter
    function clicked(word){
        var been_clicked = false;
        $(word).stop();
        $(word).fadeOut('slow');
        // Should check if an individual object has been clicked, in order to prevent multiple clicks on one object triggering the end prematurely
        if (been_clicked === false){
            total_clicks++;
            check();
        }
        else{
            check();
        }
        
        return function () { return been_clicked = true; };
    };
    // Objects to be clicked
    $('.word_who').click(function(){ clicked($(this)); });
    $('.word_what').click(function(){ clicked($(this)); });
    $('.word_when').click(function(){ clicked($(this)); });
    $('.word_where').click(function(){ clicked($(this)); });
    $('.word_why').click(function(){ clicked($(this)); });
    $('.word_how').click(function(){ clicked($(this)); });
    $('.word_if').click(function(){ clicked($(this)); });

    // Attaches the follower div to the cursor which tracks the user's progress
    $(document).mousemove(function(e){ $("#follower").css({left:e.pageX+20+"px", top:e.pageY+20+"px"}); });
    
            // Moves the words about the page
            function randomFromTo(from, to){ return Math.floor(Math.random() * (to - from + 1) + from); }
                    function moveRandom(obj) {
                            /* get container position and size
                             * -- access method : cPos.top and cPos.left */
                            var cPos = $('body').offset();
                            var cHeight = $('body').height();
                            var cWidth = $('body').width();
                            // get box padding (assume all padding have same value)
                            var pad = parseInt($('body').css('padding-top').replace('px', ''));
                            // get movable box size
                            var bHeight = obj.height();
                            var bWidth = obj.width();
                            // set maximum position
                            maxY = cPos.top + cHeight - bHeight - pad;
                            maxX = cPos.left + cWidth - bWidth - pad;
                            // set minimum position
                            minY = cPos.top + pad;
                            minX = cPos.left + pad;
                            // set new position			
                            newY = randomFromTo(minY, maxY);
                            newX = randomFromTo(minX, maxX);
                            obj.animate({top: newY, left: newX}, 5000, function() { moveRandom(obj); });
                    }
           // Loads the words to be clicked         
    $('.clickme').each(function() { moveRandom($(this)); });


});
