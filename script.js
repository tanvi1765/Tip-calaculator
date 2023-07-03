const slider=document.querySelectorAll("input[type='range']");
// console.log(slider);
slider.forEach(function(slider){
    slider.addEventListener("input",calculateTip);
});
const billInput =document.getElementById("bill");
billInput.addEventListener("change",calculateTip);
// console.log(billInput);


function calculateTip(){
    let bill=parseFloat(billInput.value);
    let tipPercent =document .getElementById("tip").value;
    let noOfpeople =document .getElementById("no-of-people").value;
    console.log(bill,tipPercent,noOfpeople);

    billInput.value=bill.toFixed(2);

    let totalTip =parseFloat((bill * (tipPercent/100)).toFixed(2));
    let total = parseFloat((bill * (tipPercent)).toFixed(2));

    let tipPerPerson = (totalTip / noOfpeople).toFixed(2);
    let totalPerPerson = (total/ noOfpeople).toFixed(2);
    console.log( noOfpeople, totalTip ,total,tipPerPerson,totalPerPerson);

    document.getElementById("tip-amount").textContent = `\$ ${totalTip}`;
    document.getElementById("total-amount").textContent = `\$ ${total}`;                        
     
    document.getElementById("tip-persent").textContent = `\$ ${tipPercent}`;   
    document.getElementById("split-num").textContent =noOfpeople;   

    document.getElementById("tip-per-person").textContent = `\$ ${tipPerPerson}`;   
    document.getElementById("total-per-person").textContent = `\$ ${totalPerPerson}`;   
}
calculateTip();

