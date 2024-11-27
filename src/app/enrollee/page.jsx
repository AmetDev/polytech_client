import Enrollee from '../../pages/enrollee/Enrollee'

const getFiles = async () => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/files/get?forPage=enrollee`,
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

const getSpecialities = async () => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_SERVER_URL}/speciality/getSpecialities`,
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

const index = async () => {
	const files = await getFiles()
	const specialityes = await getSpecialities()

	return <Enrollee files={files} specialityes={specialityes} />
}

export default index
