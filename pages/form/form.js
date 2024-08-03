  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
  import { getFirestore , collection , addDoc } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDLFIcw9eD6si8Pk8fUwlMnHur6vkt24Kc",
    authDomain: "hackathon-cc065.firebaseapp.com",
    projectId: "hackathon-cc065",
    storageBucket: "hackathon-cc065.appspot.com",
    messagingSenderId: "286603937434",
    appId: "1:286603937434:web:59d347ff95ee27dac98123",
    measurementId: "G-MVBX4JZHT6"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getFirestore();   
  
  let phone = document.getElementById("phone"); 
  let address = document.getElementById("address"); 
  let program = document.getElementById("program"); 
  let highschool = document.getElementById("highschool"); 
  let name = document.getElementById("name"); 
  let email = document.getElementById("email"); 
//   let password = document.getElementById("password"); 

// alert()
  window.uploadData = ()=>{
    let studentFormData = {

        phone : phone.value,
        address : address.value,
        program : program.value,
        highschool : highschool.value,
        name : name.value,
        email : email.value,
        // password : password.value
    }
   console.log(studentFormData);
   
        const refrence = collection(db,'StudentForm');
        const addUser =  addDoc( refrence,studentFormData).then((res)=>{
            console.log("add data");
            
        }).catch((err)=>{
            console.log(err);
            
        })
    
    
  }

  
