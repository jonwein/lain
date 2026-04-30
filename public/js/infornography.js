// START OF jQUERY
$(document).ready(function(){
    
    function callPlayer(frame_id, func, args) {
    if (window.jQuery && frame_id instanceof jQuery) frame_id = frame_id.get(0).id;
    var iframe = document.getElementById(frame_id);
    if (iframe && iframe.tagName.toUpperCase() !== 'IFRAME') {
        iframe = iframe.getElementsByTagName('iframe')[0];
    }
    if (iframe) {
        iframe.contentWindow.postMessage(JSON.stringify({
            "event": "command",
            "func": func,
            "args": args || [],
            "id": frame_id
        }), "*");
    }
}
    
    function safePlay(el) {
      try {
        var p = el.play();
        if (p && typeof p.catch === 'function') p.catch(function(){});
      } catch (e) {}
    }
    // Add the layers menu sound
    var audioElement1 = document.createElement('audio');
    audioElement1.setAttribute('src', '/Hypermedia/Infornography/Layers.mp3');
    $.get();
    audioElement1.addEventListener("load", function() { safePlay(audioElement1); }, true);
    // add the window sound
    var audioElement2 = document.createElement('audio');
    audioElement2.setAttribute('src', '/Hypermedia/Infornography/keypress.mp3');
    $.get();
    audioElement2.addEventListener("load", function() { safePlay(audioElement2); }, true);

    // Window sound
    $('#cv_close').click(function() { safePlay(audioElement2); });
    $('#vidclose').click(function() { safePlay(audioElement2); });
    $('#work').click(function() { safePlay(audioElement2); });
    $('#vidopen').click(function() { safePlay(audioElement2); });
    $('#building').click(function() { safePlay(audioElement2); });
    $('#afx_close').click(function() { safePlay(audioElement2); });

    //  CROWVIEWER CODE  
    $('#cv').draggable();
    $( "#cv_close" ).click(function() { $( "#cv" ).toggle( "slow" ); });
      $( "#work" ).click(function() { $( "#cv" ).toggle( "slow" ); });
    //END OF CROWVIEWER CODE

    //  afx CODE  
    $('#afx').draggable();
    $( "#afx_close" ).click(function() { $( "#afx" ).toggle( "slow" ); });
    $( "#building" ).click(function() { $( "#afx" ).toggle( "slow" ); });
    //END OF afx CODE

    // COPLAND MEDIA PLAYER CODE
    $('#cmp').draggable();
        callPlayer("cmp1","pauseVideo");
        $( "#vidclose" ).click(function() { $( "#cmp" ).hide( "slow" );
        if ( $('#cmp1').css('display') !== 'none' ){ callPlayer("cmp1","pauseVideo"); }
    });        
    $( "#vidopen" ).click(function() { $( "#cmp" ).show( "slow" ); 
        callPlayer("cmp1","playVideo");
        if ( $('#cmp1').css('display') !== 'block' ){ callPlayer("cmp1","playVideo"); }
    });
    // END OF COPLAND MEDIA PLAYER CODE

    //Start of Layers menu code
    $('#linkcontainer').hide();
    $('#layers').click(function(){ 
        if ( $('#linkcontainer').css('display') !== 'block' ){ safePlay(audioElement1); }
        $('#linkcontainer').slideToggle('slow'); 
    });
    // END of Layers menu code   
    
    
});
//END OF DOCUMENT READY    