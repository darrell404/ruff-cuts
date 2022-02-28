import {useState, useEffect} from 'react'

function useValidateData(showpage) {
    const [inputFields, setInputFields] = useState({})
    const [disableButton, setDisableButton] = useState(true)
    const [alert, setAlert] = useState('')

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

    const checkPasswordsMatch = () => {
        if (inputFields['password'] !== inputFields['confirm-password']) {
            setAlert("Passwords do not match")
            return
        }
        setAlert('')
    }

    return {checkPasswordsMatch, changeInputData, disableButton, alert, inputFields}
}

export default useValidateData