import React, { useRef } from 'react'
import './contact.css'
import { Button, Form } from 'react-bootstrap'
import send from '../../image/send-icon.svg' 
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs.sendForm('service_i6yi05q', 'template_r45p4t9', form.current, 'bmDvXlGfjKeVmojSd')
    .then((result) => {
        alert();
    }, (error) => {
        console.log(error.text);
    });
     
  }

  return (
    <div className='contact text-center' id='contact'>
      <h3 className=' my-3'>Contact</h3>
       <Form className=' my-3' ref={form} onSubmit={sendEmail}>
      <Form.Group className="my-3" controlId="formBasicEmail"> 
        <Form.Control type="text" placeholder="Full Name" name="name"/>
      </Form.Group>
      <Form.Group className="my-3" controlId="formBasicEmail"> 
        <Form.Control type="email" placeholder="Email Address" name="email"/>
      </Form.Group>

      <Form.Group className="my-3" controlId="formBasicPassword">
        <Form.Control type="text" className='heghit' placeholder="Your Message" name='message'/>
      </Form.Group>
      <Button variant="primary" className='button fw-bold' type="submit" >
        <img src={send} alt='send' style={{color: "white", marginRight:"10px"}} />Send Message
      </Button>
    </Form>
    </div>
  )
}

export default Contact
