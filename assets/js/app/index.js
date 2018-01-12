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

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      $("#logout").click(function () {
        firebase.auth().signOut().then(function () {
          window.location.href = "login.html";
        })
      })
    }
  })
})
