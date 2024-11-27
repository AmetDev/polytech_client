import styles from './Svedeniya.module.scss'
import { svedeniyaData } from './svedeniyaData.js'
const SvedeniyaRender = () => {
	return (
		<ol>
			{svedeniyaData.map(el => {
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

export default SvedeniyaRender
