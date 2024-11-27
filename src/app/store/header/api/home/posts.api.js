import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const straggeredBaseQuery = retry(
	fetchBaseQuery({
		baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}/page/getpostspages`,
	}),
	{
		maxRetries: 5,
	}
)

export const postsApi = createApi({
	reducerPath: 'home/posts',
	baseQuery: straggeredBaseQuery,
	endpoints: builder => ({
		getPosts: builder.query({
			query: () => '/',
		}),
	}),
})

export const { useGetPostsQuery } = postsApi
