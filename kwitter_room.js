
var firebaseConfig = {
      apiKey: "AIzaSyCxwlWgh--YN7YE2BgWk4liOmpA8085Ejw",
      authDomain: "kwitter-28eb3.firebaseapp.com",
      databaseURL: "https://kwitter-28eb3-default-rtdb.firebaseio.com",
      projectId: "kwitter-28eb3",
      storageBucket: "kwitter-28eb3.appspot.com",
      messagingSenderId: "1084792390645",
      appId: "1:1084792390645:web:9d06786a1187e61d7956bc",
      measurementId: "G-5QSQ7Z8FLV"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

    function addRoom()
    {
          room_name = document.getElementById("room_name").value;
          firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
          });
          localStorage.setitem("room_name", room_name);
          window.locaiton = "kwitter_page.html";    
         }

    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setitem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}