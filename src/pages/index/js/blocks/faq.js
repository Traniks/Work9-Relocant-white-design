export function faq() {
	// Получаем все элементы с классом "faq__item"
	const boxes = document.querySelectorAll('.faq__item')

	boxes.forEach(item => {
		const img = item.querySelector('.faq__item-img')

		// Устанавливаем исходное изображение
		img.src = './plus.svg' // замените на путь к вашему изображению
	})

	// Проходимся по каждому элементу и добавляем обработчик события "click"
	boxes.forEach(item => {
		// Находим дочерние элементы с классами "faq__item-img" и "faq__item-list"

		const img = item.querySelector('.faq__item-img')
		const description = item.querySelector('.faq__item-list')

		// Добавляем обработчик события "click" для каждого "item"
		item.addEventListener('click', () => {
			// Добавляем классы при нажатии
			if (img.src.includes('/plus.svg')) {
				img.src = '/minus.svg' // замените на путь к новому изображению
			} else {
				img.src = '/plus.svg' // возвращаем исходное изображение
			}

			// img.classList.toggle('faq__item-img_active')
			description.classList.toggle('faq__item-list_active')
		})
	})
}
