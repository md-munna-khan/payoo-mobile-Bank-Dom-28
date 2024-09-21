function getInputFieldById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue)
 
    return inputNumber;
}
function getTexInputFieldById(id){
    const texValue =document.getElementById(id).innerText;
    const textNumber = parseFloat(texValue)
    return textNumber
}

function showSectionById(id){
    // hide al the section
    document.getElementById("add-money-form").classList.add('hidden');
    document.getElementById("cash-out-form").classList.add('hidden');
    document.getElementById("transaction-section").classList.add('hidden');
    // show the section with the provide id as parameter
    document.getElementById(id).classList.remove('hidden')
}