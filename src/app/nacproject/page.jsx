import NacProject from '@pages/nacproject/NacProject'

const getFiles = async () => {
	const response = await fetch(
		`${process.env.NEXT_PUBLIC_SERVER_URL}/files/get?forPage=nacproject`,
		{
			next: { revalidate: 0 },
		}
	)

	return await response.json()
}

const NationsProject = async () => {
	const files = await getFiles()

	return (
		<div>
			<NacProject files={files} />
		</div>
	)
}

export default NationsProject
