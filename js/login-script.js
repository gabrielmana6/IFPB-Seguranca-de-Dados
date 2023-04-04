function checkLogin(user, pwd) {
    let correctUser = 'asd';
    let correctPwd = '123';

    if (user === correctUser && pwd === correctPwd) {
        return true;
    } else {
        return false;
    }
}

function salvaLocalmente(user, pwd) {
    sessionStorage.setItem("user", user);
    sessionStorage.setItem("pwd", pwd);
}

function logar() {
    let user = document.getElementById('userName').value;
    let pwd = document.getElementById('pwd').value;
    
    if (checkLogin(user, pwd)) {
        window.alert('Credenciais corretas.')
        salvaLocalmente(user, pwd);
        window.location.href = "clientes-page";
    } else {
        window.alert('Credenciais incorretas.')
    }
}

document.getElementById("btnLogin").addEventListener("click", function(event){
    event.preventDefault();
    logar();
});