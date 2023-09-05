import React from 'react'
import './contact.css'
import { Button, Form } from 'react-bootstrap'
const Contact = () => {
  return (
    <div className='contact'>
       <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="text" className='heghit' placeholder="Write your message" />
      </Form.Group>
      <Button variant="primary" className='button' type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Contact
