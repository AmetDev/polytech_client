'use client'
import { selectCount, textValueFunc } from '@app/features/UndoRendoSlice.js'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Popup from 'reactjs-popup'
import {
	MarkItalics,
	RenderAll,
	addCenter,
	addCenterText,
	addLeft,
	addLeftText,
	addLink,
	addLinkElement,
	addList,
	addListNum,
	addNameLink,
	addParagraph,
	addRight,
	addRightText,
	addStrike,
	addStrong,
	addUnderline,
	handleAddHeadingOne,
	handleAddHeadingThree,
	handleAddHeadingTwo,
	handleDeleteTegs,
	handleFocus,
	handleKeyPress,
} from './Buttons.js'
const [heigthTextArea, setHeigthTextArea] = useState(10)
const { italic, textValue, images } = useSelector(selectCount)
const [postImage, setPostImage] = useState({ myFile: '' })
const [finded, setFinded] = useState('')
const [selectedText, setSelectedText] = useState('')
const [publishLink, setPublishLink] = useState('')
const dispatch = useDispatch()
const [image, setImage] = useState(null)
const [netImage, setNewImage] = useState([])
const [isButtonClicked, setIsButtonClicked] = useState(false)
const [URLPage, setURLPage] = useState('')
const [typePage, setTypePage] = useState('')
const searchEvent = e => {}
let tmp = '../../app/testing'

const Panel = () => {
	return (
		<div className='flex flex-col'>
			<div>
				<Counter />
				<Popup trigger={<button> Normal text</button>} position='bottom center'>
					<div>
						<button onClick={() => handleDeleteTegs(textValue, selectedText)}>
							Normal text
						</button>
						<button>
							<h1 onClick={() => handleAddHeadingOne()}>Heading 1</h1>
						</button>
						<button onClick={() => handleAddHeadingTwo()}>
							<h2>Heading 2</h2>
						</button>
						<button onClick={() => handleAddHeadingThree()}>
							<h3>Heading 3</h3>
						</button>
					</div>
				</Popup>
				<Popup
					trigger={
						<button
							onClick={() => setIsButtonClicked(true)}
							style={{ marginLeft: 10 }}
						>
							<div style={{ display: 'flex', alignItems: 'center' }}>
								<AlignLeft /> <Vector />
							</div>
						</button>
					}
					position='bottom center'
				>
					<div
						style={{
							backgroundColor: 'gray',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<button onClick={() => addRight()}>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<AlignRight />
								<span style={{ marginLeft: '10px' }}>в право</span>
							</div>
						</button>
						<button onClick={() => addCenter()}>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<AlignCenter />
								<span style={{ marginLeft: '10px' }}>центр</span>
							</div>
						</button>
						<button onClick={() => addLeft()}>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								<AlignLeft />
								<span style={{ marginLeft: '10px' }}>в лево</span>
							</div>
						</button>
					</div>
				</Popup>
				<Popup
					trigger={<button style={{ marginLeft: 10 }}> в лево(текст)</button>}
					position='bottom center'
				>
					<div>
						<button onClick={() => addRightText()}>right</button>
						<button onClick={() => addCenterText()}>center</button>
						<button onClick={() => addLeftText()}>left</button>
					</div>
				</Popup>
				<button style={{ marginLeft: 10 }} onClick={() => addParagraph()}>
					P
				</button>
				<button style={{ marginLeft: 10 }} onClick={() => addStrong()}>
					<b>B</b>
				</button>
				<button style={{ marginLeft: 10 }} onClick={() => MarkItalics()}>
					<i>I</i>
				</button>
				<button style={{ marginLeft: 10 }} onClick={() => addUnderline()}>
					<u>U</u>
				</button>
				<button style={{ marginLeft: 10 }} onClick={() => addStrike()}>
					<s>S</s>
				</button>
				<button style={{ marginLeft: 10 }} onClick={() => addList()}>
					spisok
				</button>
				<button style={{ marginLeft: 10 }} onClick={() => addListNum()}>
					spisokNum
				</button>
				<Popup
					trigger={<button style={{ marginLeft: 10 }}>LINK</button>}
					position='right center'
				>
					<div>
						<label htmlFor=''>
							<input
								type='text'
								onChange={e => addNameLink(e)}
								placeholder='заголовок ссылки'
							/>
							<input
								onChange={e => addLink(e)}
								type='text'
								placeholder='ссылка'
							/>
							<button onClick={() => addLinkElement()}>+</button>
						</label>
					</div>
				</Popup>
				<Popup
					trigger={
						<button
							style={{
								marginLeft: 10,
								padding: 0,
								border: 'none',
								font: 'inherit',
								color: 'inherit',
								backgroundColor: 'transparent',
							}}
						>
							image
						</button>
					}
					position='right center'
				>
					<div>
						<form onSubmit={submitForm}>
							<input type='text' id='name' ref={nameRef} />
							<input
								id='files'
								ref={filesRef}
								multiple
								type='file'
								className='image-button'
								onChange={handleImageChange}
							/>
							<button type='submit'>Submit</button>
						</form>
					</div>
				</Popup>

				<Popup
					trigger={<button style={{ marginLeft: 30 }}>ADD PAGE</button>}
					position='right center'
				>
					<div>
						<label htmlFor=''>
							<input
								style={{
									backgroundColor: '#000',
								}}
								onChange={e => addPublishLink(e.target.value)}
								type='text'
								placeholder='адрес страницы'
							/>
							<button onClick={() => addPageInServer(textValue, URLPage)}>
								ОПУБЛИКОВАТЬ
							</button>
						</label>
					</div>
				</Popup>
			</div>
			<textarea
				onChange={e => dispatch(textValueFunc(e.target.value))}
				onMouseUp={handleFocus}
				value={textValue}
				onKeyDown={handleKeyPress}
				style={{
					width: '100%',
					height: '200px',
					backgroundColor: 'black',
				}}
				type='text'
				placeholder='Начните писать...'
			/>
			<RenderAll />
		</div>
	)
}

export default Panel
