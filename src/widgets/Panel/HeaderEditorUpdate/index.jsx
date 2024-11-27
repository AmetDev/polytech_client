import axios from 'axios'
import Cookies from 'js-cookie'
import { useState } from 'react'
const EditableCell = ({ value, onChange }) => {
	const [editing, setEditing] = useState(false)

	const handleDoubleClick = () => {
		setEditing(true)
	}

	const handleChange = e => {
		onChange(e.target.value)
	}

	const handleBlur = () => {
		setEditing(false)
	}

	if (editing) {
		return (
			<td>
				<input
					style={{
						backgroundColor: '#000',
						border: '1px solid white',
						padding: '8px',
					}}
					type='text'
					value={value}
					onChange={handleChange}
					onBlur={handleBlur}
					autoFocus
				/>
			</td>
		)
	}

	return (
		<td
			style={{ border: '1px solid white', padding: '8px' }}
			onDoubleClick={handleDoubleClick}
		>
			{value}
		</td>
	)
}

const TableRow = ({ link, onUpdateLink, onDeleteLink }) => {
	const handleChange = (newValue, field) => {
		onUpdateLink({ ...link, [field]: newValue })
	}

	return (
		<tr>
			<EditableCell
				value={link.text}
				onChange={value => handleChange(value, 'text')}
			/>
			<EditableCell
				value={link.url}
				onChange={value => handleChange(value, 'url')}
			/>
			<td style={{ border: '1px solid white', padding: '8px' }}>
				<button onClick={() => onDeleteLink(link._id)}>Удалить</button>
			</td>
		</tr>
	)
}

const Table = ({
	links,
	onUpdateLink,
	onDeleteLink,
	onAddLink,
	onDeleteAllRows,
	onSave,
}) => (
	<table style={{ borderCollapse: 'collapse', width: '100%' }}>
		<thead>
			<tr>
				<th style={{ border: '1px solid white', padding: '8px' }}>
					Текст ссылки
				</th>
				<th style={{ border: '1px solid white', padding: '8px' }}>URL</th>
				<th style={{ border: '1px solid white', padding: '8px' }}></th>
			</tr>
		</thead>
		<tbody>
			{links.map(link => (
				<TableRow
					key={link._id}
					link={link}
					onUpdateLink={onUpdateLink}
					onDeleteLink={onDeleteLink}
				/>
			))}
		</tbody>
		<tfoot>
			<tr>
				<td colSpan='3' style={{ textAlign: 'center' }}>
					<button style={{ marginRight: 20 }} onClick={() => onAddLink(links)}>
						Добавить строку
					</button>
					<button onClick={onSave}>Сохранить</button>
					<button style={{ marginLeft: 20 }} onClick={onDeleteAllRows}>
						Удалить полностью
					</button>
				</td>
			</tr>
		</tfoot>
	</table>
)

const HeaderEditorUpdate = ({ data }) => {
	const [links, setLinks] = useState([...data.data.nestingLink])

	const updateLink = updatedLink => {
		const updatedLinks = links.map(link =>
			link._id === updatedLink._id ? updatedLink : link
		)
		setLinks(updatedLinks)
	}

	const deleteLink = linkId => {
		const updatedLinks = links.filter(link => link._id !== linkId)
		setLinks(updatedLinks)
	}

	const addLink = parentLinks => {
		const newLink = {
			_id: Math.random().toString(36).substr(2, 9), // Generate a random ID
			text: '',
			url: '',
		}
		const updatedLinks = [...parentLinks, newLink]
		setLinks(updatedLinks)
	}

	const deleteAllRows = () => {
		//	setLinks([])
		const deleteFeatures = async () => {
			try {
        alert("Вы действительно хотите удалить раздел?")
				console.log(data.data.resultLink)
        const token = await Cookies.get('token')
				const response = await axios.delete(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/linker/linksheader`,
	{headers:  {Authorization: `Bearer ${token}`},  params: { url: data.data.resultLink.url } } 

				)
				console.log(response.data.message)
				alert(response.data.message)
			} catch (error) {
				alert(error)
			}
		}
		deleteFeatures()
	}

	const saveTableData = async () => {
		try {
      console.log('true')
			// Отправляем обновленные данные на сервер
			// const response = await axios.post('/api/saveTableData', { links })
			// console.log(response.data)
			const newObject = {
				...data.data.resultLink,
				idUrl: data.data.resultLink._id, // Переименовываем _id в idUrl
				links: links, // Предположим, что переменная links содержит нужные ссылки
			}
			delete newObject._id // Удаляем старое поле _id
      const token = await Cookies.get('token')
			const response = await axios.patch(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/linker/linksheader`,
				{ newObject }, {headers: { "Access-Control-Allow-Origin": "*", Authorization: `Bearer ${token}` }}
			)
			console.log(response)
		} catch (error) {
			console.error('Error while saving table data:', error)
		}
	}
  const token = async () => {
    try {
      return await Cookies.get('token') 
    } catch (error) {
      return error
    }
  }
  const config = {headers: { "Access-Control-Allow-Origin": "*", Authorization: `Bearer ${token}` }}

	return (
		<div>
			<h2>Родительская табличка</h2>
			<Table
				links={[data.data.resultLink]}
				onUpdateLink={updateLink}
				onDeleteLink={deleteLink}
				onAddLink={addLink}
			/>

			<h2>Дочерния табличка</h2>
			<Table
				links={links}
				onUpdateLink={updateLink}
				onDeleteLink={deleteLink}
				onAddLink={addLink}
				onDeleteAllRows={deleteAllRows}
				onSave={saveTableData}
			/>
		</div>
	)
}

export default HeaderEditorUpdate
