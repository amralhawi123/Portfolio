import React from 'react'
import './about.css'
import material from '../../image/material-ui.svg'
import NEXT from '../../image/next-js.svg'
import ps from '../../image/photoshop.png'
import ai from '../../image/adobe-illustrator.png'
const About = () => {

  return (
    <div className='about text-center' id='about'>
         <h3 className='mt-4 font-three'>About Me</h3>
      <div className='box '>
        <div className='tec'>
         <p className='fs-5'>Hi, My name is <span style={{color:"darkorange"}}>Amr Mahmoud Alhawi</span> , As a Frontend Developer, I specialize in crafting modern, clean, and responsive websites that offer the best user experience.
          Feel free to explore my portfolio to discover my latest projects and learn more about my skills and experience in the field.</p>
 <p className='fs-5'>My job is to build your website to be functional, user-friendly, and attractive. Moreover, I add a personal touch to your product and
   make sure that it is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many companies.</p>
 <p className='fs-5'>Experienced working with teams to produce impactful, leading-edge websites that engage customers and deliver business results. Well-versed in design standards and user preferences.</p>
        </div>
        <div className='tec tecn1'>
              <div className='text-start my-3 fs-5'><span className='fw-bold' style={{color:"darkorange"}}>Birthday:-  </span> 15/9/2002</div>
              <div className='text-start my-3 fs-5'><span className='fw-bold' style={{color:"darkorange"}}>Age:-  </span> 21</div>
              <div className='text-start my-3 fs-5'><span className='fw-bold' style={{color:"darkorange"}}>Address:-  </span> El-Husainiya, Alsharqia, Egypt</div>
              <div className='text-start my-3 fs-5'><span className='fw-bold' style={{color:"darkorange"}}>Email:-  </span> amralhawi@gmail.com</div>
              <div className='text-start my-3 fs-5'><span className='fw-bold' style={{color:"darkorange"}}>Phone:-  </span> 01061064978</div>
              <div className='text-start my-3 fs-5'><span className='fw-bold' style={{color:"darkorange"}}>Education:-  </span> Faculty of Engineering, Al-Azhar University </div>
              <div className='text-start my-3 fs-5'><span className='fw-bold' style={{color:"darkorange"}}>Nationality:-  </span> Egyption</div>
        </div>
      <section class="skill">
      <h4 className='font-three mb-4'>Technical Skill</h4>
            <ul className="skills-list">
              <li className="skills-item">
              <i class="fa-brands fa-html5"></i>
                <h5 style={{color:"white"}}>HTML</h5>
              </li>
              <li className="skills-item">
              <i className="fa-brands fa-css3-alt"></i>
                <h5 style={{color:"white"}}>CSS</h5>
              </li>
              <li className="skills-item">
              <i class="fa-brands fa-bootstrap"></i>
                <h5 style={{color:"white"}}>BOOTSTRAP</h5>
              </li>
              <li className="skills-item">
              <i class="fa-brands fa-square-js"></i>
                <h5 style={{color:"white"}}>JAVASCRIPT</h5>
              </li>
              <li className="skills-item">
              <i class="fa-brands fa-react"></i>
                <h5 style={{color:"white"}}>REACT.JS</h5>
              </li>
              <li className="skills-item">
              <i class="bx bxl-redux" ></i>
                <h5 style={{color:"white"}}>REDUX </h5>
              </li>
              <li className="skills-item">
              <img src={material} alt="Material UI Icon"/>
                <h5 style={{color:"white" , textTransform:"uppercase"}}>Material-UI</h5>
              </li>
              <li className="skills-item">
              <i class="fa-brands fa-git-alt"></i>
                <h5 style={{color:"white"}}>GIT</h5>
              </li>
              <li className="skills-item">
              <i class="fa-brands fa-github"></i>
                <h5 style={{color:"white"}}>GITHUB</h5>
              </li>
              <li className="skills-item">
              <img src={NEXT} alt="Next JS Icon"/>
                <h5 style={{color:"white"}}>NEXT.JS</h5>
              </li>
              <li className="skills-item">
              <i class="bx bxl-mongodb"></i>
                <h5 style={{color:"white", textTransform:"uppercase"}}>MongoDB</h5>
              </li>
              <li className="skills-item">
              <i class="bx bxl-firebase"></i>
                <h5 style={{color:"white", textTransform:"uppercase"}}>Firebase</h5>
              </li>
              <li className="skills-item">
              <img src={ps} alt="photoshop"/>
                <h5 style={{color:"white", textTransform:"uppercase"}}>photoshop </h5>
              </li>
              <li className="skills-item">
              <img src={ai} alt="illustrator "/>
                <h5 style={{color:"white", textTransform:"uppercase"}}>illustrator </h5>
              </li>
            </ul>
          </section>
      </div>
    </div>
  )
}

export default About
