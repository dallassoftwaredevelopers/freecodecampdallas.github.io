import * as React from "react";
import { Link } from "remix";

const Header = () => {
  return (
    <header className="header-wrap">
      <img className="header-logo" src="/img/fcc-logo.png" alt="fcc logo" />
      <ul className="header-links">
        <li>
          <Link to="/" prefetch="intent">
            home
          </Link>
        </li>
        <li>
          <Link to="/about-us" prefetch="intent">
            about us
          </Link>
        </li>
        <li>
          <Link to="/get-started" prefetch="intent">
            get started
          </Link>
        </li>
        <li>
          <Link to="/blog" prefetch="intent">
            blog
          </Link>
        </li>
        <li>
          <Link to="/cohorts" prefetch="intent">
            cohorts
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
