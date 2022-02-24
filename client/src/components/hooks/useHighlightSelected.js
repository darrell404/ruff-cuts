import { useState } from 'react'

function useHighlightSelected(params) {
    const [select, setSelect] = useState(params)

    const clickEvent = (event) => {
        setSelect(event.target.textContent)
    }

   return { select, clickEvent }
}

export default useHighlightSelected