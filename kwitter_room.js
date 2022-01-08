
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDwckSq4t-uB70hgsPIQU4ZWxF5xT2AvQ0",
      authDomain: "kwitter-92cd1.firebaseapp.com",
      databaseURL: "https://kwitter-92cd1-default-rtdb.firebaseio.com",
      projectId: "kwitter-92cd1",
      storageBucket: "kwitter-92cd1.appspot.com",
      messagingSenderId: "355565288286",
      appId: "1:355565288286:web:872b2652d6446b9fe66dcf"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
