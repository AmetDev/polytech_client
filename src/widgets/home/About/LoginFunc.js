export const LoginUser = async ({ e, login, pas }) => {
	try {
		e.preventDefault()
		console.log(login, pas)
	} catch (error) {
		console.log(error)
	}
}
