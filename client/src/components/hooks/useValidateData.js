import {useState, useEffect} from 'react'
import { Navigate, useNavigate } from 'react-router'

function useValidateData(showpage) {
    const [inputFields, setInputFields] = useState({})
    const [disableButton, setDisableButton] = useState(true)
    const [alert, setAlert] = useState('')
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()

useEffect(() => {
    const inputFieldObject = document.querySelectorAll("input")
    var inputFieldDataHolder = {}
    inputFieldObject.forEach(e => {
        inputFieldDataHolder[e.name] = e.value
    })
    setInputFields(inputFieldDataHolder)
}, [showpage])


useEffect(() => {
    //  Check if passwords match on register page
    if (inputFields.hasOwnProperty('confirm-password') && inputFields['confirm-password'] !== '') {
        if(inputFields.password !== inputFields['confirm-password']) {
            setAlert("Passwords must match")
            setDisableButton(true)
        }
        else setAlert('')
    }
    // Check if any input is blank, manages disabled state
    for (const key in inputFields) {
        if (inputFields[key] === '') {
            setDisableButton(true)
            return
        }
    }
    setDisableButton(false)
}, [inputFields])
    
    const changeInputData = (e) => {
        const dataTarget = e.target.name
        const dataValue = e.target.value
        setInputFields( {...inputFields, [dataTarget]: dataValue})
    }

    const checkPasswordsMatch = async () => {
        if (inputFields['password'] !== inputFields['confirm-password']) {
            setAlert("Passwords do not match")
            return
        }
        
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(inputFields)
        }
        const register = await fetch('/api/register', options)
        const res = await register.json()
        console.log(res)
        if (res.message === 'Created') {
            navigate('/dashboard')
        }
    }

    return {checkPasswordsMatch, changeInputData, disableButton, alert, inputFields}
}

export default useValidateData