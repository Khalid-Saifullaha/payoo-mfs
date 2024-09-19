document.getElementById('button-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutMoney = document.getElementById('input-cash-out').value;
    const pinNumber = parseFloat(cashOutMoney);
    const cashOutPin = document.getElementById('input-cash-out-pin').value;
    

    if(cashOutPin === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);

        //  reduce the balance
        const newBalance = balanceNumber - pinNumber;
        
        // update the ui
        document.getElementById('account-balance').innerText = newBalance;
    }
    else{
        alert('Failed to cash out. Please try again later.')
    }
})