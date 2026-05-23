document.getElementById('paybill-btn').addEventListener('click', function () {
  const selectToPay = getValueFromInput('select-nich');
  if (selectToPay == 'Select to pay') {
    alert('please chose a nich');
    return;
  }

  const billAccNO = getValueFromInput('bill-account-number');
  if (billAccNO.length != 11) {
    alert('invalid number');
    return;
  }
  const balance = getBalance();
  const payAmount = getValueFromInput('pay-amount');
  const newBalance = balance - Number(payAmount);
  
  if (newBalance < 0) {
    alert('invalid amount');
    return;
  }

  const pin = getValueFromInput('paybill-pin');
  if (pin === '1111') {
    alert('pay bill succesfully');

  } else {
    alert(
      'invalid pin'
    )
    return;
  }

  const history = document.getElementById('history-container');
  const newHistory = document.createElement('div');
  newHistory.innerHTML = `
   <div class="transaction-card bg-base-100">
   paybill ${payAmount}TAKA success to ${billAccNO},  at ${new Date()}
   </div>
  `;
  history.append(newHistory);
  
  
})