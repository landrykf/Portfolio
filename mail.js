require('dotenv').config();

const nodemailer = require('nodemailer');



let transporter = nodemailer.createTransport({
    service : 'gmail',
    auth: {
        user:process.env.EMAIL,
        pass:process.env.PASSWORD
    }
});
// console.log(transporter)

// Chunk 4
let sendMail = (email, subject,text, cb) => {
    //step 2

let mailOptions = {
    from : email,
    to: 'lykoffi619@gmail.com',
    subject: subject,
    text: text
}

console.log(mailOptions);
// Step 3

transporter.sendMail(mailOptions, (err, data) => {
    if(err) {
       return cb(err, null);
    }else{
       return cb(null, data);
    }
});
}

module.exports = sendMail;


