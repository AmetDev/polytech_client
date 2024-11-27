import LeftMenu from '@widgets/Panel/LeftMenu'
import MainMenu from '@widgets/Panel/MainMenu'
import axios from 'axios'
import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

const Panel = () => {
	const [dataFetch, setDataFetch] = useState(null)
	const [mainPanelType, setMainPanelType] = useState('create-page')

	useEffect(() => {
		console.log('effect')
		const fetchingData = async () => {
			try {
				console.log('inner')
				const token = await Cookies.get('token')
				console.log('token', token)
				const { data } = await axios.get(
					`${process.env.NEXT_PUBLIC_SERVER_URL}/auth/me`,
					{
						headers: { Authorization: `Bearer ${token}` },
					}
				)
				setDataFetch(data)
			} catch (error) {
				console.warn(error)
			}
		}
		fetchingData()
	}, [])

	return (
		<>
			{dataFetch !== null ? (
				<main style={{ display: 'flex' }}>
					<LeftMenu
						setMainPanelType={setMainPanelType}
						mainPanelType={mainPanelType}
					/>
					<MainMenu mainPanelType={mainPanelType} />
				</main>
			) : (
				<div style={{ color: 'white' }}>Войдите в аккаунт, пожалуйста.</div>
			)}
		</>
	)
}

export default Panel
