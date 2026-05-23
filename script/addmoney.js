document.getElementById('addmoney-btn').addEventListener("click", function () { 
  const bankAccount = getValueFromInput('addmoney-bank');
  if (bankAccount == 'Select bank') {
    alert('please select a bank');
    return;

  }

  const addmoneyNumber = getValueFromInput('addmoney-number');
  if (addmoneyNumber.length != 11) {
    alert('invalid number');
    return;
  }

  const addmoneyAmount = getValueFromInput('addmoney-amount');

  const newBalance = getBalance() + Number(addmoneyAmount);

  const pin = getValueFromInput('addmoney-pin');
  if (pin === '1111') {
    alert(`Add money succesfull from ${bankAccount} at ${new Date()}`);
  
    setValue(newBalance);

  } else {
    alert('invalid pin')
    return;
  }

  const history = document.getElementById('history-container');
  const newHistory = document.createElement('div');
  newHistory.innerHTML = `
   <div class="transaction-card bg-base-100">
   Add Money success from ${bankAccount}, acc-no ${addmoneyNumber} at ${new Date()}
   </div>
  `;
  history.append(newHistory);
  

  
})