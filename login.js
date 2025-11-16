// Firebase Config
const firebaseConfig = {
    apiKey: "AIzaSyBRknrR0HpkzyHcVPKdBLUhnUAWq9Za0Ow",
    authDomain: "ai-website-ea4bc.firebaseapp.com",
    projectId: "ai-website-ea4bc",
    storageBucket: "ai-website-ea4bc.firebasestorage.app",
    messagingSenderId: "429576811954",
    appId: "1:429576811954:web:5ea68f0d0ad922d34360ab"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Auth
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Google Button Click
document.getElementById("googleBtn").addEventListener("click", function () {

    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;

            alert("Login Successful: " + user.email);

            // Redirect page
            window.location.href = "dashboard.html";
        })
        .catch((error) => {
            console.error(error);
            alert("Error: " + error.message);
        });

});
