document.getElementById("btn-add-money").addEventListener("click",function(event){
event.preventDefault()
    const addMoney = getInputFieldById("input-add-money");
    const pinNumber = getInputFieldById("input-pin-number");

    // Nan
    if(isNaN(addMoney)){
        alert("failed to add money");
        return
    }
    //wrong way to verify
    if(pinNumber === 1234){
const balance = getTexInputFieldById("account-balance" )
const newBalance = balance + addMoney;

document.getElementById("account-balance").innerText = newBalance;

// add to transaction history
const p =document.createElement('p');
p.innerText =` added:${addMoney} tk. New Balance: ${newBalance}`
console.log(p)
document.getElementById('transaction-container').appendChild(p)
    } else{
        alert("wrong pin Number please try again")
    }
})