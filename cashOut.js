document.getElementById("btn-cash-out")
.addEventListener("click",function(event){
event.preventDefault()

const cashOut = getInputFieldById("input-cash-out")
const cashOutPin = getInputFieldById("cash-out-pin-number")

if(isNaN(cashOut)){
    alert("failed to add money");
    return
}

if(cashOutPin === 1234){

    const cashOutBalance = getTexInputFieldById("account-balance");

    if(cashOut >cashOutBalance){
        alert ("you do not have enough money to cash out");
        return
    }
    const updateBalance = cashOutBalance - cashOut;
    document.getElementById("account-balance").innerText = updateBalance

    //add to transaction history
const div = document.createElement('div');
div.classList.add('bg-red-400');
div.innerHTML = `
<h4 class = " text-4xl font-bold">Cash out</h4>
<p>${cashOut} withdraw. New Balance${updateBalance}</p>

`
document.getElementById("transaction-container").appendChild(div)
}else{
    alert("wrong pin please try again")
}




})