const onCopyHandler = async (e: any) => {
    const targetID = e.target.id;
    const content = document.getElementById(`${targetID}`)!.innerHTML;
    const trimmedContent = content.replace(/\s+/g, '').trim();
    await navigator.clipboard.writeText(trimmedContent);
    
    const popupElement = document.getElementById(`${targetID}Popup`)!;
    popupElement.style.visibility = 'visible';
    popupElement.style.transform = "translate(-50%, -50%)"
    popupElement.style.top = '-40px';
    popupElement.style.left = '50%';
    popupElement.style.color = '#fff';
    popupElement.style.zIndex = '50';
    popupElement.style.opacity = '1';

    setTimeout(() => {
        popupElement.style.top = '-20px';
        popupElement.style.opacity = '0';
        popupElement.style.visibility = 'hidden';
    }, 1500);
}

export default onCopyHandler;
