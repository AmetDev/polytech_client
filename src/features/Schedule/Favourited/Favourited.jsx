'use client'

import { useDispatch, useSelector } from 'react-redux'
import style from './Favourited.module.scss'
import corpusStyle from '@widgets/Schedule/Corpus/Corpus.module.scss'
import { getSchedule } from '@app/store/schedule/schedule.slice'
import Pairing from '@entities/Schedule/Pairing/Pairing'
import FavouritedPair from '@entities/Schedule/FavouritedPair/FavouritedPair'
import { useActions } from '@app/hooks/useActions'
import { useEffect, useRef } from 'react'
import DarkButton from '@shared/buttons/DarkButton/DarkButton'



const Favourited = ({ data }) => {
  const scheduleState = useSelector(getSchedule)
  const dispatch = useDispatch()
  const clicked = scheduleState.clicked
  const dayOfWeek = scheduleState.dayOfWeek
  const { removeFavourited } = useActions()
  const scheduleRef = useRef(null)
  const {
    group: groups,
    lecturer: lecturers,
    cabinet: cabinets,
  } = scheduleState.favourited
  const _pairs = [...data.first[dayOfWeek][1][1].keys()].map((key) => key + 1)
  const pairs =
    dayOfWeek === 'monday' ? [0, ..._pairs.slice(0, -1)] : _pairs

  // const groupsPairs = [].concat(
  //   ...[]
  //     .concat(...Object.values(data))
  // )
  const groupsPairs = [].concat(...Object.values(data).map(corpus => corpus[dayOfWeek]))

  const favouritedGroupPairs = groupsPairs.filter(([groupName]) =>
    groups.includes(groupName)
  )

  const favouritedLecturerPairs = lecturers.map((lecturer) => {
    const lecturerPair = [lecturer, []]

    groupsPairs.map(group => {
      group[1].map((pair, index) => {
        if (!(pair.lecturer === lecturer)) return

        const customPair = {...pair, lecturer: group[0]}
        lecturerPair[1][index] = customPair
      })
    })

    lecturerPair[1] = pairs.map(number => lecturerPair[1][number] || {})
    return lecturerPair
  })

  const favouritedCabinetPairs = cabinets.map((cabinet) => {
    const cabinetPair = [cabinet, []]

    groupsPairs.map(group => {
      group[1].map((pair, index) => {
        if (!(pair.cabinet == cabinet)) return

        const customPair = {...pair, cabinet: group[0]}
        cabinetPair[1][index] = customPair
      })
    })

    cabinetPair[1] = pairs.map(number => cabinetPair[1][number] || {})
    return cabinetPair
  })

  const favouritedPairs = favouritedGroupPairs.concat(favouritedLecturerPairs, favouritedCabinetPairs)




  const handleAddFavouritedClick = (e) => {
    if (!clicked) return
    const value = clicked.textContent

    dispatch(removeFavourited(value))
    scheduleRef.current.querySelector('.corpus__add-favourite-button')?.classList.add('hidden')
  }

  useEffect(() => {
    const handleOutSideClick = (event) => {
      if (!scheduleRef.current) return

      if (!scheduleRef.current?.contains(event.target)) {
        console.log(scheduleRef)
        scheduleRef.current.querySelector('.corpus__add-favourite-button')?.classList.add('hidden')
      }
    }

    window.addEventListener('mousedown', handleOutSideClick)

    return () => {
      window.removeEventListener('mousedown', handleOutSideClick)
    }
  }, [])


  if (!favouritedPairs.length) return

  return (
    <section className={style.favourited}>
      <h2 className={style.title}>Избранное</h2>

      <div ref={scheduleRef}>
        <DarkButton
          text='Удалить из избранного'
          classNames='hidden corpus__add-favourite-button'
          onClick={handleAddFavouritedClick}
        />

        {favouritedPairs.map((_, index, array) => {
          if (!array[index * 6]) return

          return (
            <div key={index} className={corpusStyle.line}>
              <Pairing numbers={pairs} />

              {array
                .slice(index * 6, (index + 1) * 6)
                .map(([groupName, schedule], index) => (
                  <FavouritedPair
                    key={index}
                    group={groupName}
                    schedule={schedule}
                  />
                ))}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Favourited
