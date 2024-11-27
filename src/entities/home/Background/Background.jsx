import style from './Background.module.scss'

import bg1 from '@public/assets/images/home/bg_1.png'
import bg2 from '@public/assets/images/home/bg_2.png'
import bg3 from '@public/assets/images/home/bg_3.png'
import bg4 from '@public/assets/images/home/bg_4.png'

import eqation1 from '@public/assets/images/home/eqation_1.png'
import eqation2 from '@public/assets/images/home/eqation_2.png'

function Background() {
  return (
    <div className='h-full overflow-y-hidden absolute top-0 left-0 w-full -z-50'>
      <img className={style.background1} src={bg1.src} alt='background' />
      <img className={style.background2} src={bg2.src} alt='background' />
      <img className={style.background3} src={bg3.src} alt='background' />
      <img className={style.background4} src={bg4.src} alt='background' />

      <img className={style.eqation1} src={eqation1.src} alt='background' />
      <img className={style.eqation2} src={eqation2.src} alt='background' />
    </div>
  )
}

export default Background

