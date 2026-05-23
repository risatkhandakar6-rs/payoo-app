document.getElementById('login-btn').addEventListener('click', function () {
  const numberInput = document.getElementById('number-input')
  const contactNumber = numberInput.value;
  console.log(contactNumber);

  const passwordInput = document.getElementById('password-input')
  const loginpass = passwordInput.value;
  console.log(loginpass);

  // condition
  if (contactNumber == '01927307905' && loginpass == '1111') {
    alert('login succesfully')
    window.location.assign("home.html")
  }
  else {
    alert('login failed')
    return;
  }
});