'use client'

import { getSchedule } from "@app/store/schedule/schedule.slice"
import { useSelector } from "react-redux"
import style from './Numbering.module.scss'

const Numbering = () => {
  let { numerationOfPairs } = useSelector(getSchedule)

  if (!numerationOfPairs) {
    numerationOfPairs = [1, 2, 3, 4, 5]
  }

  return (
    <div className={style.pairing} column={0}>
      <p className={style.title}>№ пары</p>

      {numerationOfPairs.map((number, i) => (
        <div className={style.pair} key={i} pair={i}>
          <p>{number}</p>
        </div>
      ))}
    </div>
  )
}

export default Numbering
