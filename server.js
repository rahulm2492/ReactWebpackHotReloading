
var express=require('express');
var nodemailer = require("nodemailer");
var path = require('path');
var bodyParser = require("body-parser");
var app=express();
var smtpTransport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: "mailtorahul2485@gmail.com",
        pass: "Delhi@#92"
    }
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname,  'build')));

app.listen(3000,function(){
console.log("Express Started on Port 3000");
});

app.get('*', (req, res) => {
	var mailOptions={
   to : "ruchi11dec@gmail.com",
   subject : "Test Mail",
   text : "Greetings"
}
console.log(mailOptions);
//smtpTransport.sendMail(mailOptions, function(error, response){
// if(error){
// console.log(error);
// res.end("error");
// }else{
// console.log("Message sent: " + response);
// res.end("sent");
// }
// });
  res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.post('/set', (req, res) => {
	console.log(req.body);
	res.send("ok");
});