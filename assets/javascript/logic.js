$(document).ready(function() { // DOCUMENT READY OPENING

  // Initialize Firebase
  let config = {
    apiKey: "AIzaSyCvr9aO-x8SQyf2E5_go8RDgYFOGv_Bx_g",
    authDomain: "immirex-b56dd.firebaseapp.com",
    databaseURL: "https://immirex-b56dd.firebaseio.com",
    projectId: "immirex-b56dd",
    storageBucket: "",
    messagingSenderId: "533658082982"
  };
  firebase.initializeApp(config);

  let database = firebase.database().ref();
  let provider = new firebase.auth.GoogleAuthProvider();


document.getElementById("login-submit").addEventListener("click", loginUser);

function loginUser() {
    let username = document.getElementById("inputUserName").value;
    let password = document.getElementById("inputPassword").value;
    console.log(username);
    console.log(password);
    console.log(dataUser)

    // if (database.users.username === username) {
    //     console.log("username matches!");
    // }
    // console.log("username DOES NOT MATCH");

    
}

}); // DOCUMENT READY CLOSING