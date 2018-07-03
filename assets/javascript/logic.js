$(document).ready(function() { // DOCUMENT READY OPENING

  const allElements = document.querySelectorAll("#intro-field, #client-body, #forms-body, #search-body, #calender-body, #settings-body")
  const bodyElements = [...allElements];
  
  // bodyElements.forEach(element => {
  //   console.log(element);
  // })

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyCvr9aO-x8SQyf2E5_go8RDgYFOGv_Bx_g",
    authDomain: "immirex-b56dd.firebaseapp.com",
    databaseURL: "https://immirex-b56dd.firebaseio.com",
    projectId: "immirex-b56dd",
    storageBucket: "",
    messagingSenderId: "533658082982"
  };
  firebase.initializeApp(config);

  const database = firebase.database().ref();
  const auth = firebase.auth();

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    console.log(user)
    document.getElementById("user").innerHTML = user.email;
    document.getElementById("logout-box").style.display = "block";
    document.getElementById("user-box").style.display = "block";
    document.getElementById("intro-box").style.display = "block";
    document.getElementById("login-box").style.display = "none";
    initialize()
  } else {
    // No user is signed in.
    document.body.style.backgroundImage = "url(assets/images/foggy_bridge.jpg)";
    document.getElementById("logout-box").style.display = "none";
    document.getElementById("user-box").style.display = "none";
    document.getElementById("intro-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
  }
});

document.getElementById("login-submit").addEventListener("click", loginUser);

function loginUser() {
    const username = document.getElementById("inputUserName").value;
    const password = document.getElementById("inputPassword").value;

    auth.signInWithEmailAndPassword(username, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage + " " + errorCode);
    });
}

document.getElementById("logout").addEventListener("click", function() {
  auth.signOut().then(function() {
    // Sign-out successful.
    alert("You have signed out!")
  }).catch(function(error) {
    // An error happened.
    window.alert("There appears to be an issue. Try again!")
  });
});

function initialize() {
  console.log("It works!")
  document.body.style.backgroundImage = "url(assets/images/rushmore.jpg)";
  document.getElementById("user").addEventListener("click", userAccess);
  document.getElementById("home-access").addEventListener("click", homeAccess);
  document.getElementById("client-access").addEventListener("click", clientAccess);
  document.getElementById("forms-access").addEventListener("click", formsAccess);
  document.getElementById("search-access").addEventListener("click", searchAccess);
  document.getElementById("calender-access").addEventListener("click", calenderAccess);
  document.getElementById("settings-access").addEventListener("click", settingsAccess);
  
}

function userAccess(){
  console.log("user access");
}

function homeAccess(){
  console.log("home access");
  document.getElementById("intro-field").style.display = "block";
  document.getElementById("client-body").style.display = "none";
  document.getElementById("forms-body").style.display = "none";
  document.getElementById("search-body").style.display = "none";
  document.getElementById("calender-body").style.display = "none";
  document.getElementById("settings-body").style.display = "none";
}

function clientAccess(){
  console.log("client access");
  document.getElementById("intro-field").style.display = "none";
  document.getElementById("client-body").style.display = "block";
  document.getElementById("forms-body").style.display = "none";
  document.getElementById("search-body").style.display = "none";
  document.getElementById("calender-body").style.display = "none";
  document.getElementById("settings-body").style.display = "none";
}

function formsAccess(){
  console.log("forms access");
  document.getElementById("intro-field").style.display = "none";
  document.getElementById("client-body").style.display = "none";
  document.getElementById("forms-body").style.display = "block";
  document.getElementById("search-body").style.display = "none";
  document.getElementById("calender-body").style.display = "none";
  document.getElementById("settings-body").style.display = "none";
}

function searchAccess(){
  console.log("search access");
  document.getElementById("intro-field").style.display = "none";
  document.getElementById("client-body").style.display = "none";
  document.getElementById("forms-body").style.display = "none";
  document.getElementById("search-body").style.display = "block";
  document.getElementById("calender-body").style.display = "none";
  document.getElementById("settings-body").style.display = "none";
}

function calenderAccess(){
  console.log("calender access");
  document.getElementById("intro-field").style.display = "none";
  document.getElementById("client-body").style.display = "none";
  document.getElementById("forms-body").style.display = "none";
  document.getElementById("search-body").style.display = "none";
  document.getElementById("calender-body").style.display = "block";
  document.getElementById("settings-body").style.display = "none";

}

function settingsAccess(){
  console.log("settings access");
  document.getElementById("intro-field").style.display = "none";
  document.getElementById("client-body").style.display = "none";
  document.getElementById("forms-body").style.display = "none";
  document.getElementById("search-body").style.display = "none";
  document.getElementById("calender-body").style.display = "none";
  document.getElementById("settings-body").style.display = "block";
}

}); // DOCUMENT READY CLOSING