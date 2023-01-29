const methodOverride = require('method-override');
const express = require('express');
const app = express();
const nodemailer = require("nodemailer");
const cors = require('cors')

// CONFIGURATION / MIDDLEWARE
require('dotenv').config()
app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))
app.use(cors());
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          type: "OAuth2",
          user: process.env.EMAIL,
          pass: process.env.WORD,
          clientId: process.env.OAUTH_CLIENTID,
          clientSecret: process.env.OAUTH_CLIENT_SECRET,
          refreshToken: process.env.OAUTH_REFRESH_TOKEN,
        },
       });

    //verify connection 
    transporter.verify((err, success) => {
        err
          ? console.log(err)
          : console.log(`=== Server is ready to take messages: ${success} ===`);
       });
  
    // send mail with defined transport object
    app.post("/send", function (req, res) {
        let mailOptions = {
          from: "sdsu.p2msa.04@gmail.com",
          to: process.env.EMAIL,
          subject: "Nodemailer API",
          text: "Hi from your nodemailer API",
        };
       
        transporter.sendMail(mailOptions, function (err, data) {
          if (err) {
            console.log("Error " + err);
          } else {
            console.log("Email sent successfully");
            res.json({ status: "Email sent" });
          }
        });
       });
  


// ROOT
app.get('/home', (req, res) => {
    res.render('playlist')
})

// LISTEN
app.listen(process.env.PORT, () => {
    console.log(`🎸 Jammin' on port: ${process.env.PORT}`)
})




