var login = sessionStorage.login;
var password = sessionStorage.password;

document.getElementById("submit").onclick = function(event){
    console.log("debut de la conexion");
    event.preventDefault();

    if (document.getElementById("login").value == login && document.getElementById("password").value == password){
        document.getElementById("connect_form").style.display = "none";
        document.getElementById("output").innerHTML += "nom: "+sessionStorage.nom+"<br/>";
        document.getElementById("output").innerHTML += "prénom: "+sessionStorage.prenom+"<br/>";
        document.getElementById("output").innerHTML += "sexe: "+sessionStorage.sexe+"<br/>";
        document.getElementById("output").innerHTML += "jour de naissance: "+sessionStorage.jour+"<br/>";
        document.getElementById("output").innerHTML += "mois de naissance: "+sessionStorage.mois+"<br/>";
        document.getElementById("output").innerHTML += "année de naissance :"+sessionStorage.annee+"<br/>";
        document.getElementById("output").innerHTML += "ville:"+sessionStorage.ville+"<br/>";
        document.getElementById("output").innerHTML += "code postal: "+sessionStorage.code_postal+"<br/>";
        document.getElementById("output").innerHTML += "adresse:"+sessionStorage.adresse+"<br/>";
        document.getElementById("output").innerHTML += "Académie:"+sessionStorage.academie+"<br/>";
        document.getElementById("output").innerHTML += "Filière: "+sessionStorage.filiere+"<br/>";
        document.getElementById("output").innerHTML += "Structure: "+sessionStorage.structure+"<br/>";
        document.getElementById("output").innerHTML += "Orientation sexuelle: "+sessionStorage.orientation_sexuelle+"<br/>";
        document.getElementById("output").innerHTML += "<br/><div id='flush_account'>supprimer le compte dans la session locale</div>";
    }
    else{
        document.getElementById("output").innerHTML="Impossible de se connecter: mauvais mot de passe ou login";
    }
};

document.getElementById("flush_account").onclick = function(){
    sessionStorage.clear();
};