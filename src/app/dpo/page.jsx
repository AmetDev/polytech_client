import DPO from '../../pages/DPO/DPO'

const getFiles = async () => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/files/get?forPage=dpo`,
			{
				next: { revalidate: 0 },
			}
		)

		const data = await response.json()

		return data
	} catch {
		const data = []
		return data
	}
}

const page = async () => {
	const files = await getFiles()
	return <DPO files={files} />
}

export default page
