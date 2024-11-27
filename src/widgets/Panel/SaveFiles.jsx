import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'
import style from './Panel.module.scss'

const SaveFiles = () => {
	const [page, setPage] = useState('')
	const [error, setError] = useState(false)
	const [isFetching, setIsFetching] = useState(false)
	const [filesList, setFilesList] = useState(null)
	const [failedFetching, setFailedFetching] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')
	const [editedFiles, setEditedFiles] = useState(
		filesList
			? filesList.map(item => item.map(() => ({ name: '', file: '' })))
			: []
	)

	const onTursunchik = async event => {
		event.preventDefault()

		if (!page || page.includes('/')) {
			return setError(true)
		}

		setIsFetching(true)

		await axios
			.get(`${process.env.NEXT_PUBLIC_SERVER_URL}/files/get`, {
				params: { forPage: page },
			})
			.then(doc => {
				doc.message && setErrorMessage(doc.message)

				setFilesList(doc.data)
				setIsFetching(false)

				// Обновляем состояние editedFiles при новых данных
				setEditedFiles(
					doc.data.map(item => item.map(({ name, file }) => ({ name, file })))
				)
			})
			.catch(() => setFailedFetching(true))
	}

	useEffect(() => {
		if (filesList) {
			const initialEditedFiles = filesList.map(item =>
				item.map(() => ({ name: '', file: '' }))
			)
			setEditedFiles(initialEditedFiles)
		}
	}, [filesList])

	const handleDelete = (index1, index2) => {
		const updatedFilesList = [...filesList]
		updatedFilesList[index1] = updatedFilesList[index1].filter(
			(_, colIndex) => colIndex !== index2
		)
		setFilesList(updatedFilesList)
	}

	const handleAdd = () => {
		// Запрашиваем у пользователя индекс раздела, в который нужно добавить элемент
		const rowIndex = prompt('Введите индекс раздела:')

		// Проверяем, был ли введен индекс
		if (rowIndex !== null && !isNaN(rowIndex)) {
			// Создаем новый элемент
			const newFile = { name: '', file: '' }

			// Проверяем, существует ли массив с указанным индексом
			if (filesList && rowIndex >= 0 && rowIndex < filesList.length) {
				// Используем временную переменную для обновления состояния
				const updatedFilesList = [...filesList]
				updatedFilesList[rowIndex] = [
					...(updatedFilesList[rowIndex] || []),
					newFile,
				]

				const updatedEditedFiles = [...editedFiles, [newFile]]

				setFilesList(updatedFilesList)
				setEditedFiles(updatedEditedFiles)
			} else {
				alert('Указанный индекс раздела недействителен.')
			}
		}
	}

	const handleSave = async () => {
		try {
			// Используйте callback-функцию для доступа к последней версии filesList
			await axios.patch(`${process.env.NEXT_PUBLIC_SERVER_URL}/files/update`, {
				forPage: page,
				fileBlocksList: filesList,
			})

			alert('Успешно сохранено!')
		} catch (err) {
			console.log(err)
			alert('Не удалось сохранить')
		}
	}

	const handleFileChange = async (event, index1, index2, setFilesList) => {
		try {
			const token = await Cookies.get('token')
			console.log('token', token)
			const file = await event.target.files[0]

			if (file) {
				const formData = new FormData()
				formData.append('file', file)

				const { data } = await axios.post(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/uploadpdf`,
					formData,
					{
						headers: {
							'Access-Control-Allow-Origin': '*',
							Authorization: `Bearer ${token}`,
						},
					}
				)

				const newFileName = data.pdflink.match(/\/([^\/]+)$/)[1]
				const updatedFilesList = [...filesList]
				const targetObject = updatedFilesList[index1][index2]

				targetObject.file = newFileName

				setFilesList(updatedFilesList)

				alert('Успешно!')
			}
		} catch (err) {
			console.log(err)
			alert('Произошла ошибка на стороне сервера!')
		}
	}

	const handleEditName = (event, index1, index2) => {
		// Создаем копию текущего состояния filesList
		const updatedFilesList = [...filesList]

		// Найдем объект в массиве по переданным индексам
		const targetObject = updatedFilesList[index1][index2]

		// Обновим имя файла в найденном объекте
		targetObject.name = event.target.value

		// Обновим состояние filesList
		setFilesList(updatedFilesList)
	}

	return (
		<main className={style.save__files}>
			{/* Проверяем, не выполняется ли загрузка и файлов нет */}
			{!isFetching && !filesList ? (
				<section className={style.save__files__start}>
					<form onSubmit={onTursunchik}>
						{/* Поле ввода URL страницы */}
						<input
							type='text'
							onChange={event => {
								setPage(event.target.value)
								setError(false)
							}}
							style={
								error
									? { border: '1px solid #ee2828' }
									: { border: '1px solid #101010' }
							}
							placeholder='Введите url страницы без "/"'
						/>

						{/* Вывод сообщения об ошибке, если есть */}
						{error && (
							<p style={{ color: '#ee2828' }}>Введите корректный url</p>
						)}

						{/* Кнопка отправки формы */}
						<button type='submit'>Отправить</button>
					</form>
				</section>
			) : isFetching && !filesList ? (
				<section style={{ textAlign: 'center' }}>
					<h1>Идет поиск...</h1>
				</section>
			) : !isFetching && filesList && !errorMessage ? (
				<section className={style.save__files__main}>
					{filesList &&
						filesList.map((item, index1) => (
							<>
								<h3>Раздел {index1}</h3>
								<ul key={index1}>
									{item.map(({ file, name }, index2) => (
										<li key={`${index1}-${index2}`}>
											<div>
												<label htmlFor={`save-file-input-${index1}-${index2}`}>
													Загрузить новый файл
												</label>
												<input
													type='file'
													onChange={event =>
														handleFileChange(
															event,
															index1,
															index2,
															setFilesList
														)
													}
													id={`save-file-input-${index1}-${index2}`}
												/>
											</div>
											{/* Текстовое поле для имени */}
											<input
												type='text'
												value={name}
												onChange={event =>
													handleEditName(event, index1, index2)
												}
											/>

											{/* Текстовое поле для файла (disabled, если не требуется редактирование) */}
											<input type='text' disabled defaultValue={file} />

											<button
												style={{ cursor: 'pointer' }}
												onClick={() => handleDelete(index1, index2)}
											>
												Удалить
											</button>
										</li>
									))}
								</ul>
							</>
						))}

					<div className={style.save__files__panel}>
						<button onClick={handleSave}>Сохранить</button>
						<button onClick={handleAdd}>Добавить</button>
					</div>
				</section>
			) : errorMessage ? (
				<section>
					<p>{errorMessage}</p>
				</section>
			) : (
				failedFetching && (
					<section style={{ textAlign: 'center' }}>
						<h1>Произошла ошибка</h1>
					</section>
				)
			)}
		</main>
	)
}

export default SaveFiles
