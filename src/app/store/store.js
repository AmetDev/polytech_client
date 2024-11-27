'use client'
import counterSlice from '@app/features/UndoRendoSlice'
import { configureStore } from '@reduxjs/toolkit'
import undoable from 'redux-undo'
import { postsApi } from './header/api/home/posts.api'
// add-posts-fixed-auth-add-schedule
import { headerReducer } from './header/header.slice'
import { scheduleReducer } from './schedule/scheduleSlice.js'
export const makeStore = () => {
	return configureStore({
		reducer: {
			header: headerReducer,
			schedule: scheduleReducer,
			[postsApi.reducerPath]: postsApi.reducer,
			counter: undoable(counterSlice),
			// if simple name: use one word. if more one word: [someSlice.name]: someSlice.reducer
		},
		middleware: getDefaultMiddleware =>
			getDefaultMiddleware().concat(postsApi.middleware),
	})
}
