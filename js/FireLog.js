var config = {
  apiKey: "AIzaSyCnF2bIrF0XpQCfMAuko8xBIQfc5USZhxg",
  authDomain: "firelogin-fb871.firebaseapp.com",
  databaseURL: "https://firelogin-fb871.firebaseio.com",
  projectId: "firelogin-fb871",
  storageBucket: "firelogin-fb871.appspot.com",
  messagingSenderId: "638252731962"
};
firebase.initializeApp(config);

function redireccionar(){
    location.href="https://www.protecoregion5.esy.es";
} 

function LoginGmail(){
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');
    firebase.auth().signInWithPopup(provider).then (function(result){
      var token = result.credential.accesstoken;
      var user = result.user;
      var name = result.user.displayName;
      alert("Inició sesión como: "+name);
      setTimeout ("redireccionar()", 1000);
      //Mostrar nombre de usuario
      //$('#page').css('display', 'none') && $('#page2').css('display', 'block');
      //document.querySelector('span.mdl-layout-title').textContent = 'Bienvenido ' + name;
    }).catch(function(error){
      var errorCode = error.Code;
      var errorMessage = error.message;
      var errorEmail = error.email;
      var errorCred = error.credential;
      if(errorCode==='auth/account-exists-with-different-credential'){
        alert ('Ya hay un usuario ingresado con esta cuenta de correo electrónico');
      }
    });
  }
  else{
    firebase.auth().signOut();
  }
}

function LoginFacebook(){
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('public_profile');
    firebase.auth().signInWithPopup(provider).then (function(result){
      var token = result.credential.accesstoken;
      var user = result.user;
      var name = result.user.displayName;
      alert("Inició sesión como: "+name);
      setTimeout ("redireccionar()", 1000);
      //Mostrar nombre de usuario
      //$('#page').css('display', 'none') && $('#page2').css('display', 'block');
      //document.querySelector('span.mdl-layout-title').textContent = 'Bienvenido ' + name;
    }).catch(function(error){
      var errorCode = error.Code;
      var errorMessage = error.message;
      var errorEmail = error.email;
      var errorCred = error.credential;
      if(errorCode==='auth/account-exists-with-different-credential'){
        alert ("Ya hay un usuario ingresado con esta cuenta de correo electrónico");
      }
    });
  }
  else{
    firebase.auth().signOut();
  }
}

function LoginTwitter(){
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.TwitterAuthProvider();
    //provider.addScope('public_profile');
    firebase.auth().signInWithPopup(provider).then (function(result){
      var token = result.credential.accesstoken;
      var user = result.user;
      var name = result.user.displayName;
      alert("Inició sesión como: "+name);
      setTimeout ("redireccionar()", 1000);
      //Mostrar nombre de usuario
      //$('#page').css('display', 'none') && $('#page2').css('display', 'block');
      //document.querySelector('span.mdl-layout-title').textContent = 'Bienvenido ' + name;
    }).catch(function(error){
      var errorCode = error.Code;
      var errorMessage = error.message;
      var errorEmail = error.email;
      var errorCred = error.credential;
      if(errorCode==='auth/account-exists-with-different-credential'){
        alert("Ya hay un usuario ingresado con esta cuenta de correo electrónico");
      }
    });
  }
  else{
    firebase.auth().signOut();
  }
}

function LoginGitHub(){
  if(!firebase.auth().currentUser){
    var provider = new firebase.auth.GithubAuthProvider();
    provider.addScope('repo');
    firebase.auth().signInWithPopup(provider).then (function(result){
      var token = result.credential.accesstoken;
      var user = result.user;
      var name = result.user.displayName;
      alert("Inició sesión como: "+name);
      setTimeout ("redireccionar()", 1000);
      //Mostrar nombre de usuario
      //$('#page').css('display', 'none') && $('#page2').css('display', 'block');
      //document.querySelector('span.mdl-layout-title').textContent = 'Bienvenido ' + name;
    }).catch(function(error){
      var errorCode = error.Code;
      var errorMessage = error.message;
      var errorEmail = error.email;
      var errorCred = error.credential;
      if(errorCode==='auth/account-exists-with-different-credential'){
        alert ("Ya hay un usuario ingresado con esta cuenta de correo electrónico");
      }
    });
  }
  else{
    firebase.auth().signOut();
  }
}

document.getElementById('btn-gmail').addEventListener('click', LoginGmail, false);
document.getElementById('btn-facebook').addEventListener('click', LoginFacebook, false);
document.getElementById('btn-twitter').addEventListener('click', LoginTwitter, false);
document.getElementById('btn-github').addEventListener('click', LoginGitHub, false);
