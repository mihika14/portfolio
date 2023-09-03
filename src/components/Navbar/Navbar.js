import React from "react";
import "./Navbar.css";

const Navbar = () => {
  const navigationItems = [
    { name: "About", link: "#about" },
    { name: "Home", link: "#skills" },
    { name: "Projects", link: "#about" },
    { name: "Experience", link: "#about" },
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
