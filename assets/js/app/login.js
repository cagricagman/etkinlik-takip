$(document).ready(function () {
  var config = {
      apiKey: "AIzaSyCPOQs6HjTCv64O_0tuJfYGqM_kpZ1veaI",
      authDomain: "etkinlik-takip.firebaseapp.com",
      databaseURL: "https://etkinlik-takip.firebaseio.com",
      projectId: "etkinlik-takip",
      storageBucket: "etkinlik-takip.appspot.com",
      messagingSenderId: "944567601766"
    };
    firebase.initializeApp(config);

    $("#loginBtn").click(function () {
      var email = $("#email").val();
      var password = $("#password").val();
      firebase.auth().signInWithEmailAndPassword(email, password).then(function () {
        window.location.href = "index.html";
      }).catch(function(error){
        alert(error.message);
      })
    })
})
