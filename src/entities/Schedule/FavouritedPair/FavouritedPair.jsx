'use client'

import { useActions } from '@app/hooks/useActions'
import { useFavouritedButton } from '@app/hooks/useFavouriteButton'
import { getSchedule } from '@app/store/schedule/schedule.slice'
import style from '@entities/Schedule/Pair/Pair.module.scss'
import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'


const FavouritedPair = ({ group, schedule }) => {
  const dispatch = useDispatch()

  const scheduleState = useSelector(getSchedule)
  const clicked = scheduleState.clicked
  const { setClicked } = useActions()

  const pairRef = useRef(null)
  let favouriteButton

  useEffect(() => {
    favouriteButton = useFavouritedButton(pairRef.current)
  }, [scheduleState])

  const getClickHandler = () => {
    return (e) => {
      const element = e.currentTarget

      if (!favouriteButton) return
      if (clicked && clicked !== element) {
        favouriteButton.classList.add('hidden')
      }

      favouriteButton.style.left =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft +
        'px'
      favouriteButton.style.top =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop +
        'px'

      favouriteButton.classList.remove('hidden')
      dispatch(setClicked(element))
    }
  }

  const handleGroupClick = getClickHandler()

  return (
    <div className={style.pair} ref={pairRef}>
      <p
        className={style.title}
        onClick={handleGroupClick}
        onContextMenu={(e) => {
          e.preventDefault()
          handleGroupClick(e)
        }}
      >
        {group}
      </p>

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

export default FavouritedPair
