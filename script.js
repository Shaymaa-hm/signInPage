function ValidateEmail(input) {

  var validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]+$/;
  // /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.+(?:\.[a-zA-Z0-9-]+)*$/;

  if (input.match(validRegex)) {

    // alert("Valid email address!");
    localStorage.setItem('email', input);
    // document.form1.text1.focus();

    return true;

  } else {

    // alert("Invalid email address!");
    document.getElementById("invalidEmail").innerHTML = "Email is invalid";
    //document.form1.text1.focus();

    return false;

  }
}

function ValidatePassword(input) {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{6,}$/;
  if (input.match(validRegex)) {

    // alert("Valid password!");

    // document.form1.text1.focus();

    return true;

  } else {

    // alert("Invalid password!");
    document.getElementById("invalidPw").innerHTML = "Password is invalid";
    //document.form1.text1.focus();

    return false;

  }

}


const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const formData = new FormData(form)
  var ct = 0;
  for (const pair of formData.entries()) {
    // console.log(pair[1]);
    if (ct == 0) {
      ValidateEmail(pair[1]); ct++;
    }
    else {
      ValidatePassword(pair[1]);
      ct = 0;
    }
  }
  if (localStorage.getItem('email') != null) {
    var newWindow = window.open("index2.html", '_self');
    if (newWindow) {
      newWindow.focus(); // Bring the new window/tab to the front
    }


    // window.open("https://www.educative.io/", "_blank")
  }
})
