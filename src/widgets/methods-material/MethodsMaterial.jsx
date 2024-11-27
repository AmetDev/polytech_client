'use client'
import styles from '@widgets/methods-material/methods.module.scss'
const firstPath = '/data/anticor/methodsmaterial/Antikorruptsionny-e-mery-.ppt'
const secondPath =
	'/data/anticor/methodsmaterial/Beseda-Korruptsiya-yavlenie-polit-ili-e-kon-(1).docx'
const thirdPath =
	'/data/anticor/methodsmaterial/Metodicheskie-rekomendatsii-po-vospitaniyu-antikorruptsionnogo-mirovozreniya.docx'
const fourthPath =
	'/data/anticor/methodsmaterial/Studenty-protiv-korruptsii.docx'
const fivePath = '/data/anticor/methodsmaterial/Studenty-protiv-korruptsii.docx'
const sixPath =
	'/data/anticor/methodsmaterial/CHto-takoe-korruptsiya-i-kak-eyo-pobedit-.pptx'
const dataObject = [
	{
		index: 1,
		path: firstPath,
		text: 'Антикоррупционные меры',
	},
	{
		index: 2,
		path: secondPath,
		text: 'Беседа Коррупция — явление полит или экон',
	},
	{
		index: 3,
		path: thirdPath,
		text: 'Методические рекомендации по воспитанию антикоррупционного мировозрения',
	},
	{
		index: 4,
		path: fourthPath,
		text: 'Студенты против коррупции',
	},
	{
		index: 5,
		path: fivePath,
		text: 'Что такое коррупция и как её победить',
	},
	{
		index: 6,
		path: sixPath,
		text: 'Что такое коррупция и как её победить',
	},
]

const MethodsMaterial = () => {
	return (
		<ul>
			{dataObject.map(el => {
				return (
					<li key={el.index} className={styles.materialElement}>
						<a href={el.path} target="_blank" rel="norefferer">
							{el.index + '. '}
							{el.text}
						</a>
					</li>
				)
			})}
		</ul>
	)
}

export default MethodsMaterial
