$(document).ready(function(){

	// Nav link underline on hover & navbar bg color
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		$(".navbar").toggleClass('bg-green--nav');
	});

	// Fade banner content on scroll
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			$(".animate-one").css({
				opacity:"0"
			});
		}
		else {
			$(".animate-one").css({
				opacity:"1"
			});
		}
		

		if ($(window).scrollTop() > 150) {
			$(".animate-two").css({
				opacity:"0"
			});
		}
		else {
			$(".animate-two").css({
				opacity:"1"
			});
		}
		

		if ($(window).scrollTop() > 200) {
			$(".animate-three").css({
				opacity:"0"
			});
		}
		else {
			$(".animate-three").css({
				opacity:"1"
			});
		}
		
		if ($(window).scrollTop() > 300) {
			$(".animate-four").css({
				opacity:"0"
			});
		}
		else {
			$(".animate-four").css({
				opacity:"1"
			});
		}
		

	});
});

// Reveal Items on scroll

$('.waypoint').each(function() {
    var $el = $(this);
    var waypoint = new Waypoint({
    element: $el,
    handler: function() {
        $el.addClass("reveal-item--is-visible");
    },
    offset:"75%"
    });
});

$(".lazyload").on("load", function() {
    Waypoint.refreshAll();
});

// From Bottom up on scroll

(function($) {

  	$.fn.visible = function(partial) {
    
	  	var $t            = $(this),
    	$w            = $(window),
      	viewTop       = $w.scrollTop(),
      	viewBottom    = viewTop + $w.height(),
      	_top          = $t.offset().top,
      	_bottom       = _top + $t.height(),
      	compareTop    = partial === true ? _bottom : _top,
      	compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    
})(jQuery);

var win = $(window);

var allMods = $(".module");

allMods.each(function(i, el) {
  	var el = $(el);
  	if (el.visible(true)) {
    	el.addClass("already-visible"); 
  	} 
});

win.scroll(function(event) {
  
  	allMods.each(function(i, el) {
    	var el = $(el);
    	if (el.visible(true)) {
      	el.addClass("come-in"); 
    	} 
  	});
  
});

// initialize paroller.js 
$('window').paroller();
// initialize paroller.js and set attributes 
$(".parallor").paroller({ factor: '-0.3', type: 'background', direction: 'horizontal'});
$(".banner-parallor").paroller({ factor: '-0.3', type: 'background', direction: 'vertical'});

// Smooth Scroll
$(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});

$(function(){
    $(".scroll").click(function(){
        $("html,body").animate({scrollTop:$("body").offset().top},"1000");
        return false
    })
});

// On scroll navbar background
$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 500) {
            $(".nav-color").addClass("bg-green--nav-scroll");
        }
        else {
            $(".nav-color").removeClass("bg-green--nav-scroll");
        }
        
    });
});