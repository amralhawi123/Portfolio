import React from 'react'
import './portfolio.css'
import { Card, Col, Row } from 'react-bootstrap' 
import ecommerce from '../../image/ecommerce/E-Commerce - Personal - Microsoft​ Edge 8_4_2023 10_56_34 AM.png'
import dashboard from '../../image/dashboard/Frindes.jpg'
import movies from '../../image/movies/Screenshot_2023-07-25_11-49-46.png'
import resturant from '../../image/resturant/Restaurant - Google Chrome 7_25_2023 2_06_54 PM.png'
import shopping from '../../image/shopping-cart/Screenshot_2023-08-02_15-48-21.png'
import admain from '../../image/admain/Dashboard and 2 more pages - Personal - Microsoft​ Edge 8_23_2023 10_50_29 PM.png'
import template from '../../image/html,css/Elhawi - Google Chrome 8_22_2022 9_33_56 AM.png'
import temp3 from '../../image/templat/tem3.png'
import auth from '../../image/templat/tem3.png'
import template2 from '../../image/templat/Dashboard and 2 more pages - Personal - Microsoft​ Edge 8_23_2023 10_54_05 PM.png'
import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className='portfolio text-center' id='portfolio'>
      <h3 className=' my-3'>Portfolio</h3>
      <div className='box gap-3'>
         <Row>
            <Col xs={12} md={4} className='mb-3'>
              <Link to='https://e-commerce-amr.netlify.app/'>              
            <Card>
      <Card.Img variant="top" src={ecommerce} style={{height:"250px"}}/>
      <Card.Body className='d-flex algin-items-center gap-3 justify-content-center'>
        <Card.Title>E-Commerce Store</Card.Title>
        <Card.Text>
          <i class='fa-solid fa-arrow-up-right-from-square'></i>
        </Card.Text>
      </Card.Body>
    </Card>
              </Link>
            </Col>
            <Col xs={12} md={4} className='mb-3'>
            <Link to='https://amralhawi123.github.io/Dashboard/'>
            <Card>
      <Card.Img variant="top" src={dashboard} style={{height:"250px"}}/>
      <Card.Body className='d-flex algin-items-center gap-3 justify-content-center'>
        <Card.Title>Dashboard App</Card.Title>
        <Card.Text>
          <i class='fa-solid fa-arrow-up-right-from-square'></i>
        </Card.Text>
      </Card.Body>
    </Card>
            </Link>
            </Col>
            <Col xs={12} md={4} className='mb-3'>
            <Link to='https://movies-by-redux.netlify.app/'>
            <Card>
      <Card.Img variant="top" src={movies} style={{height:"250px"}}/>
      <Card.Body className='d-flex algin-items-center gap-3 justify-content-center'>
        <Card.Title>Movies</Card.Title>
        <Card.Text>
          <i class='fa-solid fa-arrow-up-right-from-square'></i>
        </Card.Text>
      </Card.Body>
    </Card>
            </Link>
            </Col>
            <Col xs={12} md={4} className='my-3 '>
            <Link to='https://shopping-cart-amr.netlify.app/'>
            <Card>
      <Card.Img variant="top" src={shopping} style={{height:"250px"}}/>
      <Card.Body className='d-flex algin-items-center gap-3 justify-content-center'>
        <Card.Title>Shopping Cart App</Card.Title>
        <Card.Text>
          <i class='fa-solid fa-arrow-up-right-from-square'></i>
        </Card.Text>
      </Card.Body>
    </Card>
            </Link>
            </Col>
            <Col xs={12} md={4} className='my-3 '>
            <Link to='https://amralhawi123.github.io/Admain/'>
            <Card>
      <Card.Img variant="top" src={admain} style={{height:"250px"}}/>
      <Card.Body className='d-flex algin-items-center gap-3 justify-content-center'>
        <Card.Title>Admain Page App</Card.Title>
        <Card.Text>
          <i class='fa-solid fa-arrow-up-right-from-square'></i>
        </Card.Text>
      </Card.Body>
    </Card>
            </Link>
            </Col>
            <Col xs={12} md={4} className='my-3 '>
            <Link to='https://amralhawi123.github.io/first-my-web/'>
            <Card>
      <Card.Img variant="top" src={template2} style={{height:"250px"}}/>
      <Card.Body className='d-flex algin-items-center gap-3 justify-content-center'>
        <Card.Title>Template 'HTML,CSS'</Card.Title>
        <Card.Text>
          <i class='fa-solid fa-arrow-up-right-from-square'></i>
        </Card.Text>
      </Card.Body>
    </Card>
            </Link>
            </Col>
            <Col xs={12} md={4} className='my-3 '>
            <Link to='https://restaurant-with-react-amr.netlify.app/'>
            <Card>
      <Card.Img variant="top" src={resturant} style={{height:"250px"}}/>
      <Card.Body className='d-flex algin-items-center gap-3 justify-content-center'>
        <Card.Title>Resturant App</Card.Title>
        <Card.Text>
          <i class='fa-solid fa-arrow-up-right-from-square'></i>
        </Card.Text>
      </Card.Body>
    </Card>
            </Link>
            </Col>
            <Col xs={12} md={4} className='my-3 '>
            <Link to='https://amralhawi123.github.io/Elhawi/'>
            <Card>
      <Card.Img variant="top" src={temp3} style={{height:"250px"}}/>
      <Card.Body className='d-flex algin-items-center gap-3 justify-content-center'>
        <Card.Title>Template 'HTML,CSS'</Card.Title>
        <Card.Text>
          <i class='fa-solid fa-arrow-up-right-from-square'></i>
        </Card.Text>
      </Card.Body>
    </Card>
            </Link>
            </Col>
            <Col xs={12} md={4} className='my-3 '>
            <Link to='https://amralhawi123.github.io/Html-and-css-Project/'>
            <Card>
      <Card.Img variant="top" src={template} style={{height:"250px"}}/>
      <Card.Body className='d-flex algin-items-center gap-3 justify-content-center'>
        <Card.Title>Template 'HTML,CSS'</Card.Title>
        <Card.Text>
          <i class='fa-solid fa-arrow-up-right-from-square'></i>
        </Card.Text>
      </Card.Body>
    </Card>
            </Link>
            </Col>
            <Col xs={12} md={4} className='my-3 '>
            <Link to='https://amralhawi123.github.io/Html-and-css-Project/'>
            <Card>
      <Card.Img variant="top" src={template} style={{height:"250px"}}/>
      <Card.Body className='d-flex algin-items-center gap-3 justify-content-center'>
        <Card.Title> Authentication</Card.Title>
        <Card.Text>
          <i class='fa-solid fa-arrow-up-right-from-square'></i>
        </Card.Text>
      </Card.Body>
    </Card>
            </Link>
            </Col>
         </Row>
      </div>
    </div>
  )
}

export default Portfolio
