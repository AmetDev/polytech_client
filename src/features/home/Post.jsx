import Link from 'next/link'
// import { useState } from 'react'
import style from './Post.module.scss'
const Post = ({ data }) => {
	const { pageTitle, pageUrl, pageImage, pageDate } = data
	console.log('test')
	console.log('pageImage', pageImage)

	let shortText =
		pageTitle.length > 25 ? pageTitle.slice(0, 20) + '...' : pageTitle

	return (
		<Link href={`/posts/${pageUrl}`} className={style.post}>
			<img
				className={style.image}
				fill={true}
				src={`${process.env.NEXT_PUBLIC_SERVER_URL}${pageImage}`}
				alt='post photo'
			/>
			{/* <Interweave content={pageImage} /> */}
			<div className={style.info}>
				<h2 className={style.title}>{pageTitle}</h2>
				{/* <span className={style.description}>{pageDate}</span> */}
			</div>
		</Link>
	)
}

export default Post
