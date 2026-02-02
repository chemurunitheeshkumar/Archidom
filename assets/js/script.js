(function ($) {

	"use strict";

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if ($('.loader-wrap').length) {
			$('.loader-wrap').delay(1000).fadeOut(500);
		}
	}

	if ($(".preloader-close").length) {
		$(".preloader-close").on("click", function () {
			$('.loader-wrap').delay(200).fadeOut(500);
		})
	}

	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.main-header');
			var scrollLink = $('.scroll-top');
			if (windowpos >= 110) {
				siteHeader.addClass('fixed-header');
				scrollLink.addClass('open');
			} else {
				siteHeader.removeClass('fixed-header');
				scrollLink.removeClass('open');
			}
		}
	}

	headerStyle();


	//Submenu Dropdown Toggle
	if ($('.main-header li.dropdown ul').length) {
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-angle-down"></span></div>');

	}

	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {


		var mobileMenuContent = $('.main-header .menu-area .main-menu').html();
		$('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
		$('.sticky-header .main-menu').append(mobileMenuContent);

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
			$(this).toggleClass('open');
			$(this).prev('ul').slideToggle(500);
		});
		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
			$(this).prev('.megamenu').slideToggle(900);
		});
		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});
	}

	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW({
			mobile: false
		});
		wow.init();
	}

	//Contact Form Validation
	if ($('#contact-form').length) {
		$('#contact-form').validate({
			rules: {
				username: {
					required: true
				},
				email: {
					required: true,
					email: true
				},
				phone: {
					required: true
				},
				service: {
					required: true
				},
				message: {
					required: true
				}
			}
		});
	}


	//LightBox / Fancybox
	if ($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect: 'fade',
			closeEffect: 'fade',
			helpers: {
				media: {}
			}
		});
	}


	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
				$(target).fadeIn(100);
				$(target).addClass('active-tab');
			}
		});
	}



	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}


	// banner-carousel
	if ($('.banner-carousel').length) {
		$('.banner-carousel').owlCarousel({
			loop: true,
			margin: 0,
			nav: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			active: true,
			smartSpeed: 1000,
			autoplay: 6000,
			navText: ['<span class="icon-6"></span>', '<span class="icon-7"></span>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 1
				},
				1024: {
					items: 1
				}
			}
		});
	}


	// single-item-carousel
	if ($('.single-item-carousel').length) {
		$('.single-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: ['<span class="icon-11"></span>', '<span class="icon-12"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 1
				},
				1200: {
					items: 1
				}

			}
		});
	}


	// two-item-carousel
	if ($('.two-item-carousel').length) {
		$('.two-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: ['<span class="icon-6"></span>', '<span class="icon-7"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 1
				},
				800: {
					items: 2
				},
				1200: {
					items: 2
				}

			}
		});
	}


	// three-item-carousel
	if ($('.three-item-carousel').length) {
		$('.three-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: ['<span class="icon-6"></span>', '<span class="icon-7"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 2
				},
				1200: {
					items: 3
				}

			}
		});
	}


	// four-item-carousel
	if ($('.four-item-carousel').length) {
		$('.four-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: ['<span class="fal fa-angle-left"></span>', '<span class="fal fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 1
				},
				600: {
					items: 2
				},
				800: {
					items: 3
				},
				1200: {
					items: 4
				}

			}
		});
	}


	// five-item-carousel
	if ($('.five-item-carousel').length) {
		$('.five-item-carousel').owlCarousel({
			loop: true,
			margin: 30,
			nav: true,
			smartSpeed: 500,
			autoplay: 1000,
			navText: ['<span class="fal fa-angle-left"></span>', '<span class="fal fa-angle-right"></span>'],
			responsive: {
				0: {
					items: 1
				},
				480: {
					items: 2
				},
				600: {
					items: 3
				},
				800: {
					items: 4
				},
				1200: {
					items: 5
				}

			}
		});
	}

	// testimonial-v2-carousel
	if ($('.testimonial-v2-carousel').length) {
		var testiV2Carousel = $('.testimonial-v2-carousel');
		testiV2Carousel.owlCarousel({
			loop: true,
			margin: 30,
			nav: false, // Turned off default nav
			dots: false, // Turned off dots to focus on custom buttons
			smartSpeed: 1000,
			autoplay: true,
			autoplayTimeout: 7000,
			responsive: {
				0: { items: 1 },
				768: { items: 1 },
				1200: { items: 1 }
			}
		});

		// Custom Navigation logic for Testimonials V2
		$('.custom-owl-next').on('click', function () {
			testiV2Carousel.trigger('next.owl.carousel');
		});
		$('.custom-owl-prev').on('click', function () {
			testiV2Carousel.trigger('prev.owl.carousel');
		});
	}


	//Add One Page nav
	if ($('.scroll-nav').length) {
		$('.scroll-nav').onePageNav();
	}

	//nice select
	$(document).ready(function () {
		$('select:not(.ignore)').niceSelect();
	});


	//Sortable Masonary with Filters
	function enableMasonry() {
		if ($('.sortable-masonry').length) {

			var winDow = $(window);
			// Needed variables
			var $container = $('.sortable-masonry .items-container');
			var $filter = $('.filter-btns');

			$container.isotope({
				filter: '*',
				masonry: {
					columnWidth: '.masonry-item.small-column'
				},
				animationOptions: {
					duration: 500,
					easing: 'linear'
				}
			});


			// Isotope Filter 
			$filter.find('li').on('click', function () {
				var selector = $(this).attr('data-filter');

				try {
					$container.isotope({
						filter: selector,
						animationOptions: {
							duration: 500,
							easing: 'linear',
							queue: false
						}
					});
				} catch (err) {

				}
				return false;
			});


			winDow.on('resize', function () {
				var selector = $filter.find('li.active').attr('data-filter');

				$container.isotope({
					filter: selector,
					animationOptions: {
						duration: 500,
						easing: 'linear',
						queue: false
					}
				});
			});


			var filterItemA = $('.filter-btns li');

			filterItemA.on('click', function () {
				var $this = $(this);
				if (!$this.hasClass('active')) {
					filterItemA.removeClass('active');
					$this.addClass('active');
				}
			});
		}
	}

	enableMasonry();


	// Progress Bar
	if ($('.count-bar').length) {
		$('.count-bar').appear(function () {
			var el = $(this);
			var percent = el.data('percent');
			$(el).css('width', percent).addClass('counted');
		}, { accY: -50 });

	}


	//Search Popup
	if ($('#search-popup').length) {

		//Show Popup
		$('.search-toggler').on('click', function () {
			$('#search-popup').addClass('popup-visible');
		});
		$(document).keydown(function (e) {
			if (e.keyCode === 27) {
				$('#search-popup').removeClass('popup-visible');
			}
		});
		//Hide Popup
		$('.close-search,.search-popup .overlay-layer').on('click', function () {
			$('#search-popup').removeClass('popup-visible');
		});
	}


	if ($(".odometer").length) {
		var odo = $(".odometer");
		odo.each(function () {
			$(this).appear(function () {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
		});
	}


	// Date picker
	function datepicker() {
		if ($('#datepicker').length) {
			$('#datepicker').datepicker();
		};
	}

	// Time picker deactivated - using native browser time input
	function timepicker() {
		return false;
	}

	// Modern Image Effects Logic
	function initImageEffects() {
		// 1. Reveal Animation on Scroll
		const revealObserver = new IntersectionObserver((entries) => {
			entries.forEach(entry => {
				if (entry.isIntersecting) {
					entry.target.classList.add('active');
				}
			});
		}, { threshold: 0.05 });

		document.querySelectorAll('.reveal-img').forEach(img => {
			revealObserver.observe(img);
		});

		// 2. Magnetic Effect for Featured Images
		const magneticItems = document.querySelectorAll('.magnetic-item');
		magneticItems.forEach(item => {
			item.addEventListener('mousemove', function (e) {
				const pos = this.getBoundingClientRect();
				const x = e.clientX - pos.left - pos.width / 2;
				const y = e.clientY - pos.top - pos.height / 2;

				this.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
			});

			item.addEventListener('mouseleave', function () {
				this.style.transform = 'translate(0px, 0px)';
			});
		});
	}

	/*	=========================================================================
	When document is on ready, do
	========================================================================== */

	jQuery(document).on('ready', function () {
		datepicker();
		timepicker();
		initImageEffects();
	});



	/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */

	$(window).on('scroll', function () {
		headerStyle();
	});



	/* ==========================================================================
   When document is loaded, do
   ========================================================================== */

	$(window).on('load', function () {
		handlePreloader();
		enableMasonry();
	});


	// Services Slider Logic
	if ($('.services-slider').length) {
		const track = document.querySelector('.services-track');
		const prevBtn = document.getElementById('prevBtn');
		const nextBtn = document.getElementById('nextBtn');
		const cards = document.querySelectorAll('.service-card');

		let currentIndex = 0;

		function updateSlider() {
			if (!cards.length) return;
			const cardWidth = cards[0].offsetWidth + 30; // card width + margin 
			track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;

			// Update button states
			prevBtn.classList.toggle('disabled', currentIndex === 0);
			const visibleCards = window.innerWidth > 1100 ? 3 : (window.innerWidth > 767 ? 2 : 1);
			nextBtn.classList.toggle('disabled', currentIndex >= cards.length - visibleCards);
		}

		nextBtn.addEventListener('click', () => {
			const visibleCards = window.innerWidth > 1100 ? 3 : (window.innerWidth > 767 ? 2 : 1);
			if (currentIndex < cards.length - visibleCards) {
				currentIndex++;
				updateSlider();
			}
		});

		prevBtn.addEventListener('click', () => {
			if (currentIndex > 0) {
				currentIndex--;
				updateSlider();
			}
		});

		window.addEventListener('resize', updateSlider);
		updateSlider(); // Initial call
	}

	// Hero Slider
	let slides = document.querySelectorAll(".slide");
	let slideIndex = 0;

	function showSlide() {
		if (!slides.length) return;
		slides.forEach(slide => slide.classList.remove("active"));
		slides[slideIndex].classList.add("active");
		slideIndex = (slideIndex + 1) % slides.length;
	}

	if (slides.length > 0) {
		setInterval(showSlide, 4000);
	}

	// Custom Services Arrows
	const srvContainer = document.getElementById('srv-container');
	if (srvContainer) {
		const nextBtn = document.getElementById('srv-next');
		const prevBtn = document.getElementById('srv-prev');

		nextBtn.addEventListener('click', () => {
			srvContainer.scrollBy({ left: 400, behavior: 'smooth' });
		});

		prevBtn.addEventListener('click', () => {
			srvContainer.scrollBy({ left: -400, behavior: 'smooth' });
		});
	}

	// Accordion Logic
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {
			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion-block');

			if ($(this).next('.acc-content').is(':visible')) {
				$(this).removeClass('active');
				target.removeClass('active');
				$(this).next('.acc-content').slideUp(300);
				$(this).find('.icon-outer i').removeClass('fa-arrow-up').addClass('fa-arrow-down');
			} else {
				$(outerBox).find('.accordion-block .acc-btn').removeClass('active');
				$(outerBox).find('.accordion-block').removeClass('active');
				$(outerBox).find('.accordion-block').children('.acc-content').slideUp(300);
				$(outerBox).find('.accordion-block .acc-btn .icon-outer i').removeClass('fa-arrow-up').addClass('fa-arrow-down');

				$(this).addClass('active');
				target.addClass('active');
				$(this).next('.acc-content').slideDown(300);
				$(this).find('.icon-outer i').removeClass('fa-arrow-down').addClass('fa-arrow-up');
			}
		});
	}

})(window.jQuery);



// Service Section Swiper
if (typeof Swiper !== 'undefined' && $('.service-swiper').length) {
	var serviceSwiper = new Swiper(".service-swiper", {
		slidesPerView: 1,
		spaceBetween: 25,
		speed: 1200,
		loop: true,
		autoplay: {
			delay: 3500,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: ".service-four-swiper-arrow .swiper-button-next",
			prevEl: ".service-four-swiper-arrow .swiper-button-prev",
		},
		breakpoints: {
			576: {
				slidesPerView: 1.2,
			},
			768: {
				slidesPerView: 2,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 3.5,
			},
		},
	});
}
