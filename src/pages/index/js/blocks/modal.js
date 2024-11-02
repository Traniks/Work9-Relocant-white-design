export function modal() {
	// let scrollPosition = 0 // Глобальная переменная для хранения позиции прокрутки

	// Для открытия модалок
	function open(btnID, modalID) {
		const btn = document.querySelector(`#${btnID}`)
		const modal = document.querySelector(`#${modalID}`)

		btn.addEventListener('click', () => {
			// scrollPosition = window.pageYOffset // Сохраняем текущую позицию прокрутки
			modal.classList.add(`${modalID}_active`) // Добавляем класс - открываем модалку
			document.body.style.overflow = 'hidden' // Останавливаем прокрутку сайта
		})
	}

	// Для закрытия модалок
	function close(modalID) {
		const modal = document.querySelector(`#${modalID}`)
		const cross = document.querySelector(`#${modalID}__cross`)

		cross.addEventListener('click', () => {
			// window.scrollTo(0, scrollPosition) // Восстанавливаем позицию прокрутки
			modal.classList.remove(`${modalID}_active`) // Убирает класс - закрывает модалку
			document.body.style.overflow = '' // Восстанавливает прокрутку сайта
		})
	}

	// Старт - Для раскрытия номера в modal-number
	const modals = document.querySelectorAll('.modal-number, .modal-info')

	modals.forEach(modal => {
		const number = modal.querySelector('.modal-number__content-number, .modal-info__content-number')
		const btn = modal.querySelector('.modal-number__content-number button, .modal-info__content-number button')

		if (btn && number) {
			btn.addEventListener('click', () => {
				number.classList.add('modal-number__content-number_active','modal-info__content-number_active')

				setTimeout(() => {
					btn.style.display = 'none'
				}, 1000)
			})
		}
	})

	// function hideElements() {
	// 	const screenWidth = window.innerWidth
	// 	const modalNumberBg = document.querySelector('.modal-call__bg')
	// 	const modalNumberBtn = document.querySelector('.modal-call__btn')

	// 	if (screenWidth < 768) {
	// 		modalNumberBg.style.display = 'none'
	// 		modalNumberBtn.style.display = 'none'
	// 	} else {
	// 		modalNumberBg.style.display = ''
	// 		modalNumberBtn.style.display = ''
	// 	}
	// }

	// Вызов функции при загрузке страницы и изменении размера окна
	// window.addEventListener('load', hideElements)
	// window.addEventListener('resize', hideElements)
	// Конец - Для раскрытия номера в modal-call

	// Открытие модалок
	open('phone-1', 'modal-number')
	open('phone-2', 'modal-number')

	open('order-1', 'modal-order')

	open('info-1', 'modal-info')

	open('tg-1', 'modal-tg')
	open('tg-2', 'modal-tg')
	open('tg-3', 'modal-tg')
	open('tg-4', 'modal-tg')
	open('tg-5', 'modal-tg')
	open('tg-6', 'modal-tg')

	open('ws-1', 'modal-ws')
	open('ws-2', 'modal-ws')
	open('ws-3', 'modal-ws')
	open('ws-4', 'modal-ws')
	open('ws-5', 'modal-ws')
	open('ws-6', 'modal-ws')

	// Закрытие модалок
	close('modal-number')
	close('modal-order')
	close('modal-info')
	close('modal-tg')
	close('modal-ws')
	// close('modal-thanks')
}