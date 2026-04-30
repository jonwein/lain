// Start if video Resizer cut from jQuery VidAsBG library
$(document).ready(function(){
    
$('html, body').scrollTop(-1);
    
$body = $('body');    
    
$container = $('#wrap');
$container.css('position','fixed')
    .css('z-index',-999)
    .css('top',0).css('left',0)
    .css('width',0).css('height',0)
    .css('overflow','hidden');

// container to be at least relative
if ($body.css('position') === 'static' || !$body.css('position'))
        $body.css('position','relative');
// we need a width
if ($body.width === 0)
        $body.width = $container.width();

// we need a height
if ($body.height === 0)
        $body.height = $container.height();	

// get the wrapper
$container.height($body.height)
        .width($body.width);

// set the wrapper above the video
$container.css('z-index',$body.zIndex+1);



setFullscreen = function($el) {
        var windowWidth = $(window).width(),
            windowHeight = $(window).height();

        $el.css('min-height',0).css('min-width',0);
        $el.parent().width(windowWidth).height(windowHeight);
        // if by width 
        if (windowWidth / windowHeight > $el.aspectRatio) {
                $el.width(windowWidth).height('auto');
                // shift the element up
                var height = $el.height();
                var shift = (height - windowHeight) / 2;
                if (shift < 0) shift = 0;
                $el.css("top",-shift);
        } else {
                $el.width('auto').height(windowHeight);			
                // shift the element left
                var width = $el.width();
                var shift = (width - windowWidth) / 2;
                if (shift < 0) shift = 0;
                $el.css("left",-shift);

                // this is a hack mainly due to the iphone
                if (shift === 0) {
                        var t = setTimeout(function() {
                                setFullscreen($el);
                        },500);
                }
        }
        $container.width(windowWidth).height(windowHeight);
};

$video = $('#bg-video');
$video.css('position','absolute').css('z-index',-1);
    
    
    // overlay wrapper
$container.height( $container.height() )
          .width( $container.width() );
// video
$video.height( $container.height() )
      .width( $container.width() );

    
// Sets the aspect ratio of the video container 
$video.aspectRatio = $video.width() / $video.height();

// Waits for the possibility of a screen resize and runs setFullscreen() after release
var resizeTimeout;
$(window).resize(function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(function() {
            setFullscreen($video);
        },100);	
});

// when can play, play
var v = $video[0];
v.play();

//  Call setFullscreen to expand the video
setFullscreen($video);

// end of video Resizer cut from jQuery VidAsBG library


}); // End of document