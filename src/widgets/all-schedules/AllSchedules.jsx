'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import style from './style.module.scss'
//import stylesCalendar from  'react-calendar/dist/Calendar.css';
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import './calendar.css'
const AllSchedulesAdmin = () => {
	const [schedules, setSchedules] = useState(null)
	const [itemOffset, setItemOffset] = useState(0)
	let [counter, setCounter] = useState(1)
	const [clicked, setClicked] = useState(false)
	const [value, onChange] = useState(null)
	console.log(value)
	useEffect(() => {
		const getAllSchedulesTwo = async () => {
			try {
				const somedata = await axios(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/schedule/getAll`,
					{ params: { counter, data: value !== 0 ? value : null } }
				)
				console.log('somedata', somedata.data)
				setSchedules([])

				setSchedules(somedata.data)
				console.log(somedata.data)
			} catch (error) {
				console.log(error)
				alert(error.response.data.message)
				return (
					<main>
						<h1>Произошла ошибка</h1>
					</main>
				)
			}
		}
		getAllSchedulesTwo()
		// async function getAllSchedules() {
		//   await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/schedule/getAll`)
		//     .then((res) => res.json``)
		//     .then((doc) => setSchedules(...doc))
		//     .catch((err) => {
		//       console.log(err);

		//       return (
		//         <main>
		//           <h1>Произошла ошибка</h1>
		//         </main>
		//       );
		//     });
		// }

		// getAllSchedules();
	}, [value])

	const itemsPerPage = 36

	const endOffset = itemOffset + itemsPerPage
	const currentItems = schedules && schedules.slice(itemOffset, endOffset)
	const pageCount = schedules && Math.ceil(schedules.length / itemsPerPage)
	const [scheduleOne, setScheduleOne] = useState('')
	const [scheduleTwo, setScheduleTwo] = useState('')
	function extractImagePath(text) {
		const regex = /\/uploads\/[\w.-]+\.(jpg|jpeg|png|gif)/
		const result = text.match(regex)

		if (result && result.length > 0) {
			return result[0]
		} else {
			return 'Совпадений не найдено'
		}
	}

	const handleImageChange = async (event, one, _id) => {
		try {
			const file = event.target.files[0]
			const formData = new FormData()
			formData.append('image', file)
			console.log(formData)

			const token = await Cookies.get('token')

			// Загружаем изображение
			const { data } = await axios.post(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/upload`,
				formData,
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						Authorization: `Bearer ${token}`,
					},
				}
			)

			const id = _id

			// Обновление для scheduleOne
			if (one === 'one') {
				setScheduleOne(data.imagelink)
				const token = await Cookies.get('token')
				const setNewScheduleOne = await axios.put(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/schedule/updateOne`,
					{
						scheduleOne: data.imagelink, // данные для обновления
					},
					{
						params: { id }, // параметры запроса передаются здесь
						headers: {
							'Access-Control-Allow-Origin': '*',
							Authorization: `Bearer ${token}`, // токен аутентификации
						},
					}
				)
				alert('Расписание первого корпуса успешно обновлено Обновите страницу!')
			}

			// Обновление для scheduleTwo
			if (one === 'two') {
				setScheduleTwo(data.imagelink)
				const token = await Cookies.get('token')
				const setNewScheduleTwo = await axios.put(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/schedule/updateTwo`,
					{
						scheduleTwo: data.imagelink, // данные для обновления
					},
					{
						params: { id }, // параметры запроса
						headers: {
							'Access-Control-Allow-Origin': '*',
							Authorization: `Bearer ${token}`, // токен аутентификации
						},
					}
				)
				alert('Расписание второго корпуса успешно обновлено Обновите страницу!')
			}

			console.log(data)
			console.log('_id', _id)
		} catch (err) {
			alert('Не удалось загрузить расписание')
			console.log(err)
		}
	}

	// const handlePageClick = (event) => {
	//   const newOffset = (event.selected * itemsPerPage) % schedules.length;
	//   setItemOffset(newOffset);
	// };
	const LoadMore = async () => {
		try {
			setCounter((counter = counter + 1))
			const somedata = await axios(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/schedule/getAll`,
				{ params: { counter } }
			)
			setSchedules([...schedules, ...somedata.data])
		} catch (error) {
			console.log(error)
		}
	}

	const deleteBtn = async id => {
		try {
			// Запрашиваем подтверждение у пользователя
			const isConfirmed = confirm(
				'Вы действительно хотите удалить это расписание?'
			)

			if (!isConfirmed) {
				alert('Удаление отменено.')
				return // Если пользователь выбрал "Нет", выходим из функции и не делаем запрос
			}

			const token = Cookies.get('token')

			// Отправляем запрос на удаление
			await axios.delete(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/schedule/deleteSchedule`,
				{
					params: { id }, // параметры запроса
					headers: {
						'Access-Control-Allow-Origin': '*',
						Authorization: `Bearer ${token}`, // токен аутентификации
					},
				}
			)

			// Если удаление прошло успешно, выводим сообщение
			alert('Расписание успешно удалено. Обновите страницу!')
		} catch (err) {
			// В случае ошибки выводим сообщение об ошибке
			alert('Не удалось удалить расписание. Попробуйте снова.')
			console.log(err)
		}
	}

	return (
		<main className={style.schedules}>
			{/* <div>
				<button onClick={() => setClicked(true)} className={style.btn}>
					Поиск по дате
				</button>
			</div> */}
			{/* {clicked && (
				<div style={{ display: 'flex', justifyContent: 'center', margin: 10 }}>
					<Calendar calendarType='iso8601' onChange={onChange} value={value} />
				</div>
			)} */}
			<section className={style.schedules__main}>
				<ul className={style.schedules__list}>
					{schedules &&
						currentItems &&
						currentItems.map(({ _id, scheduleOne, scheduleTwo, date }) => (
							<li key={_id}>
								<div className={style.schedules__list__items}>
									<Zoom>
										<img
											src={`${process.env.NEXT_PUBLIC_SERVER_URL}${scheduleOne}`}
											width={400}
											height={300}
											alt={`Расписание ${date}`}
										/>
									</Zoom>

									<Popup
										trigger={<button className={style.update}>обновить</button>}
										position='right center'
									>
										<div className={style.popup}>
											<span
												style={{
													marginTop: 30,
													width: '150px',
													display: 'block',
													backgroundColor: '#0066FF',
													borderRadius: 10,
													padding: 10,
													color: '#FFF',
													fontSize: 18,
												}}
											>
												Первый корпус
											</span>
											<input
												onChange={event => handleImageChange(event, 'one', _id)}
												type='file'
												accept='.jpg, .png, .jpeg'
												name=''
												id=''
											/>
										</div>
									</Popup>

									<Zoom>
										<img
											src={`${process.env.NEXT_PUBLIC_SERVER_URL}${scheduleTwo}`}
											width={400}
											height={300}
											alt={`Расписание ${date}`}
										/>
									</Zoom>

									<Popup
										trigger={<button className={style.update}>обновить</button>}
										position='right center'
									>
										<div className={style.popup}>
											<span
												style={{
													marginTop: 30,
													width: '150px',
													display: 'block',
													backgroundColor: '#0066FF',
													borderRadius: 10,
													padding: 10,
													color: '#FFF',
													fontSize: 18,
												}}
											>
												второй корпус
											</span>
											<input
												onChange={event => handleImageChange(event, 'two', _id)}
												type='file'
												accept='.jpg, .png, .jpeg'
												name=''
												id=''
											/>
										</div>
									</Popup>
								</div>

								<p>{date}</p>
								<button
									onClick={() => deleteBtn(_id)}
									className={style.crudDelete}
								>
									удалить
								</button>
							</li>
						))}
				</ul>
			</section>

			{/* {schedules && currentItems && (
        <ReactPaginate
          breakLabel="..."
          nextLabel="Следующая"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={4}
          previousLabel="Предыдущая"
          renderOnZeroPageCount={null}
          pageLinkClassName="page__link"
          containerClassName="page__container"
          activeClassName="page__link__active"
          nextLinkClassName="page__next"
          previousLinkClassName="page__prev"
        />
      )} */}
			<button className={style.btn} onClick={() => LoadMore()}>
				Загрузить еще
			</button>
		</main>
	)
}

export default AllSchedulesAdmin
