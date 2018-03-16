$(document).ready(function(){

	// Nav link underline on hover & navbar bg color
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		$(".navbar").toggleClass('bg-red--nav');
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

$(document).ready(function() {

  var curPage = 1;
  var numOfPages = $(".skw-page").length;
  var animTime = 1000;
  var scrolling = false;
  var pgPrefix = ".skw-page-";

  function pagination() {
    scrolling = true;

    $(pgPrefix + curPage).removeClass("inactive").addClass("active");
    $(pgPrefix + (curPage - 1)).addClass("inactive");
    $(pgPrefix + (curPage + 1)).removeClass("active");

    setTimeout(function() {
      scrolling = false;
    }, animTime);
  };

  function navigateUp() {
    if (curPage === 1) return;
    curPage--;
    pagination();
  };

  function navigateDown() {
    if (curPage === numOfPages) return;
    curPage++;
    pagination();
  };

  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrolling) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else { 
      navigateDown();
    }
  });

  $(document).on("keydown", function(e) {
    if (scrolling) return;
    if (e.which === 38) {
      navigateUp();
    } else if (e.which === 40) {
      navigateDown();
    }
  });

});
