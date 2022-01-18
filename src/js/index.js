window.addEventListener("DOMContentLoaded", () => {
	//SWIPER
	const swiper = new Swiper('.main-swiper', {
		// Optional parameters
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: true,
			pauseOnMouseEnter: true
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		keyboard: {
			enabled: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});

	const tableSwiper = new Swiper('.table-swiper', {
		// Optional parameters
		loop: false,
		spaceBetween: 30,
		keyboard: {
			enabled: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			// when window width is <= 499px
			499: {
				slidesPerView: 1,
				spaceBetweenSlides: 50
			},
			// when window width is <= 999px
			999: {
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
			}
		}
	});
});