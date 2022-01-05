import * as React from "react";

const Header = () => {
  return (
    <header className="header-wrap">
      <img className="header-logo" src="/img/fcc-logo.png" alt="fcc logo" />
      <ul className="header-links">
        <li>home</li>
        <li>about us</li>
        <li>get started</li>
        <li>blog</li>
        <li>cohorts</li>
      </ul>
    </header>
  );
};

export default Header;
