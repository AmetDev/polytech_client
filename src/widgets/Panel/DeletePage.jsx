import axios from 'axios'
import { Interweave } from 'interweave'
import Cookies from 'js-cookie'
import React from 'react'

const DeletePage = () => {
	const [textName, setTextName] = React.useState('')
	const [setedName, setSetedName] = React.useState('')
	const [dataPage, setDataPage] = React.useState('')
	const [isFound, setIsFound] = React.useState('')
	const customHook = name => {
		setTextName(name)
	}
	const Search = async data => {
		try {
			const somedata = await axios.get(
				`${process.env.NEXT_PUBLIC_SERVER_URL}/page/takecollege`,
				{ params: { urlPage: data } },
				{
					headers: { 'Access-Control-Allow-Origin': '*' },
				}
			)
			console.log(somedata)
			setDataPage(somedata)
		} catch (error) {
			console.log(error)
			setDataPage('')
		}
	}
	const setData = data => {
		if (data !== '') {
			console.log(data)
			setSetedName(data)
			Search(data)

			setTextName('')
		}
	}
	const Delete = async data => {
		try {
		  const token = await Cookies.get('token');
		  console.log('token', token);
		  const somedata = await axios.delete(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/page/delete`,
			{ 
			  headers: { 
				Authorization: `Bearer ${token}` 
			  },
			  params: { id: data._id } 
			}
		  );
		  console.log(somedata)
		  if(somedata.data.message){
			alert(somedata.data.message);
		  }
		
		} catch (error) {
			if(error.response.data) {
				alert(`${error.response.data.message}. Текущий статус:${error.response.status}`); 
			}
			if(!error.response.data) {
				alert(error)
			}
		
		  // Handle any errors
		}
	  }
	  
	return (
		<div>
			<input
				value={textName}
				onChange={event => {
					customHook(event.target.value)
				}}
				style={{ backgroundColor: '#000' }}
				type='text'
				name=''
				id=''
			/>
			<button onClick={() => setData(textName)} htmlFor=''>
				Найти страницу
			</button>
			{dataPage !== '' && (
				<div>
					<button
						onClick={() => {
							if (window.confirm('Вы действительно хотите удалить страницу?!')) {
								setIsFound(true)
							
								Delete(dataPage.data)
							}

							// dispatch(textValueFunc(dataPage.data.pageContent))
							// setURLPage(dataPage.data.pageUrl)
							// setTitlePage(dataPage.data.pageTitle)
							// setTypePage(dataPage.data.pageType)
						}}
					>
						<h1>{dataPage.data.pageTitle}</h1>
					</button>
					<Interweave content={dataPage.data.pageImage} />
					<div>{dataPage.data.pageDate}</div>
				</div>
			)}
			{dataPage == '' && <div>ничего не найдено</div>}
		</div>
	)
}

export default DeletePage
