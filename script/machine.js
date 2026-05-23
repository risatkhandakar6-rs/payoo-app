


function getValueFromInput(id) {
  const input = document.getElementById(id);
  const value = input.value;
  console.log(id, value);
  return value;
}

function getBalance() {
  const balanceElemnet = document.getElementById('balance-info');
  const balance = balanceElemnet.innerText;
  console.log('current balance', Number(balance));
  return Number(balance);
}

function setValue(value) {
  const balanceElemnet = document.getElementById('balance-info');
  balanceElemnet.innerText = value;

}


function showOnly(id) {
  const addmoney = document.getElementById('addmoney');
  const cashout = document.getElementById('Cashout');
  const transferMoney = document.getElementById('transfer-money');
  const transaction = document.getElementById('history');
  const latestPayment = document.getElementById('latest-payment');
  const cupon = document.getElementById('cupon');
  const paybill =document.getElementById('paybill')


  addmoney.classList.add('hidden');
  cashout.classList.add('hidden');
  transferMoney.classList.add('hidden');
  transaction.classList.add('hidden');
  latestPayment.classList.add('hidden');
  cupon.classList.add('hidden');
  paybill.classList.add('hidden');

  const selected = document.getElementById(id);
  selected.classList.remove('hidden')
}