
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
    if(loginResponse.message === 'Authenticated') {
        console.log("Authenticated")
        window.location.href = '/dashboard'
    }
    else console.log("Access denied")    
}



export default login