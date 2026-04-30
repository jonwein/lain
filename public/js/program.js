$(document).ready(function(){

    var video = '<video type="video/mp4" width="640" height="480" style="position:fixed;left:50%;top:50%;margin-top:-240px;margin-left:-320px;z-index:9999;" src="../Hypermedia/Program/Lainicide.mp4" autoplay></video>';


    $('#vid').hide();

    $('#lainicide').click(function(){
        $('#vid').show();
        $("#vid").append(video).fadeIn(200);
        $('html, body').animate({scrollTop: $('body').offset().top}, 2000);
    });

    $('#vid').click(function(){
        $('#vid').hide();
        $('video').fadeOut(200, function(){
            $("video")[0].pause(); 
            $('#vid').find('video').remove();
        });
        $('html, body').animate({scrollTop: $('body').offset().top}, 2000);
    });
    
    
    var load = ["--","\\","\|","/"];
    var i = 0;
    
    setInterval( function(){ myTimer(); }, 200 );
    function myTimer(){ 
        i=(i+1)%3; 
        $("#eulogy span").html(" " + load[i]);
    }


});
