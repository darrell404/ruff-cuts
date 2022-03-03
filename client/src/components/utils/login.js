
const login = async (credentials) => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }

    const loggingIn = await fetch('/api/login', options)
    const loginResponse = await loggingIn.json()
    console.log(loginResponse)
}



export default login