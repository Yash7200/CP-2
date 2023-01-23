// var app=require("./otp.js")
var form=document.getElementById("myForm");

/* form.addEventListener("submit", function (e) {
e.preventDefault();
    var email = document.getElementById("email").value;
    console.log(email);
  }); */
  /* var sendButton = document.getElementById("send-button");
  sendButton.addEventListener("click", function() {
    var email = document.getElementById("email").value;
    console.log(email);
  }); */

/* form.addEventListener("DOMContentLoaded", function(e) {
    var sendButton = document.getElementById("sotp");
    sendButton.addEventListener("click", function(s) {
        //e.preventDefault();
        var email = document.getElementById("email").value;
        // var inputValue=document.querySelector("#myForm [name=email]").value;
        console.log(email);
    });
}); */



// Get the button and input by their id
const button = document.getElementById("sotp");
const input = document.getElementById("email");

// Add an event listener to the button that listens for clicks
button.addEventListener("click", function() {
    // Get the value of the input field
    const email = input.value;
    alert(email);       
    /*const nodemailer = require("C:\\Users\\yashg\\AppData\\Roaming\\npm\\node_modules\\nodemailer");
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rakeshgandhi7200@gmail.com',
            pass: 'csvxykjghfbcntrx'
        }
    });
    const OTP=app.OTP();
    var mailOptions = {
        from: 'rakeshgandhi7200@gmail.com',
        to: email,
        subject: 'Sending Email using Node.js',
        text: 'Your OTP is '+OTP
    };    
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });*/
});