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


document.getElementById("login-submit").addEventListener("click", loginUser);

function loginUser() {
    const username = document.getElementById("inputUserName").value;
    const password = document.getElementById("inputPassword").value;
    console.log(username);
    console.log(password);

    const promise = auth.signInWithEmailAndPassword(username, password);
    alert("You've logged in!");

    promise.catch(function(err) {
        alert("Login failed")
    })

    
}

}); // DOCUMENT READY CLOSING