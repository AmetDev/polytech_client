import Post from '@/features/home/Post'
// import { useGetPostsQuery } from '@app/store/header/api/home/posts.api'
import PostLoading from '@features/home/PostLoading'
import Link from 'next/link'
import style from './Posts.module.scss'

const _posts = data => {
	if (!data) data = [0, 0, 0]
	if (data.length > 3) data = data.slice(-3)

	return data.map(post => {
		if (!post) return <PostLoading />
		return <Post data={post} />
	})
}

const getPosts = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/page/getpostspages`,
		{
			next: { revalidate: 0 },
		}
	)

	const data = await response.json()

	return data
}

const Posts = async () => {
	const data = await getPosts()

	return (
		<section className={style.posts}>
			{_posts(data)}

			<p className={style.viewAll}>
				<Link href={`/posts`}>Смореть больше...</Link>
			</p>
		</section>
	)
}

export default Posts
