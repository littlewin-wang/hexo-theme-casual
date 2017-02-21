/**
 * Mobile navigation
 */
;(function( $, window, document, undefined ){
  "use strict";
  
  $(document).ready(function($) {

    var $body = $('body');

    $('.button-toggle').click( function(e) {
      $body.toggleClass('menu-open');
      $('body,html').scrollTop( 0 );
      return false;
    });

    var defaultWindowWidth = $(window).width();
    $(window).resize(function() {
      if (defaultWindowWidth != $(window).width()) {
        $body.removeClass('menu-open');
      }
    });

  });
})(jQuery, window, document);


/**
 * Nav sticky
 */
;$(document).ready(function(){
  $(".site-nav").fixeditem({distance:0, pos:"top"})
});


/**
 * Scroll Up
 */
;$(document).ready(function() {
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
