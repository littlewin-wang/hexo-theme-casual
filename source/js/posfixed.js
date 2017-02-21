//******************************
// Position fixed v:0.1.a, 2013, jQuery plugin
// Creater: Egor Podgaiski, http://gorik.name/
// Dual licensed under the MIT and GPL licenses:
// http://www.opensource.org/licenses/mit-license.php
// http://www.gnu.org/licenses/gpl.html
// I Am ...
//******************************
(function($){
    $.fn.fixeditem = function(args){

        var settings = $.extend({
            position : 'top', // Vertical position: 'top', 'bottom';
            correctY : 0, // Vertical correction (int, px): '10';
            fixedClass : 'state_fixed', // Class ws 'position:fixed': 'some_class';
            container : '', // Parent or similar container (jQuery object): $('#someId/.some_class');
            rightSide : false, // If current element is on right side in the parent: true, false;
            wrapper : true, // Wrap current element to <div>: true, false;
            parentWidth : true // Sets the width of the parent element: true, false;
        }, args);

        return this.each(function(){

            var el = $(this),
                elWrap = null,
                offsetTop = 0,
                pos = settings.position,
                correctY = parseInt(settings.correctY),
                fixedClass = settings.fixedClass,
                container = settings.container,
                rightSide = settings.rightSide,
                wrapper = settings.wrapper,
                parentWidth = settings.parentWidth,
                winScroll = $(window).scrollTop();

            function getClientWidth(){
                return document.compatMode == 'CSS1Compat' && !window.opera ? document.documentElement.clientWidth : document.body.clientWidth;
            };

            function getClientHeight(){
                return $(window).height();
            };

            function getElWidth(obj){
                var width = obj.width(),
                    decimalwidth = 0;

                if (window.getComputedStyle){
                    decimalwidth =  window.getComputedStyle(obj.get(0)).width; //ie9 decimal width*/
                    if (1 > (decimalwidth - width) <= 0)
                        width = decimalwidth;
                }

                return width;
            };

            function clearStyles(el, elWrap){
                el.removeClass(fixedClass).css({'position':'', 'top':'', 'bottom':'', 'width':'', 'margin-left':''});
                elWrap.css('height', '');
            };

            function elTopPosition(el, elWrap, offsetTop, winScroll){
                var pTop = '',
                    maxBottom = 0,
                    elHeight = el.outerHeight(),
                    elWidth = getElWidth(el);

                if (elHeight < getClientHeight()){
                    if (container.length){
                        maxBottom = container.offset().top + container.height();
                    }
                    if ( (maxBottom > 0) && ((winScroll + elHeight + correctY) > maxBottom) ){
                        pTop = maxBottom - (offsetTop + elHeight);
                        el.removeClass(fixedClass).css({'top':pTop, 'position':'relative'});
                    }
                    else if ((offsetTop - correctY) < winScroll){
                        elWrap.css('height', elHeight);
                        el.addClass(fixedClass).css({'width':elWidth, 'top':correctY, 'position':'fixed'});
                        el.trigger('fixedOn');
                        if (rightSide){
                            el.css('margin-left', -el.outerWidth());
                        }
                    }
                    else{
                        clearStyles(el, elWrap);
                    }
                }
                else {
                    clearStyles(el, elWrap);
                }
            };

            function elBottomPosition(el, elWrap, offsetTop, winScroll){
                var pBottom = '',
                    elHeight = el.outerHeight(),
                    elWidth = getElWidth(el),
                    winHeight = getClientHeight();

                if ( (container.length) && ((winScroll + winHeight - elHeight - correctY) <= (container.offset().top))){
                    pBottom = (container.outerHeight() - elHeight - correctY);

                    el.removeClass(fixedClass).css({'bottom':pBottom, 'position':'relative'});
                }
                else if ((offsetTop + elHeight + correctY) >= (winHeight + winScroll)){
                    elWrap.css('height', elHeight);
                    el.addClass(fixedClass).css({'width':elWidth, 'bottom':correctY, 'position':'fixed'});
                    el.trigger('fixedOn');
                    if (rightSide){
                        el.css('margin-left', -el.outerWidth());
                    }
                }
                else{
                    clearStyles(el, elWrap);
                }
            };

            // on load
            if (wrapper)
                el.wrap('<div/>');

            elWrap = el.parent();
            offsetTop = elWrap.offset().top;

            if (container.length > 1){
                container = container.first();
            }

            if(pos == 'top'){
                if (winScroll > 0){
                    elTopPosition(el, elWrap, offsetTop, winScroll);
                }
                else{
                    clearStyles(el, elWrap);
                };
            }
            else if(pos == 'bottom'){
                elBottomPosition(el, elWrap, offsetTop, winScroll);
            }

            // on scroll
            $(window).on('scroll', function (){

                var offsetTop = el.parent().offset().top,
                    winScroll = $(window).scrollTop();

                if(pos == 'top'){
                    elTopPosition(el, elWrap, offsetTop, winScroll);
                }
                else if(pos == 'bottom'){
                    elBottomPosition(el, elWrap, offsetTop, winScroll)
                };
            });

            // on resize
            $(window).on('resize', function (){

                var offsetTop = el.parent().offset().top,
                    winScroll = $(window).scrollTop();

                if (parentWidth)
                    el.css({'position':'', 'width':''})

                if(pos == 'top'){
                    if (winScroll > 0){
                        elTopPosition(el, elWrap, offsetTop, winScroll);
                    }
                    else{
                        clearStyles(el, elWrap);
                    };
                }
                else if(pos == 'bottom'){
                    elBottomPosition(el, elWrap, offsetTop, winScroll);
                }
            });

        });
    };
})(jQuery);