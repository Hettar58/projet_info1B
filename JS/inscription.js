document.getElementById('jour').onclick = function(){
    if (this.length == 1){
        for ( var i = 1; i < 31; i++){
            this.innerHTML += "<option>"+i+"</option>";
        }
    }
};

document.getElementById("submit").onclick = function(event){
    console.log("vérification du formulaire en cours");
    event.preventDefault();

    var nom = document.getElementById('nom');
    var prenom = document.getElementById('prenom');
    var sexe = document.getElementById("sexe");
    var jour = document.getElementById("jour");
    var mois = document.getElementById("mois");
    var annee = document.getElementById('annee');
    var ville = document.getElementById("ville");
    var adresse = document.getElementById("adresse");
    var code_postal = document.getElementById("code_postal");
    var academie = document.getElementById("academie");
    var filiere = document.getElementById("filiere");
    var structure = document.getElementById("structure");
    var orientation_sexuelle = document.getElementById("orientation_sexuelle");
    var LU_accept = document.getElementById("LU_accept");
    var login = document.getElementById("login");
    var telephone = document.getElementById("telephone");
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    if (nom.value == ""){
        alert("impossible de compléter l'inscription");
        nom.style.backgroundColor = "red";    
    }
    else{
        if(prenom.value==""){
            alert("impossible de compléter l'inscription");
            prenom.style.backgroundColor = "red";
        }
        else{
            if (sexe.selectedIndex == length -1){
                alert("impossible de compléter l'inscription");
                sexe.style.backgroundColor = "red";
            }
            else{
                if(jour.selectedIndex == length-1){
                    alert("impossible de compléter l'inscription");
                    jour.style.backgroundColor = "red";
                }
                else{
                    if(mois.selectedIndex == length-1){
                        alert("impossible de compléter l'inscription");
                        mois.style.backgroundColor = "red";
                    }
                    else{
                        if(annee.value == ""){
                            alert("impossible de compléter l'inscription");
                            annee.style.backgroundColor = "red";
                        }
                        else{
                            if(telephone.value == ""){
                                alert("impossible de compléter l'inscription");
                                telephone.style.backgroundColor = "red";
                            }
                            else{
                                if(email.value == ""){
                                    alert("impossible de compléter l'inscription");
                                    email.style.backgroundColor = "red";
                                }
                                else{
                                    if(login.value == ""){
                                        alert("impossible de compléter l'inscription");
                                        login.style.backgroundColor = "red";
                                    }
                                    else{
                                        if (password.value == ""){
                                            alert("impossible de compléter l'inscription");
                                            password.style.backgroundColor = 'red';
                                        }
                                        else{
                                            if (ville.value == ""){
                                                alert("impossible de compléter l'inscription");
                                                ville.style.backgroundColor = "red";
                                            }
                                            else{
                                                if(adresse.value == ""){
                                                    alert("impossible de compléter l'inscription");
                                                    adresse.style.backgroundColor = "red";
                                                }
                                                else{
                                                    if(code_postal.value == ""){
                                                        alert("impossible de compléter l'inscription");
                                                        document.getElementById('code_postal').style.backgroundColor = "red";
                                                    }
                                                    else{
                                                        if (academie.value == ""){
                                                            alert("impossible de compléter l'inscription");
                                                            academie.style.backgroundColor = "red";
                                                        }
                                                        else{
                                                            if(filiere.value == ""){
                                                                alert("impossible de compléter l'inscription");
                                                                filiere.style.backgroundColor = "red";
                                                            }
                                                            else{
                                                                if(structure.value == ""){
                                                                    alert("impossible de compléter l'inscription");
                                                                    structure.style.backgroundColor = "red";
                                                                }
                                                                else{
                                                                    if(orientation_sexuelle.selectedIndex == length -1){
                                                                        alert("impossible de compléter l'inscription");
                                                                        orientation_sexuelle.style.backgroundColor = "red";
                                                                    }
                                                                    else{
                                                                        if(LU_accept.checked == false){
                                                                            alert("impossible de compléter l'inscription(CGU");
                                                                            LU_accept.style.backgroundColor = "red";
                                                                        }
                                                                        else{
                                                                            //FORMULAIRE VALIDE, DEBUT DU STOCKAGE DANS SESSION STORAGE
                                                                            if(typeof sessionStorage != "undefined"){
                                                                                console.log("enregistrement des valeurs");
                                                                                sessionStorage.setItem("telephone", telephone.value);
                                                                                sessionStorage.setItem("email", email.value);
                                                                                sessionStorage.setItem("login", login.value);
                                                                                sessionStorage.setItem("password", password.value);
                                                                                sessionStorage.setItem("nom", nom.value);
                                                                                sessionStorage.setItem("prenom", prenom.value);
                                                                                sessionStorage.setItem("sexe", sexe.options[sexe.selectedIndex].text);
                                                                                sessionStorage.setItem("naissance_jour", jour.options[jour.selectedIndex].text);
                                                                                sessionStorage.setItem("naissance_mois", mois.options[mois.selectedIndex].text);
                                                                                sessionStorage.setItem("naissance_annee", annee.value);
                                                                                sessionStorage.setItem("ville", ville.value);
                                                                                sessionStorage.setItem("code_postal", code_postal.value);
                                                                                sessionStorage.setItem("addresse", adresse.value);
                                                                                sessionStorage.setItem("academie", academie.value);
                                                                                sessionStorage.setItem("filiere", filiere.value);
                                                                                sessionStorage.setItem("structure", structure.value);
                                                                                sessionStorage.setItem("orientation_sexuelle", orientation_sexuelle.options[orientation_sexuelle.selectedIndex].text);
                                                                            }
                                                                            else{
                                                                                alert("l'inscription a réassi mais le stockage des données dans le navigateur a échoué");
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }    
                    }
                }
            }
        }
    }
}

document.getElementById("retour").onclick = function(){
    history.back();
};