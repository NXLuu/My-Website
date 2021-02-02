var firebaseConfig = {
    apiKey: "AIzaSyCKkJr5FYrvgt3blMKg8cw6DfQHg0i4Jbc",
    authDomain: "my-portfolio-9e8da.firebaseapp.com",
    databaseURL: "https://my-portfolio-9e8da-default-rtdb.firebaseio.com",
    projectId: "my-portfolio-9e8da",
    storageBucket: "my-portfolio-9e8da.appspot.com",
    messagingSenderId: "991734361872",
    appId: "1:991734361872:web:7ca351d8b4c35cb1a57f95",
    measurementId: "G-KLH57RDDF1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var tel = getInputVal('phone');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');
  // Save message
  saveMessage(name, tel, email, phone, message);

//   Show alert
  document.querySelector('.alert').style.display = 'block';

//   Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

//   Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, company, email, phone, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    tel:company,
    email:email,
    phone:phone,
    message:message
  });
}