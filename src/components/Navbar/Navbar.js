import React, { useState } from "react";
import "./Navbar.css";
import LinkList from "./LinkList";
import { NavLink } from "react-router-dom";
function Navbar() {
  const [click, setClick] = useState(false);

  const menuList = LinkList.map(({ url, title }, index) => {
    return (
      <li key={index}>
        <NavLink activeClassName="active" to={url}>
          {title}
        </NavLink>
      </li>
    );
  });

  const clickHandler = () => {
    setClick(!click);
  };

  return (
    <div className="navmenu">
      <div className="menubar">
        <div className="logo">
          <NavLink to="/">
            <h1>
              web<span>-Hub</span>
            </h1>
          </NavLink>
        </div>
        <div className="links">
          <ul className={click ? "link-list" : "link-list close"}>
            {menuList}
          </ul>
        </div>
        <div className="Icon" onClick={clickHandler}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
