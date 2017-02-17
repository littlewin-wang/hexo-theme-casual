/**
 * Scroll Up
 */
$(document).ready(function(){
  $(".scroll-up").hide();
  $(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
        $('.scroll-up').fadeIn();
      } else {
        $('.scroll-up').fadeOut();
      }
    });
    $('a.scroll-up').click(function () {
      $('body,html').animate({
        scrollTop: 0
      }, 600);
      return false;
    });
  });
});

/**
 * screen Adap
 */
function screenAdap() {
  var mq = window.matchMedia("(min-width: 1060px)");
  if(mq.matches){
    $('.ui.vertical.inverted.menu').show();

    $('.main').off( "click" );
    $('.author-info').off( "click" );

  }else{
    $('.ui.vertical.inverted.menu').hide();

    $('.ui.teal.big.label').click(function() {
      $('.menu').show();
    })

    $('.main').click(function() {
      $('.menu').hide();
    })
    $('.author-info').click(function() {
      $('.menu').hide();
    })
  }   
}

$(document).ready(function() {
  screenAdap();
});

//
$(window).resize(function() {
  screenAdap();
});
