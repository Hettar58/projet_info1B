document.getElementById("nom").innerHTML = sessionStorage.nom;
document.getElementById("prenom").innerHTML = sessionStorage.prenom;
document.getElementById("sexe").innerHTML = sessionStorage.sexe;
document.getElementById("jour").innerHTML = sessionStorage.naissance_jour;
document.getElementById("mois").innerHTML = sessionStorage.naissance_mois;
document.getElementById("annee").innerHTML = sessionStorage.naissance_annee;
document.getElementById("ville").innerHTML = sessionStorage.ville;
document.getElementById("code_postal").innerHTML = sessionStorage.code_postal;
document.getElementById("adresse").innerHTML = sessionStorage.adresse;
document.getElementById("academie").innerHTML = sessionStorage.academie;
document.getElementById("filiere").innerHTML = sessionStorage.filiere;
document.getElementById("structure").innerHTML = sessionStorage.structure;
document.getElementById("orientation_sexuelle").innerHTML = sessionStorage.orientation_sexuelle;

document.getElementById("flush_account").onclick = function(){
    sessionStorage.clear();
};