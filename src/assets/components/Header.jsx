import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import MenuBar from "./MenuBar";

function Header() {
  const location = useLocation();

  const [menuOpen, setmenuOpen] = useState({
    inital: false,
    clicked: null,
    meunName: "Menu",
  });

  const [disable, setdisable] = useState(false);

  const handleClick = () => {
    disabled();
    if (menuOpen.inital === false) {
      setmenuOpen({
        inital: null,
        clicked: true,
        meunName: "Close",
      });
    } else if (menuOpen.clicked === true) {
      setmenuOpen({
        clicked: !menuOpen.clicked,
        meunName: "Menu",
      });
    } else if (menuOpen.clicked === false) {
      setmenuOpen({
        clicked: !menuOpen.clicked,
        meunName: "Close",
      });
    }
  };

  //will check if the meun is disabled
  const disabled = () => {
    setdisable(!disable);
    setTimeout(() => {
      setdisable(false);
    }, 1200);
  };
  useEffect(() => {
    setmenuOpen({ clicked: false, meunName: "Meun" }); // Close the menu whenever the location changes
  }, [location]);

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
                <button disabled={disable} onClick={handleClick}>
                  {menuOpen.meunName}
                </button>
              </div>
            </div>
          </div>
        </div>
        <MenuBar menuOpen={menuOpen} />
      </header>
    </>
  );
}

export default Header;
