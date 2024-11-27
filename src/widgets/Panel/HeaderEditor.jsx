import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import HeaderEditorUpdate from './HeaderEditorUpdate'
import Cookies from 'js-cookie'

const HeaderEditor = () => {
	const [url, setUrl] = useState('')
	const [dataUrl, setDataUrl] = useState('')
	const [globalObject, setGlobalObject] = useState({})
	const [isClicked, setIsClicked] = useState(false)
	const [rowData, setRowData] = useState({
		column1: '/link',
		column2: 'textlink',
	})
	const [tableData, setTableData] = useState([
		{ id: 1, column1: '/link', column2: 'text' },
	])
	const urlInputRef = useRef(null)

	useEffect(() => {
		if (urlInputRef.current) {
			urlInputRef.current.focus()
		}
	}, [])

	const onChangeUrl = e => {
		setUrl(e.target.value)
	}

	const Clicked = async url => {
		try {
			const somedata = await axios.get(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/linker/linksheader`,
				{
					params: { url },
				}
			)
			//console.log(somedat
			setDataUrl(somedata)
		} catch (error) {
			alert(error)
			//console.log(error)
		}
	}

	const handleSubmit = e => {
		e.preventDefault()
		Clicked(url)
	}

	const handleLogData = () => {
		//console.log('rowData:', rowData)
		const { column1, column2 } = rowData
		const url = column1
		const text = column2
		const newArr = tableData.map(item => ({
			url: item.column1,
			text: item.column2,
		}))
		//console.log('newobject', { url, text, isCategory: true, links: newArr })
		const sendData = async obj => {
			try {
        const token = await Cookies.get('token')
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/linker/linksheader`,
          {
            ...obj,
          }, 
          {headers:  {Authorization: `Bearer ${token}`} }

        )
        alert(response.data.message)
			} catch (error) {
				console.log(error)
				alert(error.response.data.message)
			}
		}
		sendData({ url, text, isCategory: true, links: newArr })
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<label htmlFor=''>Вставьте url для поиска</label>
				<input
					onChange={onChangeUrl}
					style={{ backgroundColor: '#000' }}
					type='text'
					name=''
					id=''
					ref={urlInputRef}
				/>
				<button
					type='submit'
					style={{
						backgroundColor: '#0066ff',
						padding: '5px 10px 5px 10px',
						marginLeft: 10,
						borderRadius: 10,
					}}
				>
					поиск
				</button>
			</form>
			<button
				onClick={() => setIsClicked(true)}
				style={{
					backgroundColor: '#0066ff',
					padding: '5px 10px 5px 10px',
					marginLeft: 10,
					borderRadius: 10,
				}}
			>
				Создать новый раздел
			</button>

			{dataUrl && <HeaderEditorUpdate data={dataUrl} />}
			{isClicked && (
				<section>
					<EditableTableSingleRow rowData={rowData} setRowData={setRowData} />
					<br />
					<EditableTable setTableData={setTableData} />
					<button
						style={{
							backgroundColor: '#0066ff',
							padding: '5px 10px',
							marginLeft: 10,
							borderRadius: 10,
							marginBottom: 10,
						}}
						onClick={handleLogData}
					>
						загрузить новый раздел
					</button>
				</section>
			)}
		</div>
	)
}

const EditableTableSingleRow = ({ rowData, setRowData }) => {
	const handleCellEdit = (column, value) => {
		if (column === 'column1') {
			if (value.startsWith('/') && value === value.toLowerCase()) {
				setRowData(prevData => ({ ...prevData, [column]: value }))
			} else {
				alert(
					'URL для раздела должен начинаться с "/" и содержать только строчные буквы'
				)
			}
		} else {
			setRowData(prevData => ({ ...prevData, [column]: value }))
		}
	}

	return (
		<div>
			<table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
				<thead>
					<tr>
						<th style={{ border: '1px solid black', padding: '8px' }}>
							URL для раздела
						</th>
						<th style={{ border: '1px solid black', padding: '8px' }}>
							Название для раздела
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td style={{ border: '1px solid black', padding: '8px' }}>
							<input
								type='text'
								style={{
									backgroundColor: '#000',
									border: 'none',
									color: 'white',
									width: '100%',
								}}
								value={rowData.column1}
								onChange={e => handleCellEdit('column1', e.target.value)}
							/>
						</td>
						<td style={{ border: '1px solid black', padding: '8px' }}>
							<input
								style={{
									backgroundColor: '#000',
									border: 'none',
									color: 'white',
									width: '100%',
								}}
								type='text'
								value={rowData.column2}
								onChange={e => handleCellEdit('column2', e.target.value)}
							/>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	)
}

const EditableTable = ({ setTableData }) => {
	const [tableData, setLocalTableData] = useState([
		{ id: 1, column1: '/link', column2: 'text' },
	])

	const handleCellEdit = (id, column, value) => {
		if (column === 'column1') {
			if (value.startsWith('/') && value === value.toLowerCase()) {
				const updatedData = tableData.map(row => {
					if (row.id === id) {
						return { ...row, [column]: value }
					}
					return row
				})
				setLocalTableData(updatedData)
				setTableData(updatedData)
			} else {
				alert('URL должен начинаться с "/" и содержать только строчные буквы')
			}
		} else {
			const updatedData = tableData.map(row => {
				if (row.id === id) {
					return { ...row, [column]: value }
				}
				return row
			})
			setLocalTableData(updatedData)
			setTableData(updatedData)
		}
	}

	const handleAddRow = () => {
		const id = tableData.length + 1
		setLocalTableData([...tableData, { id, column1: '', column2: '' }])
		setTableData([...tableData, { id, column1: '', column2: '' }])
	}

	const handleRemoveRow = id => {
		const updatedData = tableData.filter(row => row.id !== id)
		setLocalTableData(updatedData)
		setTableData(updatedData)
	}

	return (
		<div>
			<button onClick={handleAddRow}>Add Row</button>
			<table style={{ borderCollapse: 'collapse', border: '1px solid black' }}>
				<thead>
					<tr>
						<th style={{ border: '1px solid black', padding: '8px' }}>URL</th>
						<th style={{ border: '1px solid black', padding: '8px' }}>TEXT</th>
						<th style={{ border: '1px solid black', padding: '8px' }}>
							Action
						</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map(row => (
						<tr key={row.id}>
							<td style={{ border: '1px solid black', padding: '8px' }}>
								<input
									type='text'
									style={{
										backgroundColor: '#000',
										border: 'none',
										color: 'white',
										width: '100%',
									}}
									value={row.column1}
									onChange={e =>
										handleCellEdit(row.id, 'column1', e.target.value)
									}
								/>
							</td>
							<td style={{ border: '1px solid black', padding: '8px' }}>
								<input
									style={{
										backgroundColor: '#000',
										border: 'none',
										color: 'white',
										width: '100%',
									}}
									type='text'
									value={row.column2}
									onChange={e =>
										handleCellEdit(row.id, 'column2', e.target.value)
									}
								/>
							</td>
							<td style={{ border: '1px solid black', padding: '8px' }}>
								<button onClick={() => handleRemoveRow(row.id)}>Remove</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	)
}

export default HeaderEditor
