const express = require('express');

const sendMail = require('./mail')
const app = express();
const path = require('path') 




// const PORT = 8080;
http = require('http');

//Production
module.exports = {
    env: {
      EMAIL: process.env.EMAIL,
      PASSWORD: process.env.PASSWORD,
    }
  };

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));
// app.use(express.static('public'));


// Data parsing

app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());


app.post('/email',(req, res)=> {
    //TODO
    //send email here
    const {subject, email, text} = req.body;
    console.log('data:', req.body);

    sendMail(email, subject, text, (err, data) => {
        if(err){
            console.log('ERROR: ', err);
            res.status(500).json({message: 'Internal Error'});
        }else {
            console.log('Email envoyé');
            res.json({message: 'Email envoyé!!!!'})
        }
    });
})

//Page d'accueil

app.get('/',(req, res)=> {
    res.sendFile(path.join(__dirname,'/public/views', 'index.html'));
});

// Page d'erreur

app.get('/error', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views', 'error.html'));
});

// Confirmation d'envoie du mail

app.get('/email/sent', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/views', 'emailMessage.html'));
});

// app.listen(PORT,()=>{
//     console.log('le server a démarer sur le PORT',8080)
// }) 

http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
  });