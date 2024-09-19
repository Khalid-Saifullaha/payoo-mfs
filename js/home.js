// add money to the account

// step-1: add money event handler to the add money button inside the from
document.getElementById('button-add-money').addEventListener('click', function(event){
    // prevent page reload after from submit
    event.preventDefault();
    // step-2: get money to be added to the account 
    const addMoneyInput = document.getElementById('input-add-money').value;

    // step-3: get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value;

    // step-4: verify pin number 
    // wrong way to validate pin number
    if(pinNumberInput === '1234'){

        // step-4: get the current money
        const balance = document.getElementById('account-balance').innerText;

        // step-5: add addMoneyInput with  balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = addMoneyNumber + balanceNumber;

        // step-6: update the balance in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to add money! Please try again')
    }
})