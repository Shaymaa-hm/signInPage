document.getElementById("localMail").innerHTML = localStorage.getItem('email');
function openLogin(){
    localStorage.removeItem('email')
    var newWindow = window.open("index.html", '_self');
    if (newWindow) {
      newWindow.focus();
    }
}