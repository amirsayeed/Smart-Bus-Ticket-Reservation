function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.add('bg-[#1DD100]');
} 

function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId)
    element.classList.remove('bg-[#F7F8F8]');
}

function getElementTextById(elementID){
    const element = document.getElementById(elementID);
    const elementText = element.innerText;
    return elementText;
}