import Swiper from 'swiper'
import { Pagination, Navigation, EffectCoverflow } from 'swiper/modules'

export function slider() {
	const swiperReviewsOne = new Swiper('#reviews-slider-1', {
		modules: [Pagination, Navigation, EffectCoverflow],
		speed: 500,
		effect: 'coverflow',
		slidesPerView: '1',
		grabCursor: true,
		centeredSlides: true,
		rewind: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 100,
			scale: 0.8,
			modifier: 1,
			slideShadows: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: '3',
			},
		},
	})

	const swiperReviewsTwo = new Swiper('#reviews-slider-2', {
		modules: [Pagination, Navigation, EffectCoverflow],
		speed: 500,
		effect: 'coverflow',
		slidesPerView: '1',
		grabCursor: true,
		centeredSlides: true,
		rewind: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 100,
			scale: 0.8,
			modifier: 1,
			slideShadows: false,
		},
		breakpoints: {
			1200: {
				slidesPerView: '3',
			},
		},
	})

	const swiperLicense = new Swiper('#license-slider', {
		modules: [Navigation],
		speed: 500,
		effect: 'coverflow',
		slidesPerView: '1',
		spaceBetween: 30,
		grabCursor: true,
		centeredSlides: true,
		rewind: true,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			1200: {
				slidesPerView: '1',
			},
			768: {
				slidesPerView: '1',
			},
		},
	})

	// Функция для установки значения num в зависимости от размера экрана
	function setNum() {
		if (window.innerWidth > 1200) {
			swiperReviewsOne.slideTo(1)
			swiperReviewsTwo.slideTo(1)
		} else if (window.innerWidth > 767) {
			swiperLicense.slideTo(1)
		} else {
			swiperReviewsOne.slideTo(0)
			swiperReviewsTwo.slideTo(0)
			swiperLicense.slideTo(0)
		}
	}

	setNum()

	// Вызываем функцию при загрузке страницы
	window.addEventListener('load', setNum)
	// Вызываем функцию при изменении размера окна
	window.addEventListener('resize', setNum)

	// Переключение между Отзывами и Видео
	const toggleButtons = document.querySelectorAll('.reviews__toggle-btn')
	const sliders = [
		document.getElementById('reviews-slider-1'),
		document.getElementById('reviews-slider-2'),
	]

	// Удаление всех активных классов при загрузке и добавление только первым элементам
	function initializeActiveClasses() {
		toggleButtons.forEach(btn =>
			btn.classList.remove('reviews__toggle-btn_active')
		)
		sliders.forEach(slider =>
			slider.classList.remove('reviews__slider_active')
		)

		// Добавляем активные классы только к первой кнопке и первому слайдеру
		toggleButtons[0].classList.add('reviews__toggle-btn_active')
		sliders[0].classList.add('reviews__slider_active')
	}

	// Инициализация активных классов при загрузке страницы
	initializeActiveClasses()

	toggleButtons.forEach((button, index) => {
		button.addEventListener('click', () => {
			// Убираем класс active у всех кнопок и слайдеров
			toggleButtons.forEach(btn =>
				btn.classList.remove('reviews__toggle-btn_active')
			)
			sliders.forEach(slider =>
				slider.classList.remove('reviews__slider_active')
			)

			// Добавляем класс active к текущей кнопке и соответствующему слайдеру
			button.classList.add('reviews__toggle-btn_active')
			sliders[index].classList.add('reviews__slider_active')
		})
	})
}
