'use client'

import imagePicture from '@public/assets/icons/adminicons/picture2.png'
import axios from 'axios'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import MyComponent from './[Post]/Loader'
import styles from './style.module.scss'

const Posts = () => {
	// const dataOurCollege2 = useSelector(
	// 	state => state.counter.present.dataOurCollege
	// )
	//const state = useSelector(state => state.counter)
	let [increment, setIncrement] = useState(0)
	const [data, setData] = useState([])
	const [picture, setPicture] = useState('')

	useEffect(() => {
		const someAsyncFunc = async () => {
			try {
				document.body.scrollTop = 0
				const somedata = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/page/getpagestitle`,
					{ params: { typePage: 'post', increment } }
				)
				setData([...data, ...somedata.data])

				//	console.log(data)
				//	dispatch(setDataOurCollege([...data]))
				//	console.log('loading', somedata)
			} catch (error) {
				console.log(error)
			}
			//	console.log('state', dataOurCollege2)
		}
		someAsyncFunc()
	}, [increment])

	return (
		<section>
			<div className={styles.wrapperPosts}>
				{data.length == 0 && <MyComponent />}
				{data.length !== 0 &&
					data.map(el => {
						if (el.pageImage != '') {
							var srcValue = el.pageImage
						} else {
							srcValue = imagePicture.src
						}
						if (el.pageTypePublish && el.pageType == 'post') {
							return (
								<div
									style={{
										display: 'flex',
										justifyContent: 'center',
										margin: 10,
										textAlign: 'center',
									}}
									key={el._id}
								>
									<div>
										<div className={styles.postImgTitleWrapper}>
											<Link
												className={styles.post__link}
												href={`/posts/${el.pageUrl}`}
											>
												<div className={styles.post__image}>
													<img
														src={`${process.env.NEXT_PUBLIC_SERVER_URL}${srcValue}`}
														alt='Picture of the author'
													/>
												</div>

												{<p className={styles.post_title}>{el.pageTitle}</p>}
											</Link>
											{/* <div className={styles.post_date}>{el.pageDate}</div> */}
										</div>
									</div>
								</div>
							)
						}
					})}
			</div>
			<button
				onClick={() => {
					setIncrement((increment += 3))
					console.log(increment)
				}}
				className={styles.btn}
			>
				Загрузить еще
			</button>
		</section>
	)
}

export default Posts
