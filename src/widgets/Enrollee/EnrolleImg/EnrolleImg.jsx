import photo_2024 from '@public/assets/icons/photo_20240714.jpg'
import Link from 'next/link'
import style2 from '../Enrollee.module.scss'
import style from './EnrolleImg.module.scss'
import so from './site_CO-1.png'
import some from './some.jpg'
const EnrolleImg = () => {
	return (
		<div className={style.wrapperEnrolleIMGWrapper}>
			<img src={photo_2024.src} alt='kk' />
			<section className={style2.enrollee__order__link}>
				<Link href='/our-colleage/order-of-admission'>Приказ о зачислении</Link>
				<Link href='/admission'>Рейтинговый список на зачисление</Link>
			</section>
		</div>
	)
}

export default EnrolleImg
