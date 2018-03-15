$(document).ready(function(){
	$('#nav-icon1').click(function(){
		$(this).toggleClass('open');
		$(".navbar").toggleClass('bg-red--nav');
	});

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


