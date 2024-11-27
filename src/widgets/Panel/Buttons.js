import { useRef } from 'react'
export const RenderAll = textValue => {
	console.log(textValue)
	return <Interweave content={textValue} />
}

export function convertToBase64(file) {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader()
		fileReader.readAsDataURL(file)
		fileReader.onload = () => {
			resolve(fileReader.result)
		}
		fileReader.onerror = error => {
			reject(error)
		}
	})
}
export const handleAddHeadingThree = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString = '<h3>' + selectedText + '</h3>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}
export const handleAddHeadingTwo = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString = '<h2>' + selectedText + '</h2>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}
export const addParagraph = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString = '<p>' + selectedText + '</p>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}
export const addStrong = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString = '<b>' + selectedText + '</b>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}
export const addUnderline = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString = '<u>' + selectedText + '</u>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}

export const addListNum = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)

	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		console.log('LI!!!', selectedText)

		const newSelectedArr = selectedText.split('<br/>')
		console.log('new arr', newSelectedArr)

		if (initium_index !== -1) {
			// Create an array of React elements
			const elements = newSelectedArr
				.map((el, index) => `<li>${el}</li>`)
				.join('')

			console.log('ELEMENTS', elements)
			// Save JSX elements directly
			const NewString = () => {
				return (
					textValue.substring(0, initium_index) +
					'<ol>' +
					elements +
					'</ol>' +
					textValue.substring(finis_index + 1)
				)
			}
			dispatch(textValueFunc(NewString()))
		} else {
			console.log('substring not found')
		}
	}
}
export const addList = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)

	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		console.log('LI!!!', selectedText)

		const newSelectedArr = selectedText.split('<br/>')
		console.log('new arr', newSelectedArr)

		if (initium_index !== -1) {
			// Create an array of React elements
			const elements = newSelectedArr
				.map((el, index) => `<li>${el}</li>`)
				.join('')

			console.log('ELEMENTS', elements)
			// Save JSX elements directly
			const NewString = () => {
				return (
					textValue.substring(0, initium_index) +
					'<ul>' +
					elements +
					'</ul>' +
					textValue.substring(finis_index + 1)
				)
			}
			dispatch(textValueFunc(NewString()))
		} else {
			console.log('substring not found')
		}
	}
}
let linkHref = ''
let linkName = ''
export const addLink = e => {
	console.log('addLink', e.target.value)
	linkHref = e.target.value
}
export const addNameLink = e => {
	console.log('addNameLink', e.target.value)
	linkName = e.target.value
}

export const addLinkElement = () => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString = `<a href=${linkHref}>` + linkName + '</a>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}
export const addStrike = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString = '<s>' + selectedText + '</s>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}
export const handleKeyPress = e => {
	if (e.key === 'Enter') {
		dispatch(textValueFunc(textValue + '<br/>'))
		// Выводим значение напрямую вместо добавления его в массив
		console.log('enter')
		// Очищаем поле ввода после нажатия Enter
	}
	if (e.keyCode == 32) {
		// dispatch(textValueFunc(textValue + ' ')) //default add space
		console.log('spacebar')
	}
}
export const handleAddHeadingOne = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString = '<h1>' + selectedText + '</h1>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}
export const addCenterText = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString =
				'<div style="text-align:center">' + selectedText + '</div>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}
export const addLeftText = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString =
				'<div style="text-align:left">' + selectedText + '</div>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}
export const addRightText = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString =
				'<div style="text-align:right">' + selectedText + '</div>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}

export const addRight = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString =
				'<div style="margin-left: 90%">' + selectedText + '</div>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}
export const addLeft = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString =
				'<div style="margin-right: 90%">' + selectedText + '</div>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}
export const addCenter = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString =
				'<div style=" margin-left: 40%">' + selectedText + '</div>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}
export const MarkItalics = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		if (initium_index !== -1) {
			let newSubString = '<i>' + selectedText + '</i>'
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}

export const handleFocus = () => {
	const activeTextarea = document.activeElement
	const selection = activeTextarea.value.substring(
		activeTextarea.selectionStart,
		activeTextarea.selectionEnd
	)
	setSelectedText(selection)
	console.log(selection)
}

export const wrapWithTag = (textValue, selectedText) => {
	textValue.map(el => {
		console.log(el)
		if (el == selectedText) {
			el = `<h1>${el}</h1>`
		}
	})
}
export const MarkedElement = ({ italic }) => {
	return <Markup content={italic} />
}

export const handleDeleteTegs = (textValue, selectedText) => {
	const isExtend = textValue.includes(selectedText)
	console.log(isExtend)
	if (isExtend) {
		let initium_index = textValue.indexOf(selectedText)

		// Adipiscens index verbi finis
		let finis_index = initium_index + selectedText.length - 1

		console.log('firstIndex', initium_index)
		console.log('lastIndex', finis_index)
		const deleteHTMLTegs = word => {
			return word.replace(/<[^>]*>/g, '')
		}
		let newSubString = deleteHTMLTegs(selectedText)
		if (initium_index !== -1) {
			let newString =
				textValue.substring(0, initium_index) +
				newSubString +
				textValue.substring(finis_index + 1)
			console.log(newString)
			dispatch(textValueFunc(newString))
		} else {
			console.log('substring not found')
		}
	}
}
export const createPost = async newImage => {
	try {
		await axios.post('http://localhost:5000/uploads', newImage, {
			headers: { 'Access-Control-Allow-Origin': '*' },
		})
	} catch (error) {
		console.log(error)
	}
}
export const getImages = async () => {
	try {
		const info = await axios.get('http://localhost:5000/images', {
			headers: { 'Access-Control-Allow-Origin': '*' },
		})
		return info.data
	} catch (error) {
		console.log('error', error)
	}
}
export const addImagesArr = textValue => {
	const list = netImage.map(el => {
		return `<img src=${el.myFile} alt="name" />`
	})
	console.log('LIST', list)
	dispatch(textValueFunc(textValue + `${list}`))
}
export const handleImageChange = async e => {
	const file = e.target.files[0]
	const reader = new FileReader()
	const base64 = await convertToBase64(file)
	console.log(base64)
	setPostImage({ ...postImage, myFile: base64 })

	reader.onloadend = () => {
		setImage(reader.result)
		dispatch(setImages([reader.result, ...images]))
	}

	if (file) {
		reader.readAsDataURL(file)
	}
}

const nameRef = useRef(null)
const filesRef = useRef(null)
let firstData = ''
export const submitForm = e => {
	e.preventDefault()
	createPost(postImage)
	const newImagesArr = getImages()
	firstData = newImagesArr.then(data => setNewImage(data))
	console.log('Uploaded')

	console.log('netImage', netImage)
	addImagesArr()
}
export const addPublishLink = e => {
	setPublishLink(e)
}
const {
	register,
	handleSubmit,
	formState: { errors },
} = useForm()
export const onSubmit = data => {
	setTypePage(data.TypePage)
	setURLPage(data.URLPage)
}
console.log(typePage)
console.log(URLPage)

export const addPageInServer = async (textValue, URLPage) => {
	let newUrl = ''
	const someDate = await axios.put('http://localhost:5000/addpage', null, {
		params: { textValue, URLPage },
	})
	if (someDate.status == 208) {
		console.log(someDate.data.message)
	}
	if (someDate.status == 200) {
		newUrl = someDate.data.pageUrl
		console.log(someDate.data.pageContent)
		console.log(someDate.data.pageUrl)
	}
}
