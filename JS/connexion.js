var login = sessionStorage.login;
var password = sessionStorage.password;
document.getElementById("compte").style.display = "none";
document.getElementById("submit").onclick = function(event){
    console.log("debut de la conexion");
    event.preventDefault();

    if (document.getElementById("login").value == login && document.getElementById("password").value == password){
        document.getElementById("connect_form").style.display = "none";
        document.getElementById("compte").style.display = "";
        document.getElementById("nom").innerHTML = sessionStorage.nom;
        document.getElementById("prenom").innerHTML = sessionStorage.prenom;
        document.getElementById("sexe").innerHTML = sessionStorage.sexe;
        document.getElementById("jour").innerHTML = sessionStorage.jour;
        document.getElementById("mois").innerHTML = sessionStorage.mois;
        document.getElementById("annee").innerHTML = sessionStorage.annee;
        document.getElementById("ville").innerHTML = sessionStorage.ville;
        document.getElementById("code_postal").innerHTML = sessionStorage.code_postal;
        document.getElementById("addresse").innerHTML = sessionStorage.addresse;
        document.getElementById("academie").innerHTML = sessionStorage.academie;
        document.getElementById("filiere").innerHTML = sessionStorage.filiere;
        document.getElementById("structure").innerHTML = sessionStorage.structure;
        document.getElementById("orientation_sexuelle").innerHTML = sessionStorage.orientation_sexuelle;
    }
    else{
        document.getElementById("output").innerHTML="Impossible de se connecter: mauvais mot de passe ou login";
    }
};

document.getElementById("flush_account").onclick = function(){
    sessionStorage.clear();
};