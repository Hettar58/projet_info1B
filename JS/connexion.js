var login = sessionStorage.login;
var password = sessionStorage.password;
console.log("login:"+login+" password:"+password);
document.getElementById("submit").onclick = function(event){
    console.log("debut de la conexion");
    event.preventDefault();

    if ((document.getElementById("login").value == login && document.getElementById("password").value == password && sessionStorage.connected == "false") || sessionStorage.connected == "true"){
        window.open("profil.html", "_parent");
        sessionStorage.setItem("connected", "true");
    }
    else{
        document.getElementById("output").innerHTML="Impossible de se connecter: mauvais mot de passe ou login";
    }
};

