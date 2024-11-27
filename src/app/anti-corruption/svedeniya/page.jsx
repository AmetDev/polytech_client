import SvedeniyaRender from '../../../widgets/anti-corruption/svedeniya/Svedeniya'
import Link from 'next/link'

const page = () => {
	return (
		<div>
			<h1>
				Сведения о доходах, расходах, об имуществе и обязательствах
				имущественного характера
			</h1>
			<SvedeniyaRender />
			<Link className='underline' href='/anticorruption'>
				Вернуться назад
			</Link>
		</div>
	)
}

export default page
