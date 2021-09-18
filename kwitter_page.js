const firebaseConfig = {
      apiKey: "AIzaSyCxwlWgh--YN7YE2BgWk4liOmpA8085Ejw",
      authDomain: "kwitter-28eb3.firebaseapp.com",
      databaseURL: "https://kwitter-28eb3-default-rtdb.firebaseio.com",
      projectId: "kwitter-28eb3",
      storageBucket: "kwitter-28eb3.appspot.com",
      messagingSenderId: "1084792390645",
      appId: "1:1084792390645:web:9d06786a1187e61d7956bc",
      measurementId: "G-5QSQ7Z8FLV"
    };
    
    const app = initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}

    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         

      } });  }); }
getData();

function logout()
{
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}
