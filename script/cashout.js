
document.getElementById('cashout-btn').addEventListener('click', function () {
  const cashoutNumber = getValueFromInput('cashout-number');
  if (cashoutNumber.length != 11) {
    alert('invalid number');
    return;
  }
  
  const cashoutAmount = getValueFromInput('cashout-amount');

  const currentBalance = getBalance();

  const newBalance = currentBalance - Number(cashoutAmount);
  console.log(newBalance);
  
  if (newBalance < 0) {
    alert('invalid amount');
    return;
  }
  const pin = getValueFromInput('password-input');
  if (pin === '1111') {
    alert('cashout succesfully');
    setValue(newBalance);
    
  }
  else {
    alert('invalid pin');
    return;
  }



const history = document.getElementById('history-container');
  const newHistory = document.createElement('div');
  newHistory.innerHTML = `
   <div class="transaction-card bg-base-100">
   cashout ${cashoutAmount}TAKA success to ${cashoutNumber},  at ${new Date()}
   </div>
  `;
  history.append(newHistory);
  

})