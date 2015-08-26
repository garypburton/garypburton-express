// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
/*
Plugin: jQuery Parallax
Version 1.1
Author: Ian Lunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

//function that places the navigation in the center of the window
function RepositionNav(){
    var windowHeight = $(window).height(); //get the height of the window
    var navHeight = $('#nav').height() / 2;
    var windowCenter = (windowHeight / 2); 
    var newtop = windowCenter - navHeight;
    $('#nav').css({"top": newtop}); //set the new top position of the navigation list
}


(function( $ ){
    $.fn.parallax = function(xpos, adjuster, inertia, outerHeight) {
            
function inView(pos, element){
    
    element.each(function(){ //for each selector, determine whether it's inview and run the move() function
        
        var element = $(this);
        var top = element.offset().top;
        
        if(outerHeight == true){
            var height = element.outerHeight(true);
        }else{
            var height = element.height();
        }
        
        //above & in view
        if(top + height >= pos && top + height - windowHeight < pos){
            move(pos, height);
        }
                
        //full view
        if(top <= pos && (top + height) >= pos && (top - windowHeight) < pos && top + height - windowHeight > pos){
            move(pos, height);
        }
        
        //below & in view
        if(top + height > pos && top - windowHeight < pos && top > pos){
            move(pos, height);
        }
    });
}       
        
        var $window = $(window);
        var windowHeight = $(window).height();
        var pos = $window.scrollTop(); //position of the scrollbar
        var $this = $(this);
        
        //setup defaults if arguments aren't specified
        if(xpos == null){xpos = "50%"}
        if(adjuster == null){adjuster = 0}
        if(inertia == null){inertia = 0.1}
        if(outerHeight == null){outerHeight = true}
        
        height = $this.height();
        $this.css({'backgroundPosition': newPos(xpos, outerHeight, adjuster, inertia)}); 
        
        function newPos(xpos, windowHeight, pos, adjuster, inertia){
            return xpos + " " + Math.round((-((windowHeight + pos) - adjuster) * inertia)) + "px";
        }
        
        //function to be called whenever the window is scrolled or resized
        function move(pos, height){ 
                $this.css({'backgroundPosition': newPos(xpos, height, pos, adjuster, inertia)}); 
        }
        
        $window.bind('scroll', function(){ //when the user is scrolling...
            var pos = $window.scrollTop() ; //position of the scrollbar
            inView(pos -320, $this); //The -figure delays the effect of the scrolling
            
            $('#pixels').html(pos);
        })
    }
})( jQuery );











    








