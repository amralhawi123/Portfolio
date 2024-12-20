import React from "react";
import { Accordion } from "react-bootstrap";
import ReactPlayer from "react-player";
import "./Channel.css";
const Channel = () => {
  return (
    <div className="channel text-center">
      <h3 className=" mt-4 font-three">Channel</h3>
      <div className="mt-5 contnet">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              React JS Project | Build & Deploy Complete Responsive Website in
              React Step by Step Tutorial l elhawiCode
            </Accordion.Header>
            <Accordion.Body>
              <ReactPlayer
                url="<https://youtube.com/playlist?list=PLKuiL6Xo1dJIa1fXYFf_D5EXfKzta-i5M&si=bH7ZGi3BI9vYhreJ>"
                controls
                width="100%"
                height="400px"
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="mt-5 contnet">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Problems Solving With JavaScript Level One | شرح بالعربي _
              elhawiCode
            </Accordion.Header>
            <Accordion.Body>
              <ReactPlayer
                url="<https://youtu.be/jpjHmzMQXv4?si=fEwC3DI1pi3E6oOr>"
                controls
                width="100%"
                height="400px"
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
};

export default Channel;
