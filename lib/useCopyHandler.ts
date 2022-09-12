const onCopyHandler = async (e: any) => {
    const targetID = e.target.id
    const content = document.getElementById(`${targetID}`).innerHTML
    const trimmedContent = content.replace(/\s+/g, '').trim()
    await navigator.clipboard.writeText(trimmedContent);
    document.getElementById(`${targetID}Popup`).style.visibility = 'visible'
    document.getElementById(`${targetID}Popup`).style.top = '-20px'
    document.getElementById(`${targetID}Popup`).style.opacity = '1'

    setTimeout(() => {
        document.getElementById(`${targetID}Popup`).style.top = '24px'
        document.getElementById(`${targetID}Popup`).style.opacity = '0'
        document.getElementById(`${targetID}Popup`).style.visibility = 'hidden'
    }, 2000);
}

export default onCopyHandler
