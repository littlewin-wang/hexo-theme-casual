//Modify tag style by random color
$('.tag a').addClass(function() {
  var colorArr = ['red','orange','yellow','olive','green','teal','blue','violet','purple','pink','brown','grey','black'];
  var index = Math.floor(Math.random()*colorArr.length);  
  returnClass = colorArr[index] + ' ui label';
  return returnClass;
});

//
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

$( document ).ready(function() {
  screenAdap();
});

//
$(window).resize(function() {
  screenAdap();
});


$('.post-list-item').scrollex({

  // Mode: Sets Scrollex to 'middle' mode (= midpoint between top/bottom edges must fall within contact area).
  mode: 'top-only',

  // Initialize event: Add the 'inactive' class to this element as soon as Scrollex is initialized.

  // Enter event: Remove the 'inactive' class from this element.
  enter: function() {
    $(this).transition('pulse');
  },

  // Leave event: Apply the 'inactive' class to this element.

});
