import React from 'react'
import './landing.css'
import landingimg from '../../image/455.jpg'
import cv from '../../image/Amr Mahmoud Alhawi.pdf'

const Landing = () => {
   class TxtType {
      constructor(el, toRotate, period) {
         this.toRotate = toRotate;
         this.el = el;
         this.loopNum = 0;
         this.period = parseInt(period, 10) || 2000;
         this.txt = '';
         this.tick();
         this.isDeleting = false;
      }
      tick() {
         var i = this.loopNum % this.toRotate.length;
         var fullTxt = this.toRotate[i];

         if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
         } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
         }

         this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

         var that = this;
         var delta = 200 - Math.random() * 100;

         if (this.isDeleting) { delta /= 2; }

         if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
         } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
         }

         setTimeout(function () {
            that.tick();
         }, delta);
      }
   }


  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
      document.body.appendChild(css);
  };

  return (
    <div className='landing d-flex align-items-center justify-content-between' id='home'>
      <div className='info'>
         <h2>
             Hi,<br/>
            I'm <span>Amr</span>,<br/>
            <a href="#amr" class="typewrite" data-period="5000" data-type='[ "Front End Developer.", "Graphic Design" ]'>
    <span class="wrap"></span>
  </a> 
         </h2>
         <p>Front End Developer / Graphic Design</p>
         <div className='links d-flex algin-items-center gap-4'>
            <a href='https://www.facebook.com/profile.php?id=100010710422335'>
         <i class="fa-brands fa-facebook" style={{color:"darkorange", fontSize:"25px" }}></i>
            </a>
            <a href='https://www.linkedin.com/in/amr-mahmoud-alhawi-9644b0249'>
         <i class="fa-brands fa-linkedin" style={{color:"white", fontSize:"25px" }}></i>
            </a>
            <a href='https://github.com/amralhawi123'>
         <i class="fa-brands fa-github" style={{color:"darkorange", fontSize:"25px" }}></i>
            </a>
            <a href='https://www.behance.net/mrhwi'>
         <i class="fa-brands fa-square-behance" style={{color:"white", fontSize:"25px" }}></i>
            </a>
         </div>
         <div
          style={{
            backgroundColor:"darkorange",
            borderRadius:"10px",
            color:"black",
            width: "fit-content",
    padding: "8px 49px",
    marginTop: "20px",
          }}>
         <a href={cv} style={{textDecoration:"none", color:"white", fontWeight:"bold"}} download>Download CV</a>
         </div>
      </div>
      <div>
         <img src={landingimg} alt='amr' className='land-image'/>
      </div>
    </div>
  )
}

export default Landing
