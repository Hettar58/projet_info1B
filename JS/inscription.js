function animate(message){
    if (document.getElementById("indication").classList.contains("show")){
        setTimeout(function(){
            document.getElementById("indication").classList.replace("show", "hide");
        }, 100);
        
    }
    setTimeout(function(){
        if (document.getElementById("indication").classList.contains("hide")){
            document.getElementById("indication").classList.replace("hide", "show");
            document.getElementById("indication").innerHTML = message;
        }
    }, 2000);
    
    
    
}
function formulaire(i){
    var indication = document.getElementById("indication");
    var continuer = false;
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
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
    var interets = document.getElementById("points_interets");
    
    switch (i){
        case 0:
            indication.innerHTML = "Bonjour ! si vous voulez vous inscrire, veuillez remplir ce formulaire. Pour commencer, appuyez simplement sur commencer.";
            indication.classList.add("show");
            document.getElementById("continuer").onclick = function(){
                this.id="continuer1";
                formulaire(1);
            }
            break;
        
        case 1:
            continuer = false;
            animate("Pour commencer, veuillez indiquer votre nom, prémon et sexe.");
            
            setTimeout(function(){
                nom.style.display = "inline";
                document.getElementById("lbl_nom").style.display = "inline";
                prenom.style.display = "inline";
                document.getElementById("lbl_prenom").style.display = "inline";
                sexe.style.display = "inline";
                document.getElementById("lbl_sexe").style.display = "inline";
            }, 3000);
            

            document.getElementById("continuer1").onclick = function(){
                console.log("clic");
                if(nom.value == ""){
                    nom.style.backgroundColor = "red";
                    continuer = false;
                }
                else{
                    if(prenom.value == ""){
                        prenom.style.backgroundColor = "red";
                        continuer = false;
                    }else{
                        if (sexe.selectedIndex == 0){
                            sexe.style.backgroundColor = "red";
                            continuer = false;
                        }else{
                            continuer = true;
                        }
                    }
                }
                if (continuer == true){
                    sessionStorage.setItem("nom", nom.value);
                    sessionStorage.setItem("prenom", prenom.value);
                    sessionStorage.setItem("sexe", sexe.options[sexe.selectedIndex].text);
                    nom.style.display = "none";
                    prenom.style.display = "none";
                    sexe.style.display = "none";
                    document.getElementById("lbl_nom").style.display = "none";
                    document.getElementById("lbl_prenom").style.display = "none";
                    document.getElementById("lbl_sexe").style.display = "none";
                    this.id = "continuer2";
                    formulaire(2);
                }
                else{
                    formulaire(1);
                }
            };
            break;
        
        case 2:
            continuer = false;
            animate("Veuillez indiquer votre date de naissance");
            setTimeout(function(){
                jour.style.display = "inline";
                mois.style.display = "inline";
                annee.style.display ="inline";
                document.getElementById("lbl_annee").style.display = "inline";
            }, 3000);
            
            document.getElementById("continuer2").onclick = function(){
                console.log("clic 2");
                if (jour.selectedIndex == length -1){
                    jour.style.backgroundColor = "red";
                    continuer = false;
                }
                else{
                    if(mois.selectedIndex == length -1){
                        mois.style.backgroundColor = "red";
                        continuer = false;
                    }
                    else{
                        if (annee.value == ""){
                            annee.style.backgroundColor = "red";
                            continuer = false;
                        }
                        else{
                            continuer = true;
                        }
                    }
                }
            
                if (continuer == true){
                    sessionStorage.setItem("naissance_jour", jour.options[jour.selectedIndex].text);
                    sessionStorage.setItem("naissance_mois", mois.options[mois.selectedIndex].text);
                    sessionStorage.setItem("naissance_annee", annee.value);
                    jour.style.display = "none";
                    mois.style.display = "none";
                    annee.style.display ="none";
                    document.getElementById("lbl_annee").style.display = "none";
                    this.id="continuer3";
                    formulaire(3);
                }
                else{
                    formulaire(2);
                }
            };
            break;
        
        case 3:
            continuer = false;
            animate("Les informations suivantes serviront à vous connecter");
            setTimeout(function(){
                telephone.style.display = "inline";
                email.style.display = "inline";
                login.style.display = "inline";
                password.style.display = "inline";
                document.getElementById("lbl_telephone").style.display = "inline";
                document.getElementById("lbl_email").style.display =  "inline";
                document.getElementById("lbl_login").style.display = "inline";
                document.getElementById("lbl_password").style.display = "inline";
            }, 3000);

            document.getElementById("continuer3").onclick = function(){
                if (telephone.value == ""){
                    continuer = false;
                    telephone.style.backgroundColor = "red";
                }
                else{
                    if (email.value == ""){
                        continuer = false;
                        email.style.backgroundColor = "red";
                    }
                    else{
                        if(login.value == ""){
                            continuer = false;
                            login.style.backgroundColor = "red";
                        }
                        else{
                            if (password.value == ""){
                                continuer = false;
                                password.style.backgroundColor = "red";
                            }
                            else{
                                continuer = true;
                            }
                        }
                    }
                }
                if (continuer == true){
                    sessionStorage.setItem("telephone", telephone.value);
                    sessionStorage.setItem("email", email.value);
                    sessionStorage.setItem("login", login.value);
                    sessionStorage.setItem("password", password.value);
                    telephone.style.display = "none";
                    email.style.display = "none";
                    login.style.display = "none";
                    password.style.display = "none";
                    document.getElementById("lbl_telephone").style.display = "none";
                    document.getElementById("lbl_email").style.display = "none";
                    document.getElementById("lbl_login").style.display = "none";
                    document.getElementById("lbl_password").style.display = "none";
                    this.id="continuer4";
                    formulaire(4);
                }
                else{
                    formulaire(3);
                }
            };
            break;

        case 4:
            continuer = false;
            animate("Les informations suivantes serviront à vous mettre en contact avec des gens proches de vous");
            setTimeout(function(){
                ville.style.display = "inline";
                adresse.style.display = "inline";
                code_postal.style.display = "inline";
                document.getElementById("ne_pas_montrer_adresse").style.display = "inline";
                document.getElementById("lbl_ville").style.display = "inline";
                document.getElementById("lbl_adresse").style.display = "inline";
                document.getElementById("lbl_cp").style.display = "inline";
                document.getElementById("lbl_ne_pas_montrer_adresse").style.display = "inline";  
            }, 3000);
            

            document.getElementById("continuer4").onclick = function(){
                if (ville.value == ""){
                    ville.style.backgroundColor = "red";
                    continuer = false;
                }
                else{
                    if(adresse.value == ""){
                        continuer = false;
                        adresse.style.backgroundColor = "red";
                    }
                    else{
                        if (code_postal.value == ""){
                            continuer = false;
                            code_postal.style.backgroundColor = "red";
                        }
                        else{
                            continuer = true;
                        }
                    }
                }

                if (continuer == true){
                    sessionStorage.setItem("ville", ville.value);
                    sessionStorage.setItem("adresse", adresse.value);
                    sessionStorage.setItem("code_postal", code_postal.value);
                    sessionStorage.setItem("npma", document.getElementById("ne_pas_montrer_adresse").checked);
                    ville.style.display = "none";
                    adresse.style.display = "none";
                    code_postal.style.display = "none";
                    document.getElementById("ne_pas_montrer_adresse").style.display = "none";
                    document.getElementById("lbl_ville").style.display = "none";
                    document.getElementById("lbl_adresse").style.display = "none";
                    document.getElementById("lbl_cp").style.display = "none";
                    document.getElementById("lbl_ne_pas_montrer_adresse").style.display = "none"; 
                    this.id = "continuer5";
                    formulaire(5);
                }
            };
            break;

        case 5:
            continuer = false;
            animate("Veuillez rentrer les informations concernant votre cursus.");
            setTimeout(function(){
                structure.style.display = "inline";
                academie.style.display = "inline";
                filiere.style.display = "inline";
                document.getElementById("lbl_structure").style.display = "inline";
                document.getElementById("lbl_academie").style.display = "inline";
                document.getElementById("lbl_filiere").style.display = "inline";
            }, 3000);
            
            
            document.getElementById("continuer5").onclick = function(){
                if (structure.value == ""){
                    structure.style.backgroundColor = "red";
                    continuer = false;
                }
                else{
                    if (academie.value == ""){
                        academie.style.backgroundColor = "red";
                        continuer = false;
                    }
                    else{
                        if (filiere.value == ""){
                            filiere.style.backgroundColor = "red";
                            continuer = false;
                        }
                        else{
                            continuer = true;
                        }
                    }
                }
                if (continuer == true){
                    sessionStorage.setItem("structure", structure.value);
                    sessionStorage.setItem("academie", academie.value);
                    sessionStorage.setItem("filiere", filiere.value);
                    structure.style.display = "none";
                    academie.style.display = "none";
                    filiere.style.display = "none";
                    document.getElementById("lbl_structure").style.display = "none";
                    document.getElementById("lbl_academie").style.display = "none";
                    document.getElementById("lbl_filiere").style.display = "none";
                    this.id="continuer6";
                    formulaire(6);
                }
                else{
                    formulaire(5);
                }
            };
            break;

        case 6:
            continuer = false;
            animate("Maintenant, veuillez rentrer vos préférences");
            setTimeout(function(){
                orientation_sexuelle.style.display = "inline";
                interets.style.display = "inline";
                document.getElementById("lbl_or_sex").style.display = "inline";
            }, 3000);
            
            document.getElementById("continuer6").onclick = function(){
                
                if(interets.value.innerHTML == ""){
                    interets.style.backgroundColor = "red";
                    continuer = false;
                }
                else{
                    if(orientation_sexuelle == 0){
                        orientation_sexuelle.style.backgroundColor = "red";
                        continuer = false;
                    }
                    else{
                        continuer = true;
                    }
                }
                if (continuer == true){
                    sessionStorage.setItem("orientation_sexuelle", orientation_sexuelle.options[orientation_sexuelle.selectedIndex].text);
                    sessionStorage.setItem("interetes", interets.innerHTML);
                    orientation_sexuelle.style.display = "none";
                    interets.style.display = "none";
                    document.getElementById("lbl_or_sex").style.display = "none";
                    this.id = "continuer7";
                    formulaire(7);
                }
                else{
                    formulaire(6);
                }
            };
            break;
        
        case 7:
            continuer = false;
            animate("dernière étape ! verifiez que vous avez lu le règlement et finalisez votre inscription");
            setTimeout(function(){
                document.getElementById("lbl_lu_accept").style.display = "inline"; 
                LU_accept.style.display = "inline";
                document.getElementById("submit").style.display = "block";
                document.getElementById("reset").style.display = "block";
                document.getElementById("continuer7").style.display = "none";    
            }, 3000);
           
            document.getElementById("submit").onclick = function(event){
                event.preventDefault();
                if (!LU_accept.checked){
                    continuer = false;
                    document.getElementById("lbl_lu_accept").style.backgroundColor = "red";
                }
                else{
                    continuer = true;
                    sessionStorage.setItem("LU_accept", LU_accept.checked);
                    alert("Votre profil a bien été crée et a été stocké dans le stockage de session");
                }
            };
            break;

    }
}
document.getElementById('jour').onclick = function(){
    if (this.length == 1){
        for ( var i = 1; i < 31; i++){
            this.innerHTML += "<option>"+i+"</option>";
        }
    }
};
document.getElementById("continuer").style.display = "block";
formulaire(0);

document.getElementById("retour").onclick = function(){
    history.back();
};