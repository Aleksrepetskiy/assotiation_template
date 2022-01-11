window.addEventListener("DOMContentLoaded", () => {
	//TABS
	const tabContents = document.querySelectorAll(".index-news__tab-content"),
		tabsList = document.querySelector(".index-news__tabs"),
		tabs = tabsList.querySelectorAll(".index-news__tab");

	function hideTabContents() {
		tabContents.forEach((item) => {
			//item.style.display = "none"
			item.classList.add("hide");
			item.classList.remove("show", "fade");
		});
		tabs.forEach((item) => {
			item.classList.remove("active");
		});
	}
	function showTabContent(position = 0) {
		// tabContents[position].style.display = "block";
		tabContents[position].classList.add("show", "fade");
		tabContents[position].classList.remove("hide");
		tabs[position].classList.add("active");
	}
	tabsList.addEventListener("click", function (e) {
		const target = e.target;
		if (target.classList.contains("index-news__tab")) {
			tabs.forEach((item, num) => {
				if (item == target) {
					hideTabContents();
					showTabContent(num);
				}
			});
		}
	});

	//READ-MORE
	const readMoreContent = document.querySelector('.read-more__content'),
		readMoreBtn = document.querySelector('.read-more__btn'),
		readMoreBtnBox = document.querySelector('.read-more__btn-box');
	readMoreBtn.addEventListener('click', (e) => {
		e.preventDefault();
		readMoreBtnBox.remove();
		readMoreContent.classList.remove('read-more__hide');
	})

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