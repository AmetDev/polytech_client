const { createSlice } = require('@reduxjs/toolkit')


const daysOfWeek = [
  'monday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'monday',
]

const date = new Date()
const week = daysOfWeek[date.getDay()]

const initialState = {
  favourited: {
    group: [],
    lecturer: [],
    cabinet: []
  },
  clicked: null,
  dayOfWeek: week,
  pairsPerRow: 6,
  isSmallDevice: false,
  numerationOfPairs: null
}

const getStorageState = () => {
  window.sessionStorage.setItem('isTakedFavourited', 'true')
  const schedule = JSON.parse(window.localStorage.getItem('schedule'))

  return schedule || initialState.favourited
}

const saveStateToStorage = state => {
  if (!state || !state.favourited) return

  const strState = JSON.stringify(state.favourited)
  localStorage.setItem('schedule', strState)
}

const scheduleSlice = createSlice({
  name: 'schedule',
  initialState,
  reducers: {
    addFavourited: (state, action) => {
      state.favourited[action.payload.key].push(action.payload.value)
      saveStateToStorage(state)
    },

    removeFavourited: (state, action) => {
      const groupIndex = state.favourited.group.indexOf(action.payload)
      const lecturerIndex = state.favourited.lecturer.indexOf(action.payload)
      const cabinetIndex = state.favourited.cabinet.indexOf(action.payload)

      if (groupIndex !== -1) state.favourited.group.splice(groupIndex, 1)
      else if (cabinetIndex !== -1) state.favourited.cabinet.splice(cabinetIndex, 1)
      else if (lecturerIndex !== -1) state.favourited.lecturer.splice(lecturerIndex, 1)

      saveStateToStorage(state)
    },

    loadState: (state, action) => {
      state.favourited = getStorageState()
    },

    setClicked: (state, action) => {
      state.clicked = action.payload
    },

    setDay: (state, action) => {
      state.dayOfWeek = action.payload
    },

    setIsSmallDevice: (state, action) => {
      state.isSmallDevice = action.payload
    },

    setHovered: (state, action) => {
      state.hovered = action.payload
    },

    setNumerationOfPairs: (state, action) => {
      state.numerationOfPairs = action.payload
    }
  },
})

export const scheduleReducer = scheduleSlice.reducer
export const scheduleActions = scheduleSlice.actions

export const getSchedule = (state) => state.schedule
