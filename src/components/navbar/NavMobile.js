import "./NavMobils.css";
import { useState, useEffect } from "react";
import { useAnimate, stagger, motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function NavMobile() {
  const [open, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const location = useLocation();

  const items = [
    <Link to="/" className={location.pathname === "/" ? "active" : ""}>
      HOME
    </Link>,
    <Link
      to="/about"
      className={location.pathname === "/about" ? "active" : ""}>
      ABOUT
    </Link>,
    <Link
      to="/portfolio"
      className={location.pathname === "/portfolio" ? "active" : ""}>
      PORTFOLIO
    </Link>,
    <Link
      to="/channel"
      className={location.pathname === "/channel" ? "active" : ""}>
      CHANNEL
    </Link>,
    <Link
      to="/contact"
      className={location.pathname === "/contact" ? "active" : ""}>
      CONTACT
    </Link>,
  ];

  // the stagger effect
  const staggerList = stagger(0.1, { startDelay: 0.25 });

  // create the animations that will be applied
  // whenever the open state is toggled

  useEffect(() => {
    animate(
      "ul",
      {
        display: open ? "block" : "none",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.4,
      }
    );
    animate(
      "li",
      open
        ? { display: "block", scale: 1, x: 0 }
        : { display: "none", scale: 0.3, x: -50 },
      {
        duration: 0.2,
        delay: open ? staggerList : 0,
      }
    );
  }, [open]);

  return (
    <div className="nav-mobile" ref={scope}>
      <h3>elhawiCode</h3>
      <div className="d-flex align-items-center flex-column">
        <motion.button
          onClick={() => setOpen(!open)}
          whileTap={{ scale: 0.95 }}>
          <i class="fa-solid fa-bars"></i>
        </motion.button>
        <ul>
          {items.map((item, index) => (
            <motion.li key={index}>{item}</motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
