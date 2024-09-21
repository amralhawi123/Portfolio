import React, { useEffect, useState } from "react";
import "./index.css";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import MayNav from "./components/navbar/MayNav";
import Landing from "./components/landing/landing";
import About from "./components/about/About";
import Contact from "./components/contact/contact";
import Portfolio from "./components/Portfolio/Portfolio";
import LoadingComponent from "./components/utility/LoadingComponent";
import Channel from "./components/Channel/Channel";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // بعد 3 ثواني هيخفي الكمبوننت
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // هنا 3000 يعني 3 ثواني

    // تنظيف المؤقت لو الكمبوننت تم إلغاء تحميله قبل انتهاء المؤقت
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div id="stars"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
      {isLoading === true ? <LoadingComponent /> : null}

      <Container>
        <BrowserRouter>
          <MayNav />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/channel" element={<Channel />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
};

export default App;
