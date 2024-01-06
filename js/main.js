 AOS.init({
 	duration: 800,
 	easing: 'slide',
 	once: true
 });

 jQuery(document).ready(function($) {

 	"use strict";

 	var lozadFunc = function() {
 		const el = document.querySelector('img');
 		const observer = lozad(el);
 		observer.observe();	
 	}
 	lozadFunc();


 	var siteMenuClone = function() {

 		$('.js-clone-nav').each(function() {
 			var $this = $(this);
 			$this.clone().attr('class', 'site-nav-wrap').appendTo('.site-mobile-menu-body');
 		});


 		setTimeout(function() {

 			var counter = 0;
 			$('.site-mobile-menu .has-children').each(function(){
 				var $this = $(this);

 				$this.prepend('<span class="arrow-collapse collapsed">');

 				$this.find('.arrow-collapse').attr({
 					'data-toggle' : 'collapse',
 					'data-target' : '#collapseItem' + counter,
 				});

 				$this.find('> ul').attr({
 					'class' : 'collapse',
 					'id' : 'collapseItem' + counter,
 				});

 				counter++;

 			});

 		}, 1000);

 		$('body').on('click', '.arrow-collapse', function(e) {
 			var $this = $(this);
 			if ( $this.closest('li').find('.collapse').hasClass('show') ) {
 				$this.removeClass('active');
 			} else {
 				$this.addClass('active');
 			}
 			e.preventDefault();  

 		});

 		$(window).resize(function() {
 			var $this = $(this),
 			w = $this.width();

 			if ( w > 768 ) {
 				if ( $('body').hasClass('offcanvas-menu') ) {
 					$('body').removeClass('offcanvas-menu');
 				}
 			}
 		})

 		$('body').on('click', '.js-menu-toggle', function(e) {
 			var $this = $(this);
 			e.preventDefault();

 			if ( $('body').hasClass('offcanvas-menu') ) {
 				$('body').removeClass('offcanvas-menu');
 				$this.removeClass('active');
 			} else {
 				$('body').addClass('offcanvas-menu');
 				$this.addClass('active');
 			}
 		}) 

		// click outisde offcanvas
		$(document).mouseup(function(e) {
			var container = $(".site-mobile-menu");
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				if ( $('body').hasClass('offcanvas-menu') ) {
					$('body').removeClass('offcanvas-menu');
				}
			}
		});
	}; 
	siteMenuClone();


	var sitePlusMinus = function() {
		$('.js-btn-minus').on('click', function(e){
			e.preventDefault();
			if ( $(this).closest('.input-group').find('.form-control').val() != 0  ) {
				$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) - 1);
			} else {
				$(this).closest('.input-group').find('.form-control').val(parseInt(0));
			}
		});
		$('.js-btn-plus').on('click', function(e){
			e.preventDefault();
			$(this).closest('.input-group').find('.form-control').val(parseInt($(this).closest('.input-group').find('.form-control').val()) + 1);
		});
	};
	// sitePlusMinus();


	var siteSliderRange = function() {
		$( "#slider-range" ).slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
			}
		});
		$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
			" - $" + $( "#slider-range" ).slider( "values", 1 ) );
	};
	// siteSliderRange();


	var siteMagnificPopup = function() {
		$('.image-popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
	    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
	    gallery: {
	    	enabled: true,
	    	navigateByImgClick: true,
	      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
	    },
	    image: {
	    	verticalFit: true
	    },
	    zoom: {
	    	enabled: true,
	      duration: 300 // don't foget to change the duration also in CSS
	    }
	  });

		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});
	};
	siteMagnificPopup();


	var siteCarousel = function () {
		if ( $('.nonloop-block-13').length > 0 ) {
			$('.nonloop-block-13').owlCarousel({
				center: false,
				items: 1,
				loop: false,
				stagePadding: 0,
				margin: 20,
				nav: true,
				navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
				responsive:{
					600:{
						margin: 20,
						items: 2
					},
					1000:{
						margin: 20,
						stagePadding: 0,
						items: 2
					},
					1200:{
						margin: 20,
						stagePadding: 0,
						items: 3
					}
				}
			});
		}

		$('.slide-one-item').owlCarousel({
			center: false,
			items: 1,
			loop: true,
			stagePadding: 0,
			margin: 0,
			autoplay: true,
			smartSpeed: 1000,
			pauseOnHover: false,
			nav: true,
			navText: ['<span class="icon-keyboard_arrow_left">', '<span class="icon-keyboard_arrow_right">']
		});
	};
	siteCarousel();

	var siteStellar = function() {
		$(window).stellar({
			responsive: false,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});
	};
	siteStellar();

	var siteCountDown = function() {

		$('#date-countdown').countdown('2020/10/10', function(event) {
			var $this = $(this).html(event.strftime(''
				+ '<span class="countdown-block"><span class="label">%w</span> weeks </span>'
				+ '<span class="countdown-block"><span class="label">%d</span> days </span>'
				+ '<span class="countdown-block"><span class="label">%H</span> hr </span>'
				+ '<span class="countdown-block"><span class="label">%M</span> min </span>'
				+ '<span class="countdown-block"><span class="label">%S</span> sec</span>'));
		});

	};
	siteCountDown();

	var siteDatePicker = function() {

		if ( $('.datepicker').length > 0 ) {
			$('.datepicker').datepicker();
		}

	};
	siteDatePicker();

	var swiperSetting = function() {
		var mySwiper = new Swiper ('.swiper-container', {
	    // Optional parameters
	    // direction: 'horizontal',
	    // loop: true,

	    // If we need pagination
	    pagination: {
	    	el: '.swiper-pagination',
	    },

	    // Navigation arrows
	    navigation: {
	    	nextEl: '.swiper-button-next',
	    	prevEl: '.swiper-button-prev',
	    },
	    mousewheel: {
	    	invert: false,
	    	forceToAxis: true,
	    	releaseOnEdges: true,
	    },

		  // direction: 'vertical',
		  freeMode: true,
      // slidesPerView: 'auto',
      spaceBetween: 30,
      mousewheel: true,
      pagination: {
      	el: '.swiper-pagination',
      	clickable: true,
      },

	    // And if we need scrollbar
	    // scrollbar: {
	    //   el: '.swiper-scrollbar',
	    // },

	    slidesPerView: 3,
	    breakpoints: {
	    	668: {
	    		slidesPerView: 1
	    	},
	    	1024: {
	    		slidesPerView: 2 
	    	}
	    },
			// paginationClickable: false,
			spaceBetween: 20,
			// freeMode: true,
			// grabCursor: true,
			// mousewheelControl: true

		})
	}
	swiperSetting();
	(function() {
		"use strict";
	  
		/**
		 * Easy selector helper function
		 */
		const select = (el, all = false) => {
		  el = el.trim()
		  if (all) {
			return [...document.querySelectorAll(el)]
		  } else {
			return document.querySelector(el)
		  }
		}
	  
		/**
		 * Easy event listener function
		 */
		const on = (type, el, listener, all = false) => {
		  let selectEl = select(el, all)
		  if (selectEl) {
			if (all) {
			  selectEl.forEach(e => e.addEventListener(type, listener))
			} else {
			  selectEl.addEventListener(type, listener)
			}
		  }
		}
	  
		/**
		 * Easy on scroll event listener 
		 */
		const onscroll = (el, listener) => {
		  el.addEventListener('scroll', listener)
		}
	  
		/**
		 * Navbar links active state on scroll
		 */
		let navbarlinks = select('#navbar .scrollto', true)
		const navbarlinksActive = () => {
		  let position = window.scrollY + 200
		  navbarlinks.forEach(navbarlink => {
			if (!navbarlink.hash) return
			let section = select(navbarlink.hash)
			if (!section) return
			if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
			  navbarlink.classList.add('active')
			} else {
			  navbarlink.classList.remove('active')
			}
		  })
		}
		window.addEventListener('load', navbarlinksActive)
		onscroll(document, navbarlinksActive)
	  
		/**
		 * Scrolls to an element with header offset
		 */
		const scrollto = (el) => {
		  let elementPos = select(el).offsetTop
		  window.scrollTo({
			top: elementPos,
			behavior: 'smooth'
		  })
		}
	  
		/**
		 * Back to top button
		 */
		let backtotop = select('.back-to-top')
		if (backtotop) {
		  const toggleBacktotop = () => {
			if (window.scrollY > 100) {
			  backtotop.classList.add('active')
			} else {
			  backtotop.classList.remove('active')
			}
		  }
		  window.addEventListener('load', toggleBacktotop)
		  onscroll(document, toggleBacktotop)
		}
	  
		/**
		 * Mobile nav toggle
		 */
		on('click', '.mobile-nav-toggle', function(e) {
		  select('body').classList.toggle('mobile-nav-active')
		  this.classList.toggle('bi-list')
		  this.classList.toggle('bi-x')
		})
	  
		/**
		 * Scrool with ofset on links with a class name .scrollto
		 */
		on('click', '.scrollto', function(e) {
		  if (select(this.hash)) {
			e.preventDefault()
	  
			let body = select('body')
			if (body.classList.contains('mobile-nav-active')) {
			  body.classList.remove('mobile-nav-active')
			  let navbarToggle = select('.mobile-nav-toggle')
			  navbarToggle.classList.toggle('bi-list')
			  navbarToggle.classList.toggle('bi-x')
			}
			scrollto(this.hash)
		  }
		}, true)
	  
		/**
		 * Scroll with ofset on page load with hash links in the url
		 */
		window.addEventListener('load', () => {
		  if (window.location.hash) {
			if (select(window.location.hash)) {
			  scrollto(window.location.hash)
			}
		  }
		});
	  
		/**
		 * Hero type effect
		 */
		const typed = select('.typed')
		if (typed) {
		  let typed_strings = typed.getAttribute('data-typed-items')
		  typed_strings = typed_strings.split(',')
		  new Typed('.typed', {
			strings: typed_strings,
			loop: true,
			typeSpeed: 100,
			backSpeed: 50,
			backDelay: 2000
		  });
		}
	  
		/**
		 * Skills animation
		 */
		let skilsContent = select('.skills-content');
		if (skilsContent) {
		  new Waypoint({
			element: skilsContent,
			offset: '80%',
			handler: function(direction) {
			  let progress = select('.progress .progress-bar', true);
			  progress.forEach((el) => {
				el.style.width = el.getAttribute('aria-valuenow') + '%'
			  });
			}
		  })
		}
	  
		/**
		 * Porfolio isotope and filter
		 */
		window.addEventListener('load', () => {
		  let portfolioContainer = select('.portfolio-container');
		  if (portfolioContainer) {
			let portfolioIsotope = new Isotope(portfolioContainer, {
			  itemSelector: '.portfolio-item'
			});
	  
			let portfolioFilters = select('#portfolio-flters li', true);
	  
			on('click', '#portfolio-flters li', function(e) {
			  e.preventDefault();
			  portfolioFilters.forEach(function(el) {
				el.classList.remove('filter-active');
			  });
			  this.classList.add('filter-active');
	  
			  portfolioIsotope.arrange({
				filter: this.getAttribute('data-filter')
			  });
			  portfolioIsotope.on('arrangeComplete', function() {
				AOS.refresh()
			  });
			}, true);
		  }
	  
		});
		new Swiper('.portfolio-details-slider', {
		  speed: 400,
		  loop: true,
		  autoplay: {
			delay: 5000,
			disableOnInteraction: false
		  },
		  pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		  }
		});
	  
		/**
		
		  slidesPerView: 'auto',
		  pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		  },
		  breakpoints: {
			320: {
			  slidesPerView: 1,
			  spaceBetween: 20
			},
	  
			1200: {
			  slidesPerView: 3,
			  spaceBetween: 20
			}
		  }
		});
	  
		/**
		 * Animation on scroll
		 */
		window.addEventListener('load', () => {
		  AOS.init({
			duration: 1000,
			easing: 'ease-in-out',
			once: true,
			mirror: false
		  })
		});
	  
		/**
		 * Initiate Pure Counter 
		 */
		new PureCounter();
	  
	  })()

	  let backtotop = select('.back-to-top')
	  if (backtotop) {
		const toggleBacktotop = () => {
		  if (window.scrollY > 100) {
			backtotop.classList.add('active')
		  } else {
			backtotop.classList.remove('active')
		  }
		}
		window.addEventListener('load', toggleBacktotop)
		onscroll(document, toggleBacktotop)
	  }
	



});