 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyArL76RIDK23DkLfDlelCt7d1eGaMpiDqQ",
    authDomain: "sedysa-e022c.firebaseapp.com",
    databaseURL: "https://sedysa-e022c-default-rtdb.firebaseio.com",
    projectId: "sedysa-e022c",
    storageBucket: "sedysa-e022c.appspot.com",
    messagingSenderId: "834625336477",
    appId: "1:834625336477:web:591d88f9d52e9512e49074"
  };

  //Initialize firebase
firebase.initializeApp(firebaseConfig);

// reference database
const contactFormDB = firebase.database().ref('sedysa')

document.getElementById('contactForm').addEventListener("submit", submitForm)


function submitForm(e){
    e.preventDefault();

    var namee = getElementVal('namee');
    var email = getElementVal('email');
    var subject = getElementVal('subject');
    var message = getElementVal('message');

    saveMessages(namee, email, subject, message)

//Enable alert
document.querySelector(".sent-message").style.display = 'block';

//remove the alert
setTimeout(()=>{
document.querySelector(".sent-message").style.display = "none";
}, 3000);

//reset the form
document.getElementById("contactForm").reset();

}


const saveMessages = (namee, email, subject, message) =>{
    var newContactForm = contactFormDB.push();

    newContactForm.set({
        namee: namee,
        email: email,
        subject: subject,
        message: message,
    })

}


const getElementVal = (id) =>{
    return document.getElementById(id).value;

}



