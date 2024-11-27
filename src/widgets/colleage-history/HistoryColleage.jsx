import colleage from '@public/assets/images/colleage-history/colleage.jpg'
import style from './ColleageHistory.module.scss'

const HistoryColleage = () => {
	return (
		<section className={style.colleage__history}>
			<img src={colleage} alt='colleage' width={953} height={568} />

			<p>
				Исследуя материалы архивного фонда Государственного казенного учреждения
				Республики Крым «Государственный архив Республики Крым» выяснилось, что
				история Симферопольского политехнического колледжа имеет очень давние
				традиции. «Московское Товарищество паровой фабрики шоколадных конфет и
				чайных печений» Эйнем купило прекрасное, живописное место в лощине между
				двух гор, вдоль берега реки Салгир и в 1884 году построило конфетную
				фабрику по улице Воронцовской, 14.
			</p>
		</section>
	)
}

export default HistoryColleage
