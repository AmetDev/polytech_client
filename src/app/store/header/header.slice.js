const { createSlice } = require('@reduxjs/toolkit')

const initialState = {
  hovered: [],
  closing: [],
  isOpened: false,
}

const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    addHovered: (state, action) => {
      state.hovered.push(action.payload)
      // if (state.hovered.length > 1) state.hovered = [state.hovered[state.hovered.length - 1]]
    },

    removeHovered: (state, action) => {
      const index = state.hovered.indexOf(action.payload)

      if (index === -1) return
      state.hovered.splice(index, 1)

      // if (state.hovered.length > 1) state.hovered = [state.hovered[state.hovered.length - 1]]

      // const closingIndex = state.closing.indexOf(action.payload)
      // if (closingIndex !== -1) return
      // state.closing.push(action.payload)
    },

    addClosing: (state, action) => {
      const index = state.closing.indexOf(action.payload)
      if (index !== -1) return

      state.closing.push(action.payload)
    },

    removeClosing: (state, action) => {
      const filtered = state.closing.filter((id) => id !== action.payload)
      state.closing = filtered
    },

    setIsOpenedMenu: (state, action) => {
      state.isOpened = action.payload
    },
  },
})

export const headerReducer = headerSlice.reducer
export const headerActions = headerSlice.actions

export const getHeader = (state) => state.header
