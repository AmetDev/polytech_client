import styles from './Plans.module.scss'
import { plansData } from './plansData.js'
const Plans = () => {
	return (
		<ol>
			{plansData.map(el => {
				return (
					<li className={styles.root} key={el.index}>
						<a target='_blank' rel='norefferer' href={el.path}>
							{el.index + '. '}
							{el.name}
						</a>
					</li>
				)
			})}
		</ol>
	)
}

export default Plans
