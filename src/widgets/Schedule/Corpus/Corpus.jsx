// 'use client'

// import { getSchedule } from "@app/store/schedule/schedule.slice"
// import { useSelector } from "react-redux"

// // import Numbering from "@entities/Schedule/Numbering/Numbering"
// import DarkButton from "@shared/buttons/DarkButton/DarkButton"

// import style from './Corpus.module.scss'

// // const handleAddFavouritedClick = () => {

// // }

// const Corpus = ({ schedule, title }) => {
//   const { dayOfWeek } = useSelector(getSchedule)

//   schedule = schedule[dayOfWeek]

//   return (
//     <section>
//      <div className={style.head}>
//         <h2 className={style.title}>{title}</h2>
//         {/* <CorpusSearchBar data={searchData} /> */}
//       </div>

//       <div className={style.schedule}>
//         <DarkButton
//           text='Добавить в избранное'
//           classNames='hidden corpus__add-favourite-button'
//           onClick={handleAddFavouritedClick}
//         />

  
//       </div>
//     </section>
//   )
// }

// export default Corpus