import React from 'react'
import './contact.css'
import { Button, Form } from 'react-bootstrap'
import s
const Contact = () => {
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
      <Button variant="primary" className='button' type="submit">
        Send Message
      </Button>
    </Form>
    </div>
  )
}

export default Contact
