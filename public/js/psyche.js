      $(document).ready(function(){
          
          
      var menu = $('#leftcolumn'), pos = menu.offset();
        $(window).scroll(function(){
    if($(this).scrollTop() > pos.top){
        menu.addClass('lcScroll');        
          } else if($(this).scrollTop() <= pos.top){
        menu.removeClass('lcScroll');
     } });
 
      
        $('#topb').click(function(){
          $('html, body').animate({
        scrollTop: $('#linkcontainer').offset().top
         }, 2000);
        });
        
        $('#literatureb').click(function(){
          $('html, body').animate({
        scrollTop: $('#literature').offset().top
         }, 2000);
        });
        $('#filmb').click(function(){
          $('html, body').animate({
        scrollTop: $('#film').offset().top
         }, 2000);
        });
        $('#musicb').click(function(){
          $('html, body').animate({
        scrollTop: $('#music').offset().top
         }, 2000);
        });
        $('#gamesb').click(function(){
          $('html, body').animate({
        scrollTop: $('#games').offset().top
         }, 2000);
        });
        $('#warezb').click(function(){
          $('html, body').animate({
        scrollTop: $('#warez').offset().top
         }, 2000);
        });
        $('#designb').click(function(){
          $('html, body').animate({
        scrollTop: $('#design').offset().top
         }, 2000);
        });
        $('#programmingb').click(function(){
          $('html, body').animate({
        scrollTop: $('#programming').offset().top
         }, 2000);
        });
        $('#wetwareb').click(function(){
          $('html, body').animate({
        scrollTop: $('#wetware').offset().top
         }, 2000);
        });
        $('#recreationb').click(function(){
          $('html, body').animate({
        scrollTop: $('#recreation').offset().top
         }, 2000);
        });
        
        $('#bottomb').click(function(){
        $('html, body').animate({
        scrollTop: $('#bottom').offset().top
         }, 2000);
        });
        
        
      });
      
      
      $(function() { 
        // Setup the player to autoplay the next track
        var a = audiojs.createAll({
          trackEnded: function() {
            var next = $('ol li.playing').next();
            if (!next.length) next = $('ol li').first();
            next.addClass('playing').siblings().removeClass('playing');
            audio.load($('a', next).attr('data-src'));
            audio.play();
          }
        });
        
        // Load in the first track
        var audio = a[0];
            first = $('ol a').attr('data-src');
        $('ol li').first().addClass('playing');
        audio.load(first);

        // Load in a track on click
        $('ol li').click(function(e) {
          e.preventDefault();
          $(this).addClass('playing').siblings().removeClass('playing');
          audio.load($('a', this).attr('data-src'));
          audio.play();
        });
        // Keyboard shortcuts
        $(document).keydown(function(e) {
          var unicode = e.charCode ? e.charCode : e.keyCode;
             // right arrow
          if (unicode == 39) {
            var next = $('li.playing').next();
            if (!next.length) next = $('ol li').first();
            next.click();
            // back arrow
          } else if (unicode == 37) {
            var prev = $('li.playing').prev();
            if (!prev.length) prev = $('ol li').last();
            prev.click();
            // spacebar
          } else if (unicode == 32) {
            audio.playPause();
          }
        })
      });