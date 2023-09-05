import React from 'react'
import './contact.css'
import { Button, Form } from 'react-bootstrap'
import send from '../../image/send-icon.svg'
const Contact = () => {

  const axios = require('axios');

async function sendEmail(name, email, subject, message) {
  const data = JSON.stringify({
    "Messages": [{
      "From": {"Email": "<YOUR EMAIL>", "Name": "<YOUR NAME>"},
      "To": [{"Email": email, "Name": name}],
      "Subject": subject,
      "TextPart": message
    }]
  });

  const config = {
    method: 'post',
    url: 'https://api.mailjet.com/v3.1/send',
    data: data,
    headers: {'Content-Type': 'application/json'},
    auth: {username: '<API Key>', password: '<Secret Key>'},
  };

  return axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });

}

// define your own email api which points to your server.
app.post('/api/sendemail/', function (req, res) {
  const {name, email, subject, message} = req.body;
  //implement your spam protection or checks.
  sendEmail(name, email, subject, message);
});

  return (
    <div className='contact text-center' id='contact'>
      <h3 className=' my-3'>Contact</h3>
       <Form className=' my-3'>
      <Form.Group className="my-3" controlId="formBasicEmail"> 
        <Form.Control type="text" placeholder="Full Name" />
      </Form.Group>
      <Form.Group className="my-3" controlId="formBasicEmail"> 
        <Form.Control type="email" placeholder="Email Address" />
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicPassword">
        <Form.Control type="text" className='heghit' placeholder="Your Message" />
      </Form.Group>
      <Button variant="primary" className='button fw-bold' type="submit">
        <img src={send} alt='send' style={{color: "white", marginRight:"10px"}} />Send Message
      </Button>
    </Form>
    </div>
  )
}

export default Contact
