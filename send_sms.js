// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(AC7d79047e12db70280cd399db6d3d0087, 989480309073bfe9cfc24ae4018988c9);
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  sendsms();
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});



function sendsms(){
    client.messages
      .create({
         body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
         from: '+17209612675',
         to: '+15558675310'
       })
      .then(message => console.log(message.sid));
      }
     