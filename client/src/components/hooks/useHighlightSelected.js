
function useHighlightSelected(params) {
    const [select, setSelect] = params

    const clickEvent = (event) => {
        setSelect(event.target.textContent)
    }

   return { select, clickEvent }
}

export default useHighlightSelected