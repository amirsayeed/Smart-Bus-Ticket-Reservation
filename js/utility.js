function setBackgroundColor(element){
    element.style.backgroundColor = '#1DD100';
} 

function setElementTextByIdAndValue(id, value){
    const element = document.getElementById(id);
    element.innerText = value;
}

function getElementTextById(elementID){
    const element = document.getElementById(elementID);
    const elementText = element.innerText;
    return elementText;
}