import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const navigationItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience & certifications", link: "#experience" },
  ];

  return (
    <div className="navcontainer">
      <nav className="navigationWrapper">
        <div className="logoWrapper">
          <span className="stylish">PORTFOLIO</span>
        </div>
        <ul className="navigation">
          {navigationItems.map((item, index) => (
            <li key={index} className="parent">
              <a className="link" href={item.link}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
