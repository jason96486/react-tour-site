import React from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          日本旅遊網
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="切換導航"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                首頁
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                會員登入
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                預約行程
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                聯絡我們
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
