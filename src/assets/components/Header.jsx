import React from "react";
import { Link } from "react-router-dom";
import MenuBar from "./MenuBar";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="wrapper">
            <div className="inner-header">
              <div className="logo">
                <Link to="/">ManDemHub</Link>
              </div>
              <div className="meun">
                <button>menu</button>
              </div>
            </div>
          </div>
        </div>
        <MenuBar />
      </header>
    </>
  );
}

export default Header;
