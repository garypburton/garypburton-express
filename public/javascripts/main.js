
$(document).ready(function(){

    /*Scroll click function taken from Chris Coyier*/

    jQuery('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = jQuery(this.hash);
            target = target.length ? target : jQuery('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                jQuery('html,body').animate({
                scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
   
    var resizeTimer; // Set resizeTimer to empty so it resets on page load

    function resizeFunction() {
        // Stuff that should happen on resize

        //.parallax(xPosition, adjuster, inertia, outerHeight) options:
        //xPosition - Horizontal position of the element
        //adjuster - y position to start from
        //inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
        //outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
   
        $('.bg3').parallax("50%", 1001, 0.2, true);
        $('.bg2').parallax("50%", 1001, 0.5, true);
    }

    resizeFunction();
    // On resize, run the function and reset the timeout
    // 250 is the delay in milliseconds. Change as you see fit.
    $(window).resize(function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(resizeFunction, 500);
    });
    
});

/*Add the functions below to any page you want to have a full screen first panel*/

function addBodyClassFull(){
    jQuery('body').addClass('fullscreen-intro');
}

function fullFirstPanel(){// This function needs to be called both on load and resize
    var viewportHeight = jQuery(window).height();
    var minHeight = Math.floor(viewportHeight);
    jQuery('#fullScreen').css({
        'min-height': minHeight - 20
    });
}





           

