import {useEffect} from 'react'


function useHighlightSelected(params) {
    const [select, setSelect] = params

    useEffect(() => {
        const inputFields = document.querySelectorAll('input')
        inputFields.forEach(e => {
            e.value=''
        })
    }, [select])

    const clickEvent = (event) => {
        setSelect(event.target.textContent)
    }

   return { select, clickEvent }
}

export default useHighlightSelected