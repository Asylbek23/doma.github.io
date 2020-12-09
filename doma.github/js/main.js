$(document).ready(function(){

	// Fixed Menu
	// const headerHeight = $('.main').height(),
	// 			navHeight = $('.header').height();

	// $(document).on('scroll', function() {
	// 	const documentScroll = $(this).scrollTop();
	// 	if (documentScroll > headerHeight) {
	// 		$('.header').addClass('fixed');
	// 		$('.main').css({
	// 			'paddingTop': navHeight
	// 		});
	// 	} else {
	// 		$('.header').removeClass('fixed');
	// 		$('.main').removeAttr('style')
	// 	}
	// });

	// Scroll UP
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1600) {
			$('.pageup').fadeIn();
		} else {
			$('.pageup').fadeOut();
		}
	});

	// Smoothness - you can use this everywhere
	$("a[href^='#up']").click(function() {
		const _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	// Swiper Slider
	var mySwiper = new Swiper('.swiper-container', {
		slidesPerView: 3,
		slidesPerGroup: 3,
		spaceBetween: 30,
		observer: true,
		observeParents: true,
		// autoHeight: true,
		// width: 1170,
		// setWrapperSize: true,
		loop: true,
	
		pagination: {
			el: '.swiper-dots',
			clickable: true
		},
	
		navigation: {
			nextEl: '.next',
			prevEl: '.prev',
		},
	});

	// Selector for Tabs
	$('.projects__tabs li').click(function (e) {
		e.preventDefault();
		$('.projects__tabs .active').removeClass('active');
		$(this).addClass('active');
		const tab = $(this).data('tab');
		$('.projects__slider-block').not(tab).css({
			'display': 'none'
		});
		$(tab).fadeIn(400);
	});


});
