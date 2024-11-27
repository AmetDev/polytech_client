import { headerActions } from '@app/store/header/header.slice'
import { counterSliceActions } from '@app/store/pagesAdmin/UndoRendoSlice'
import { scheduleActions } from '@app/store/schedule/schedule.slice'

const allActions = {
	...headerActions,
	...scheduleActions,
	counterSliceActions,
}

export const useActions = () => {
	return allActions
}
