
const firebaseConfig = {

    apiKey: "AIzaSyA6X7xLIIT0wPb8eMvGS2NIiLsmYrkiJ0M",
  
    authDomain: "esp2fb-ff2ff.firebaseapp.com",
  
    databaseURL: "https://esp2fb-ff2ff-default-rtdb.asia-southeast1.firebasedatabase.app",
  
    projectId: "esp2fb-ff2ff",
  
    storageBucket: "esp2fb-ff2ff.appspot.com",
  
    messagingSenderId: "70696485797",
  
    appId: "1:70696485797:web:63486f6028ea8822b69e4c"
  
};

firebase.initializeApp(firebaseConfig);

var firebaseRef = firebase.database().ref('Users/User1Details');

function sendDataFB()
{
    const Age = document.getElementById('Age').value
    const Height= document.getElementById('Height').value
    const Weight = document.getElementById('Weight').value

    console.log(typeof(Age),typeof(Height),typeof(Weight))

    // firebaseRef.push(Age);

}   