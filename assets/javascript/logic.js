$(document).ready(function() { // DOCUMENT READY OPENING

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
    document.getElementById("user-box").style.display = "block";
    document.getElementById("login-box").style.display = "none";
    document.getElementById("logout-box").style.display = "block";
  } else {
    // No user is signed in.
    document.body.style.backgroundImage = "url(assets/images/foggy_bridge.jpg)";
    document.getElementById("user-box").style.display = "none";
    document.getElementById("login-box").style.display = "block";
    document.getElementById("logout-box").style.display = "none";
  }
});

document.getElementById("login-submit").addEventListener("click", loginUser);

function loginUser() {
    const username = document.getElementById("inputUserName").value;
    const password = document.getElementById("inputPassword").value;
    document.getElementById("user").innerHTML = username;
    initialize()

    auth.signInWithEmailAndPassword(username, password).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      window.alert(errorMessage);
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
}


}); // DOCUMENT READY CLOSING