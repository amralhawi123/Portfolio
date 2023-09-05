import React, { useState } from 'react'
import './contact.css'
import { Button, Form } from 'react-bootstrap'
import send from '../../image/send-icon.svg' 


const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  
  return (
    <div className='contact text-center' id='contact'>
      <h3 className=' my-3'>Contact</h3>
       <Form className=' my-3'>
      <Form.Group className="my-3" controlId="formBasicEmail"> 
        <Form.Control type="text" placeholder="Full Name" value={name}
          onChange={(e) => setName(e.target.value)}/>
      </Form.Group>
      <Form.Group className="my-3" controlId="formBasicEmail"> 
        <Form.Control type="email" placeholder="Email Address" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicPassword">
        <Form.Control type="text" className='heghit' placeholder="Your Message" value={message}
          onChange={(e) => setMessage(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" className='button fw-bold' type="submit">
        <img src={send} alt='send' style={{color: "white", marginRight:"10px"}} />Send Message
      </Button>
    </Form>
    </div>
  )
}

export default Contact
