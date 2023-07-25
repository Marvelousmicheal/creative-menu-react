import React from "react";
import { Link } from "react-router-dom";

function MenuBar() {
  return (
    <>
      <div className="hamburger-menu">
        <div className="menu-secondary-background-color"></div>
        <div className="menu-layer">
          <div className="meun-background"></div>
          <div className="container">
            <div className="wrapper">
              <div className="meun-links">
                <nav>
                  <ul>
                    <li>
                      <Link to="/programs">Programmes</Link>
                    </li>
                    <li>
                      <Link to="/services">Services</Link>
                    </li>
                    <li>
                      <Link to="/contact">Contact us</Link>
                    </li>
                  </ul>
                </nav>
                <div className="info">
                  <h3>our vows</h3>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Dolor eum illo debitis aliquam eveniet minus accusamus
                    doloremque quisquam consequatur suscipit, maiores nesciunt.
                    Suscipit repellendus aut quos minus iusto maxime in
                    perferendis doloremque velit quidem. Minus optio
                    consequuntur blanditiis dicta dolor?
                  </p>
                </div>
              </div>
              <div className="location">
                location:
                <span>kano</span>
                <span>Lagos</span>
                <span>kaduna</span>
                <span>Abia</span>
                <span>Abuja</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBar;
