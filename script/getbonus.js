document.getElementById('cupo-btn').addEventListener('click', function () {
  const couponNumber = getValueFromInput('cupon-number');
  const theBalance = getBalance();
  const newBalance = theBalance + 1000;
  
  
  if (couponNumber === '1111') {
    alert(`you get your bonus form ${couponNumber} ${Date} succesfully`);
    setValue(newBalance);
    return;
    alert(`you get your bonus from ${couponNumber} succesfully`);
    



     }

  
  
})

 