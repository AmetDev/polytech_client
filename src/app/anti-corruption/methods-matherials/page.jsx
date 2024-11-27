import MethodsMaterial from '../../../widgets/methods-material/MethodsMaterial'
import Link from 'next/link'

const MethodsMaterials = () => {
	return (
		<div>
			<h1>Методические материалы</h1>
			<MethodsMaterial />
			<Link className='underline ' href='/anticorruption'>
				Вернуться назад
			</Link>
		</div>
	)
}

export default MethodsMaterials
