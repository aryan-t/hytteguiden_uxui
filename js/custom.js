$(document).ready(function() {
	//sticky header
	var hHeight = $('.header').outerHeight(true);
	$(window).scroll(function() {
		
		if ($(window).scrollTop() >= hHeight) {
			$('.header').addClass('stickyheader');
		}
		else {
			$('.header').removeClass('stickyheader');
		}		
	});
	if (!$('body').hasClass('homepage')) {
		$('body').css('padding-top', hHeight);
	}

	//Drawer Menu
	$(".navtrigger").on("click", function(e) {
		$(".navigation").addClass("active");
		e.stopPropagation()
	});
	$(document).on("click", function(e) {
		if ($(e.target).is(".navigation, .navigation * ") === false || $(e.target).is(".closenav img") === true) {
			$(".navigation").removeClass("active");
		}
	});
	
	// Owl Carousel
	var owl = $('.owl-carousel-1, .owl-carousel-2, .owl-carousel-3');
	owl.owlCarousel({
		stagePadding: 10,
		margin: 10,
		nav: true,
		loop: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
	});
	var owl = $('.carousel-cabinimg');
	owl.owlCarousel({
		margin: 0,
		nav: false,
		loop: true,
		dots: true,
		responsive: {
			0: {
				items: 1
			}
		}
	});

	//Range Slider
	$('body').bootstrapMaterialDesign();
	var slider = document.getElementById('sliderDouble1');
	noUiSlider.create(slider, {
		start: [20, 60],
		connect: true,
		range: {
			min: 0,
			max: 100
		}
	});

	var slider = document.getElementById('sliderDouble2');
	noUiSlider.create(slider, {
		start: [20, 60],
		connect: true,
		range: {
			min: 0,
			max: 100
		}
	});

});