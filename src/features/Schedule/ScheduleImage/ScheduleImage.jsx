'use client'

import Zoom from 'react-medium-image-zoom'
import "react-medium-image-zoom/dist/styles.css"

const ScheduleImage = ({ schedule }) => {
  return (
    <Zoom zoomMargin={5} zoomZindex={1000}>
      <img src={schedule} width={800} height={800} />
    </Zoom>
  )
}

export default ScheduleImage
