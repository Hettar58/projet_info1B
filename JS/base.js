
if (sessionStorage.connected == "true"){
    document.getElementById("float").style.display = "";
    document.getElementById("profil").style.display = "";
}
else{
    sessionStorage.setItem("connected", "false");
    document.getElementById("float").style.display = "none";
    document.getElementById("profil").style.display = "none";
}

document.getElementById("retour").onclick = function(){
    history.back();
};