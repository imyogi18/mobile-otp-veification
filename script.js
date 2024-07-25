 // Initialize Firebase

const firebaseConfig = {

apiKey: "AlzaSyB-wDj4Hr6-hqiha1QZbTKQoTRP2ISOxnA",

authDomain: "mobile-verification.firebaseapp.com",

projectid: "mobile-verification",

storageBucket: "mobile-verification.appspot.com",

messagingSenderld: "1012257383407",

appld:

"1:1012257383407:web:6f1ddefb31fa1d46bf4c1a", measurementId: "G-7DY36JTLH8" };

firebase.initializeApp (firebase Config);

let recaptchaVerifier;

document.addEventListener("DOMContentLoaded",

function() {

// Initialize reCAPTCHA verifier

recaptchaVerifier = new

firebase.auth.Recaptcha Verifier('recaptcha-container', {

'size': 'invisible',

'callback': function(response) {

console.log('reCAPTCHA resolved');

}

});

// Render reCAPTCHA

recaptchaVerifier.render().then(function(widgetId) {

window.recaptchaWidgetId = widgetld;

).catch(function(error) { }

console.error("reCAPTCHA rendering failed: ", error); });

});

function phoneAuth() {

// Function to send OTP
 var phoneNumber =

document.getElementById('number').value;

firebase.auth().signInWithPhoneNumber(phoneNumber, recaptchaVerifier)

.then(function (confirmationResult) {

window.confirmationResult = confirmationResult;

document.getElementById('sender').style.display =

document.getElementById('verifier').style.display =

'none';

'block';

}).catch(function (error) {

console.error("Error sending SMS: ", error); });

}

// Function to verify OTP

function codeVerify() {

var code =

document.getElementById('verificationcode').value;

confirmationResult.confirm(code)

.then(function (result) {

var user = result.user;

document.getElementById('verification- result').innerText = "Number verified";

)).catch(function (error) {

document.getElementById('verification- result').innerText = "Incorrect OTP"; console.error("Error verifying OTP: ", error); });

}