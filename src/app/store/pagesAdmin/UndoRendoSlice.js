import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	value: 0,
	italic: '',
	textValue: '',
	images: '',
	images1: '',
	dataOurCollege: [],
}

export const counterSlice = createSlice({
	name: 'counter',
	initialState,

	reducers: {
		setDataOurCollege: (state, action) => {
			state.dataOurCollege = action.payload
		},
		setImages1: (state, action) => {
			state.images1 = action.payload
		},
		setImages: (state, action) => {
			state.images = action.payload
		},
		textValueFunc: (state, action) => {
			state.textValue = action.payload
		},
		italics: (state, action) => {
			state.italic = action.payload
		},
		increment: state => {
			state.value += 1
		},
		decrement: state => {
			state.value -= 1
		},
		incrementByAmount: (state, action) => {
			state.value += action.payload
		},
	},
})

export const {
	setImages,
	setImages1,
	textValueFunc,
	italics,
	increment,
	decrement,
	incrementByAmount,
	setDataOurCollege,
} = counterSlice.actions

export default counterSlice.reducer
