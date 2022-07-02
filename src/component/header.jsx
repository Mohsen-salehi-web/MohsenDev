import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./../css/App.css";
export default function Header() {
    return (
      <>
        <header className="header container">
          <h2>
            محسن <span>صالحی</span>
          </h2>
          <nav>
            <ul>
              <li>
                <Link to="/">خانه</Link>
              </li>
              <li>
                <Link to="/resume" >رزومه</Link>
              </li>
              <li>
                <Link to="/call">تماس</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Outlet />
      </>
    );
}

