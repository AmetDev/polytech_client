import Plans from '../../../widgets/anti-corruption/plans/Plans'
import Link from 'next/link'

const page = () => {
	return (
		<div>
			<h1>Планы по антикоррупционной политике</h1>
			<Plans />
			<Link className='underline' href='/anticorruption'>
				Вернуться назад
			</Link>
		</div>
	)
}

export default page
