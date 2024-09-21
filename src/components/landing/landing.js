/* eslint-disable no-unused-vars */
import React from "react";
import "./landing.css";
import landingimg from "../../image/455.jpg";
import cv from "../../image/Amr Mahmoud Alhawi.pdf";
import Typed from "typed.js";
import { Container } from "react-bootstrap";

const Landing = () => {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ["Front End Developer", "Graphic Design"],
      typeSpeed: 150,
      backSpeed: 100,
      backdelay: 1000,
      loop: true,
    };

    typed.current = new Typed(el.current, options);
    return () => {
      typed.current.destroy();
    };
  }, []);

  return (
    <Container>
      <div
        className="landing mt-5 d-flex align-items-center justify-content-between"
        id="home">
        <div className="info ">
          <h2>
            Hi,
            <br />
            I'm <span>Amr</span>,<br />
          </h2>
          <h2>
            <div className="type-wrap">
              <span style={{ whiteSpace: "pre" }} ref={el} />
            </div>
          </h2>

          <p>Front End Developer / Graphic Design</p>
          <div className="links d-flex algin-items-center gap-4">
            <a href="https://www.facebook.com/profile.php?id=100010710422335">
              <i
                class="fa-brands fa-facebook"
                style={{ color: "darkorange", fontSize: "25px" }}></i>
            </a>
            <a href="https://www.linkedin.com/in/amr-mahmoud-alhawi-9644b0249">
              <i
                class="fa-brands fa-linkedin"
                style={{ color: "white", fontSize: "25px" }}></i>
            </a>
            <a href="https://github.com/amralhawi123">
              <i
                class="fa-brands fa-github"
                style={{ color: "darkorange", fontSize: "25px" }}></i>
            </a>
            <a href="https://www.behance.net/mrhwi">
              <i
                class="fa-brands fa-square-behance"
                style={{ color: "white", fontSize: "25px" }}></i>
            </a>
            <a href="http://www.youtube.com/@elhawiCode">
              <i
                class="fa-brands fa-youtube"
                style={{ color: "darkorange", fontSize: "25px" }}></i>
            </a>
          </div>
          <div
            style={{
              backgroundColor: "darkorange",
              borderRadius: "10px",
              color: "black",
              width: "fit-content",
              padding: "8px 49px",
              marginTop: "20px",
            }}>
            <a
              href={cv}
              style={{
                textDecoration: "none",
                color: "white",
                fontWeight: "bold",
              }}
              download>
              Download CV
            </a>
          </div>
        </div>
        <div>
          <img src={landingimg} alt="amr" className="land-image" />
        </div>
      </div>
    </Container>
  );
};

export default Landing;
