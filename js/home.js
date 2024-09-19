// add money to the account

// step-1: add money event handler to the add money button inside the from
document.getElementById('button-add-money').addEventListener('click', function(event){
    // prevent page reload after from submit
    event.preventDefault();
    // step-2: get money to be added to the account 
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    // step-3: get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);
})