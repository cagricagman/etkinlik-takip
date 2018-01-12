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

      var todoRef = firebase.database().ref().child("users/" + current_user).child("etkinlik");
      todoRef.on("value", function(snapshot){

          var $parent = $(".todoList").children("tbody");

          $parent.html('');

          snapshot.forEach(function(item){

              var completed = item.val().completed == true ? "checked" : "";

              var description_elem = "<td>" + item.val().description + "</td>";
              var completed_elem = "<td class='text-center'><input data-key='" + item.key + "' type='checkbox' class='switchery-plugin' " + completed + "/></td>";
              var removeBtn_elem = "<td class='text-center'><button data-key='" + item.key + "' class='btn btn-danger btn-block removeBtn'>Sil</button></td>";

              $parent.append("<tr>" + description_elem + completed_elem + removeBtn_elem + "</tr>");

          })

          $(".switchery-plugin").each(function(){
              new Switchery(this);
          })
      });


    }
  })
})
