document.getElementById("btn-add-money").addEventListener("click",function(event){
    event.preventDefault();
    console.log("add money clicked")

    // getInputFieldValueBYId();
    // const addMoney = getInputFieldValueBYId();
    // console.log("add money value", addMoney)

    const addMoney = getInputFieldValueBYId("input-add-money");
    const inputPin = getInputFieldValueBYId("input-pin-number")
    console.log("add money with parameter",addMoney,inputPin)
})