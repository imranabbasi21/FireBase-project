
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
import { getAuth,
     createUserWithEmailAndPassword,
     signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyBiuX_mPwiXHvK5YlymmF3IpQiz-QQezZU",
    authDomain: "facebook-login-clone-fc496.firebaseapp.com",
    projectId: "facebook-login-clone-fc496",
    storageBucket: "facebook-login-clone-fc496.appspot.com",
    messagingSenderId: "297630487781",
    appId: "1:297630487781:web:c7f3665242fe15351f300c",
    measurementId: "G-T3H5ES88W1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

const signupForm = document.getElementById('signupForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const signupButton = document.getElementById('signupbtn');

// Login 
const LoginForm = document.getElementById('LoginForm');
const Login_email = document.getElementById('Login_email');
const login_password = document.getElementById('login_password');
const Login_btn = document.getElementById('Login_btn');


// signupForm
signupForm.addEventListener('submit', (e) => {

    e.preventDefault();
});

// login
LoginForm.addEventListener('submit', (e) => {

    e.preventDefault();
});

signupButton.addEventListener('click', creteUserAccount)

function creteUserAccount() {
    createUserWithEmailAndPassword(auth, email.value, password.value)
    console.log(email.value)
    console.log(password.value)

        .then((userCredential) => {
            const user = userCredential.user;
            alert("User successfully Create")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);

        });
}

LoginForm.addEventListener('click', loginUserAccount)


function loginUserAccount(){
    signInWithEmailAndPassword(auth, Login_email.value, login_password.value)
  .then((userCredential) => {
    alert('User successfully Login')
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
});
}




