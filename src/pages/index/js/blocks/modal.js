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

	// Функция для открытия модального окна с динамическим заголовком услуг
	function openServiceModal() {
		const serviceItems = document.querySelectorAll('.other-services__item')
		const modal = document.getElementById('modal-services')
		const modalTitle = document.querySelector(
			'.modal-services__content-title'
		)

		serviceItems.forEach(item => {
			item.addEventListener('click', () => {
				// Получаем заголовок из атрибута data-title
				const title = item.getAttribute('data-title')
				modalTitle.textContent = title // Меняем заголовок в модальном окне
				modal.classList.add('modal-services_active') // Открываем модальное окно
				document.body.style.overflow = 'hidden' // Останавливаем прокрутку страницы
			})
		})
	}

	openServiceModal()

	// Старт - Для раскрытия номера в modal-number
	const modals = document.querySelectorAll('.modal-number, .modal-info')

	modals.forEach(modal => {
		const number = modal.querySelector(
			'.modal-number__content-number, .modal-info__content-number'
		)
		const btn = modal.querySelector(
			'.modal-number__content-number button, .modal-info__content-number button'
		)

		if (btn && number) {
			btn.addEventListener('click', () => {
				number.classList.add(
					'modal-number__content-number_active',
					'modal-info__content-number_active'
				)

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
	open('phone-1', 'modal-info')
	open('phone-2', 'modal-info')
	open('phone-3', 'modal-info')

	open('info-1', 'modal-info')

	open('order-1', 'modal-order')
	open('license-1', 'modal-license')

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
	close('modal-order')
	close('modal-info')
	close('modal-license')
	close('modal-tg')
	close('modal-ws')
	close('modal-services')
	// close('modal-thanks')
}