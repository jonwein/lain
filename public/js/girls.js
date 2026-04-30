  // START OF jQUERY
$(document).ready(function(){

      var menu = $('#leftcolumn'), pos = menu.offset();
        $(window).scroll(function(){
    if($(this).scrollTop() > pos.top){
        menu.addClass('lcScroll');        
          } else if($(this).scrollTop() <= pos.top){
        menu.removeClass('lcScroll');
     } });

  $('#Lain').click(function(){
    $('.default').hide();
    $('#lain').show();
  });
    $('#Alice').click(function(){
    $('.default').hide();
    $('#alice').show();
  });
    $('#Chisa').click(function(){
    $('.default').hide();
    $('#chisa').show();
  });
    $('#Reika').click(function(){
    $('.default').hide();
    $('#reika').show();
  });
    $('#Mika').click(function(){
    $('.default').hide();
    $('#mika').show();
  });
    $('#Juri').click(function(){
    $('.default').hide();
    $('#juri').show();
  });
    $('#Myumyu').click(function(){
    $('.default').hide();
    $('#myumyu').show();
  });

    
});