import { useEffect } from 'react'

/*
	Personal Hook
	Hide element when click outside
*/

export const useOutside = (element, callback) => {
	const handleClickOutside = (event) => {
		console.log('outsie')
		if (element && !element.contains(event.target)) {
			callback()
		}
	}

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	})
}

