document.getElementById('transfer-money-btn').addEventListener('click', function () {
  const transferNumber = getValueFromInput('transfer-number');
  if (transferNumber.length != 11) {
    alert('invalid number');
    return;
  }


  const transferAmount = getValueFromInput('transfer-amount');

  const currentBalance = getBalance();
  const newBalance = currentBalance - Number(transferAmount);
  
  if (newBalance < 0) {
    alert('invalid amount');
    return;
  }

  const pin = getValueFromInput('transfer-password-input');
  if (pin === "1111") {
    alert('transfer money succesfully');
    setValue(newBalance);
  } else {
    alert('invalid pin')
  }


  const history = document.getElementById('history-container');
  const newHistory = document.createElement('div');
  newHistory.innerHTML = `
   <div class="transaction-card bg-base-100">
   transfer ${transferAmount}TAKA success to ${transferNumber},  at ${new Date()}
   </div>
  `;
  history.append(newHistory);
  
})