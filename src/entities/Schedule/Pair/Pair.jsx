'use client'

import style from './Pair.module.scss'

const Pair = ({ group, schedule, column }) => {
  return (
    <div className={style.pair} column={column} ref={pairRef}>
      <p className={style.title}>{group}</p>

      {schedule.map((lesson, i) => (
        <div key={i} pair={i} className={style.item}>
          {lesson && lesson.name ? (
            <>
              <p>{lesson.name}</p>

              <div className={style.lecture}>
                <p className={style.lecturer}>{lesson.lecturer}</p>
                <p className={style.cabinet}>{lesson.cabinet}</p>
              </div>
            </>
          ) : (
            <div className={style.noPair}></div>
          )}
        </div>
      ))}
    </div>
  )
}

export default Pair
