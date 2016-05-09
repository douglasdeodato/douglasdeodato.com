// $(function() {

// new WOW().init();


// });



// $(window).scroll(function(){

// var wScroll = $(this).scrollTop();

// console.log(wScroll)

// });

new WOW().init();
var fixed = false;
// These are the classes when the animation is processing.
var animateGroup = 'wow shake animated';
$(document).scroll(function() {
    if( $(this).scrollTop() >= 350 ) {
        if( !fixed ) {
            fixed = true;
            // Make them show.
            // $('footer')
            //     .addClass(animateGroup)
            //     .css({visibility: 'visible', 'animation-name': 'shake'}); 
          
            // Demo without wow.js
            $('footer').addClass('animated shake').show();
        }
    } else {
        if( fixed ) {
            fixed = false;
            // Remove anything we just added.
            // $('footer')
            //     .removeClass(animateGroup)
            //     .removeAttr('style');
                // Or if you have other styles, use below to remove specific style instead.
                //.css({visibility: '', 'animation-name': ''});
          
          // Demo without wow.js
          //$('footer').hide();
        }
    }
});