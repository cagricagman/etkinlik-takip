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

  var current_user = "";

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      current_user = user.uid;
      $("#logout").click(function () {
        firebase.auth().signOut().then(function () {
          window.location.href = "login.html";
        })
      })

      $(".sendToFireBase").click(function () {
        var description = $("#description").val();
        firebase.database().ref().child("users").child(current_user).child("etkinlik").push({
          description : description,
          completed : false
        });
        $("#description").val('');
      })

    }
  })
})
