// $(document).ready(function(){
//     $('.carousel__inner').slick({
//         speed: 500,
//         // adaptiveHeight: true,
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
//         responsive: [
//             {
//               breakpoint: 992,
//               settings: {
//                 arrows: false,
//                 dots: true
//               }
//             },
//             {
//               breakpoint: 600,
//               settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 2
//               }
//             },
//             {
//               breakpoint: 480,
//               settings: {
//                 slidesToShow: 1,
//                 slidesToScroll: 1
//               }
//             }
//             // You can unslick at a given breakpoint now by adding:
//             // settings: "unslick"
//             // instead of a settings object
//           ]
//     });
//   });

// document.addEventListener('DOMContentLoaded' , () => {


	//slider
	let slider = tns({
		container: '.carousel__inner',
		items: 1,
		slideBy: 'page',
		autoplay: false,
		controls: false,
		nav: false,
		mouseDrag: true,
		responsive: {
			992: {
				edgePadding: 30,
				gutter: 20,
				items: 1,
				mouseDrag: true,
			},
			767: {
				gutter: 30
			},
			575: {
				items: 1
			}
		}
	});


	document.querySelector('.prev').addEventListener('click', () => {
		slider.goTo('prev');
	});

	document.querySelector('.next').addEventListener('click', () => {
		slider.goTo('next');
	});


// tabs jQuerry
	(function ($) {
		$(function () {
			$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
				$(this)
					.addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
					.closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
			});

		});
	})(jQuery);



// toggle
	const catalogItem = document.querySelectorAll('.catalog-item');
	const backBtns = document.querySelectorAll('.catalog-item__back');



	catalogItem.forEach(item => {
		item.addEventListener('click', (evt) => {
			evt.preventDefault();
			const target = evt.target;
			if (target.matches('.catalog-item__link')) {
				item.querySelector('.catalog-item__list').classList.add('catalog-item__list_active');
				target.closest('.catalog-item__content').classList.remove('catalog-item__content_active');
			}
		})
	});
	backBtns.forEach(btn => {
		btn.addEventListener('click', (evt) => {
			evt.preventDefault();
			const target = evt.target;
			btn.closest('.catalog-item__list').classList.toggle('catalog-item__list_active');
			target.closest('.catalog-item').querySelector('.catalog-item__content').classList.toggle('catalog-item__content_active');
		})
	});


	//modal

	const btnsConsultation = document.querySelectorAll('[data-modal="consultation"]');
	const closeConsultationModal = document.querySelectorAll('.modal__close');

	const btnMiniCatalog = document.querySelectorAll('.button_mini');

	function closeModal(selectorOverlay, selectorModal) {
		document.querySelector(selectorOverlay).style.display = "none";
		document.querySelector(selectorModal).style.display = "none";
		document.body.style.overflow = '';
	}
	function openModal(selectorOverlay, selectorModal) {
		document.querySelector(selectorOverlay).style.display = "block";
		document.querySelector(selectorModal).style.display = "block";
		document.body.style.overflow = 'hidden';
	}

	btnsConsultation.forEach(btn => {
		btn.addEventListener('click', () => {
			openModal('.overlay', '#consultation');
		});
	});
	closeConsultationModal.forEach(btn => {
		btn.addEventListener('click', () => {
			closeModal('.overlay', '#consultation');
		});
	});

	btnMiniCatalog.forEach(btn => {
		btn.addEventListener('click', () => {
			openModal('.overlay', '#order');
		})
	});


	const firstForm = document.querySelector('.feed-form');
	// const thxForm = document.querySelector('#thx');
	firstForm.addEventListener('submit', async (evt) => {
		evt.preventDefault();
		const data = new FormData(firstForm);
		console.log(data);
		fetch("mailer/smart.php", {
			method: "POST",
			body: data
		});
	});

	//scroll smooth\
	const pageup = document.querySelector('.pageup');
	// window.addEventListener('scroll', () => {
	// 	console.log(window.scrollY);
	// 	if (window.scrollY > 1600) {
	// 		pageup.classList.toggle('show')
	// 	// } else {
	// 	// 	pageup.classList.toggle('none')
	// 	}
	// })



	pageup.addEventListener('click', (e) => {
		e.preventDefault();
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	})

	new WOW().init();

// });





