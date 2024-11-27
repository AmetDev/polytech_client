import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchSchedule = createAsyncThunk(
	'schedule/fetchSchedule',
	async () => {
		const { data } = await axios.get(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/schedule/scheduleone`
		)
		console.log('sdifjsi' + data)
		return data
	}
)
const initialState = {
	schedule: {
		items: [],
		status: 'loading',
	},
}

const scheduleSlice = createSlice({
	name: 'schedule',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchSchedule.pending]: (state, action) => {
			state.schedule.status = 'loading'
		},
		[fetchSchedule.fulfilled]: (state, action) => {
			state.schedule.status = 'loaded'
			state.schedule.items = action.payload
		},
		[fetchSchedule.rejected]: (state, action) => {
			state.schedule.status = 'error'
			state.schedule.items = []
		},
	},
})
export const scheduleReducer = scheduleSlice.reducer
