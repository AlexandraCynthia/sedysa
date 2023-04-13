// // import { saveTask } from "./firebase.js"

// // window.addEventListener('DOMContentLoaded', ()=>{

// // })

// // const contactForm = document.getElementById('contactForm')

// // contactForm.addEventListener('submit', (e)=>{
// //     e.preventDefault()

// //     const namee = contactForm['namee']
// //     const email = contactForm['email']
// //     const subject = contactForm['subject']
// //     const message = contactForm['message']

// //    saveTask(namee.value, email.value, subject.value, message.value)




// // })


  
// const firebaseConfig = {
//     apiKey: "AIzaSyArL76RIDK23DkLfDlelCt7d1eGaMpiDqQ",
//     authDomain: "sedysa-e022c.firebaseapp.com",
//     databaseURL: "https://sedysa-e022c-default-rtdb.firebaseio.com",
//     projectId: "sedysa-e022c",
//     storageBucket: "sedysa-e022c.appspot.com",
//     messagingSenderId: "834625336477",
//     appId: "1:834625336477:web:591d88f9d52e9512e49074"
//   };
  
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);

//      // Create a new data
//      function createData() {
//         const newData = {
//             namee: document.getElementById("namee").value,
//             email: document.getElementById("email").value,
//             subject: document.getElementById("subject").value,
//             message: document.getElementById("message").value

//         };

//         firebase
//             .database()
//             .ref("orders/")
//             .push(newData);
//     }
       
//     // Read data
//     firebase
//     .database()
//     .ref("orders/")
//     .on("value", function (snapshot) {

//         document.getElementById("showUsers").innerHTML = "";
//         snapshot.forEach(function (childSnapshot) {
//             var key = childSnapshot.key;
//             var childData = childSnapshot.val();
//             let addDiv = document.createElement('div');
//             addDiv.className = "row";
//             addDiv.innerHTML =
//                 '  <div class="col-sm-3" style="padding: 10px;    word-break: break-word;">' +
//                 childData.namee +
//                 '</div><div class="col-sm-3" style="padding: 10px;    word-break: break-word;">' +
//                 childData.email +
//                 '</div><div class="col-sm-3" style="padding: 10px;">' + 
//                 childData.subject +
//                 '</div><div class="col-sm-3" style="padding: 10px;">' + 
//                 childData.message +
//                 '</div> <div class="col-sm-3"> <button type="button"  class="btn btn-info" onclick="updateData()">Update</button><button type="button" class="btn btn-danger" onclick="deleteData()">Delete</button></div>';
//             document.getElementById("showUsers").appendChild(addDiv);
//         });

//     });