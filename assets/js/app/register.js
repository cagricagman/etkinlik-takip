$(document).ready(function () {
  var config = {
    apiKey: "AIzaSyCdOXFZm_T5XZ-vGUrAmm27YYeVtbd89Lo",
    authDomain: "etkinlik-takibi.firebaseapp.com",
    databaseURL: "https://etkinlik-takibi.firebaseio.com",
    projectId: "etkinlik-takibi",
    storageBucket: "etkinlik-takibi.appspot.com",
    messagingSenderId: "688215679040"
  };
  firebase.initializeApp(config);

  $("#registerBtn").click(function () {
      var email = $("#email").val();
      var password = $("#password").val();
      firebase.auth().createUserWithEmailAndPassword(email, password).then(function () {
        firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
          window.location.href = "index.html";
        })
      }).catch(function (error) {
        alert(error.message);
      })
  })

})
