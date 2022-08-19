function getInputValue(inputFieldId){
    const input = document.getElementById(inputFieldId);
    const inputString =input.value;
    const inputValue = parseFloat(inputString);
    return inputValue;
}

function getTextValue(textValue){
    const text = document.getElementById(textValue);
    const textString = text.innerText;
    const textsValue = parseFloat(textString);
    return textsValue;
}

function setElementId(elementId, newValue){
    const text =document.getElementById(elementId);
    text.innerText = newValue; 
}
document.getElementById("btn-calculate").addEventListener('click', function(){
    const incomeValue = getInputValue("income");
    const foodValue = getInputValue("food");
    const rentValue = getInputValue("rent");
    const clothesValue = getInputValue("clothes");

    totalExpences = foodValue + rentValue + clothesValue;
    
    setElementId("expence", totalExpences)

    balance = incomeValue - totalExpences;
    setElementId("balance", balance)
})


document.getElementById("save").addEventListener('click', function(){
    const incomeValue = getInputValue("income");
    const percentValue = getInputValue("percent");

    saveAmmount = (percentValue/100) * incomeValue;

    setElementId("saving", saveAmmount);

    const pBalance = getTextValue("balance");
    const pSave = getTextValue("saving");

    remaining = pBalance -pSave;
    setElementId("remain", remaining)
})