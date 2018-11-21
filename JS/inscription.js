document.getElementById('jour').onclick = function(){
    this.innerHTML = "";
    for ( var i = 1; i < 31; i++){
        this.innerHTML += "<option>"+i+"</option>";
    }
};

document.getElementById("submit").onclick = function(event){
    console.log("vérification du formulaire en cours");
    event.preventDefault();
    if (document.getElementById("nom").value == ""){
        alert("impossible de compléter l'inscription");
        document.getElementById("nom").style.backgroundColor = "red";    
    }
    else{
        if(document.getElementById("prenom").value==""){
            alert("impossible de compléter l'inscription");
            document.getElementById("prenom").style.backgroundColor = "red";
        }
        else{
            if (document.getElementById("sexe").selectedIndex == 0){
                alert("impossible de compléter l'inscription");
                document.getElementById("sexe").style.backgroundColor = "red";
            }
            else{
                if(document.getElementById("jour").selectedIndex == 0){
                    alert("impossible de compléter l'inscription");
                    document.getElementById("jour").style.backgroundColor = "red";
                }
                else{
                    if(document.getElementById("mois").selectedIndex == 0){
                        alert("impossible de compléter l'inscription");
                        document.getElementById("mois").style.backgroundColor = "red";
                    }
                    else{
                        if(document.getElementById('annee') == ""){
                            alert("impossible de compléter l'inscription");
                            document.getElementById("annee").style.backgroundColor = "red";
                        }
                        else{
                            if (document.getElementById('ville') == ""){
                                alert("impossible de compléter l'inscription");
                                document.getElementById("ville").style.backgroundColor = "red";
                            }
                            else{
                                if(document.getElementById("adresse") == ""){
                                    alert("impossible de compléter l'inscription");
                                    document.getElementById("adresse").style.backgroundColor = "red";
                                }
                                else{
                                    if(document.getElementById('code_postal') == ""){
                                        alert("impossible de compléter l'inscription");
                                        document.getElementById('code_postal').style.backgroundColor = "red";
                                    }
                                    else{
                                        if (document.getElementById("academie") == ""){
                                            document.getElementById("academie").style.backgroundColor = "red";
                                        }
                                        else{
                                            if(document.getElementById('filiere') == ""){
                                                document.getElementById("filiere").style.backgroundColor = "red";
                                            }
                                            else{
                                                if(document.getElementById("structure") == ""){
                                                    document.getElementById("structure").style.backgroundColor = "red";
                                                }
                                                else{
                                                    if(document.getElementById("orientation_sexuelle").selectedIndex == 0){
                                                        document.getElementById("orientation_sexuelle").style.backgroundColor = "red";
                                                    }
                                                    else{
                                                        if(!document.getElementById("LU_accept").hasAttribute("checked")){
                                                            document.getElementById("LU_accept").style.backgroundColor = "red";
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