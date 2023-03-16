let inputNom=document.querySelector('#nom');
let inputLogin=document.querySelector('#login');
let inputEmail=document.querySelector('#email');
let inputMdp=document.querySelector('#mdp');
let inputConfirmation=document.querySelector('#confirmation');

inputNom.addEventListener('keyup',function(event) 
{
   console.log('Touche nom relâchée');
   let texte=inputNom.value;
   texte=texte.toLowerCase();
   texte=texte.replace(/[^a-z]/g,'-');
   inputLogin.value=texte;
   let erreur=document.querySelector('#erreur-nom');
   if(/^[a-zA-Z' ]+$/.test(inputNom.value)) {
      erreur.style.opacity=0;
   }
   else{
      erreur.style.opacity=1;
   }
});

inputMdp.addEventListener('keyup',function(event) 
{
   console.log('Touche mot de passe relâchée');
   let erreur=document.querySelector('#erreur-mdp');
   if(inputMdp.value.length<6){erreur.style.opacity=1;}
   else{erreur.style.opacity=0;}
   let erreurConfirmation=document.querySelector('#erreur-confirmation');
   if(inputMdp.value==inputConfirmation.value){erreurConfirmation.style.opacity=0;}
   else {erreurConfirmation.style.opacity=1;}
});

inputConfirmation.addEventListener('keyup',function(event) 
{
   console.log('Touche confirmation relâchée');
   let erreurConfirmation=document.querySelector('#erreur-confirmation');
   if(inputMdp.value==inputConfirmation.value){erreurConfirmation.style.opacity=0;}
   else {erreurConfirmation.style.opacity=1;}
});

inputEmail.addEventListener('keyup',function(event) 
{
   console.log('Touche email relâchée');
   let erreur=document.querySelector('#erreur-email');
   if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputEmail.value)){
      erreur.style.opacity=0;
   }
   else {
      erreur.style.opacity=1;
   }
});









/* ma reponse
let inputPassword=document.querySelector('#mot-de-passe');
let inputConfirm=document.querySelector('#confirmation');
inputPassword.addEventListener('keyup',function(event) 
{
   console.log('Touche mot de passe relâchée');
});
inputConfirm.addEventListener('keyup',function(event) 
{
   console.log('Touche confirmation relâchée');
});*/

/* On veut que le mot de passe fasse au moins 6 caractères.*/
/*// Écouteur d'événement pour le champ "Mot de passe"
document.querySelector("#mdp").addEventListener("input", function() {
  console.log("Touche mot de passe relâchée");
  let mdp = document.querySelector("#mdp").value;
  let erreurMdp = document.querySelector("#erreur-mdp");

  // Vérification de la longueur du mot de passe
  if (mdp.length < 6) {
    erreurMdp.textContent = "Trop court !";
    erreurMdp.style.opacity = 1;
  } else {
    erreurMdp.style.opacity = 0;
  }
});

// Écouteur d'événement pour le champ "Confirmation"
document.querySelector("#confirmation").addEventListener("input", function() {
  console.log("Touche confirmation relâchée");
  let mdp = document.querySelector("#mdp").value;
  let confirmation = document.querySelector("#confirmation").value;
  let erreurConfirmation = document.querySelector("#erreur-confirmation");

  // Vérification de la correspondance des mots de passe
  if (mdp !== confirmation) {
    erreurConfirmation.textContent = "Différents !";
    erreurConfirmation.style.opacity = 1;
  } else {
    erreurConfirmation.style.opacity = 0;
  }
});*/

