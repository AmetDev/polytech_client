import EyeImg from '@public/assets/icons/eye.svg'
import axios from 'axios'
import { Interweave } from 'interweave'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import style from './page.module.scss'

export default function Post({ params }) {
	const [data, setData] = useState({})
	const [allData, setAllData] = useState([])
	const someData = useSelector(state => state.counter)
	const router = useRouter()

	const handleClick = () => {
		router.back()
	}

	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				const somedata = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/page/getpagecontent`,
					{ params: { postId: params.postId } }
				)
				console.log('somedata.data', somedata.data)

				let result = somedata.data // Создаем новую переменную result и присваиваем ей исходный текст

				function updateImageSource(text) {
					const link = process.env.NEXT_PUBLIC_SERVER_URL
					return text.replace(/src=\/uploads/g, `src=${link}/uploads`)
				}
				function insertLocalhostToLinks(html) {
					const regex = /href=\/uploads/g
					const replacement = `href=${process.env.NEXT_PUBLIC_SERVER_URL}/uploads`
					return html.replace(regex, replacement)
				}
				function updateLinks(htmlContent) {
					const updatedContent = htmlContent.replace(
						/\/our-colleage\//g,
						`${process.env.NEXT_PUBLIC_FRONTEND_URL}/our-colleage/`
					)
					return updatedContent
				}

				const result1 = updateImageSource(somedata.data.pageContent)
				const result2 = insertLocalhostToLinks(result1)
				console.log(result2)
				const updatedHtml = updateLinks(result2)
				setData({ pageContent: updatedHtml })
				document.body.scrollTop = 0
			} catch (error) {
				console.log(error)
			}
		}
		someAsyncFunc()
	}, [])

	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				const mainData = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/page/get`,
					{ params: { url: params.postId } }
				)

				setAllData(mainData.data)
			} catch (error) {
				console.log(error)
			}
		}
		someAsyncFunc()
	}, [])

	return (
		<main
			className={style.post__main}
			style={{
				display: 'flex',
				justifyItems: 'center',
				flexDirection: 'column',
			}}
		>
			<Interweave content={data.pageContent} />

			<div className={style.post__views}>
				<span>
					<EyeImg />
					{allData.viewsCount}
				</span>
			</div>

			<div style={{ marginTop: 50 }}>
				<button
					style={{
						width: '100%',
						margin: '0 auto',
						display: 'block',
						backgroundColor: '#131313',
						borderRadius: 10,
						padding: 20,
						color: '#FFF',
						fontSize: 24,
					}}
					onClick={handleClick}
				>
					Вернуться назад
				</button>
			</div>
		</main>
	)
}
