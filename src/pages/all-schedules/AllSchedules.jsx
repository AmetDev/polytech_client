'use client'

import axios from 'axios'
import { useEffect, useState } from 'react'
import Calendar from 'react-calendar'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import style from './style.module.scss'
//import stylesCalendar from  'react-calendar/dist/Calendar.css';
import './calendar.css'
const AllSchedules = () => {
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

	return (
		<main className={style.schedules}>
			<div>
				<button onClick={() => setClicked(true)} className={style.btn}>
					Поиск по дате
				</button>
			</div>
			{clicked && (
				<div style={{ display: 'flex', justifyContent: 'center', margin: 10 }}>
					<Calendar calendarType='iso8601' onChange={onChange} value={value} />
				</div>
			)}
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

									<Zoom>
										<img
											src={`${process.env.NEXT_PUBLIC_SERVER_URL}${scheduleTwo}`}
											width={400}
											height={300}
											alt={`Расписание ${date}`}
										/>
									</Zoom>
								</div>

								<p>{date}</p>
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

export default AllSchedules
