import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import {CitiesArray} from "../../Data"
import {
  staggerAnimation,
  staggerRevealAnimation,
  staggerNav,
  handleCity,
  handleCitybacktonormal,
  handlehover,
  handlehoverExit,
} from "../../Animation";



function MenuBar({ menuOpen }) {
 
  /////for the animation and refs
  const menu = useRef(null);
  const revealMenuBackground = useRef(null);
  const revealMenu = useRef(null);
  const Cities = useRef(null);
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);
  const info = useRef(null);
  const cityBackground = useRef(null);

  useEffect(() => {
    if (menuOpen.clicked === false) {
      //close the menu
      gsap.to([revealMenu.current, revealMenuBackground.current], {
        duration: 0.8,
        height: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.07,
        },
      });

      gsap.to(menu.current, {
        duration: 1,
        css: { display: "none" },
      });
    } else if (
      menuOpen.clicked === true ||
      (menuOpen.clicked === true && menuOpen.inital === null)
    ) {
      //open our menu
      gsap.to(menu.current, {
        duration: 1,
        css: { display: "block" },
      });

      staggerAnimation(revealMenuBackground.current, revealMenu.current);
      staggerRevealAnimation(info.current);
      staggerNav(line1.current, line2.current, line3.current);
    }
  }, [menuOpen]);

 
  return (
    <>
      <div ref={menu} className="hamburger-menu">
        <div
          ref={revealMenuBackground}
          className="menu-secondary-background-color"
        ></div>
        <div ref={revealMenu} className="menu-layer">
          <div className="meun-background"  ref = { cityBackground }></div>
          <div className="container">
            <div className="wrapper">
              <div className="meun-links">
                <nav>
                  <ul>
                    <li>
                      <Link
                        to="/programs"
                        ref={line1}
                        onMouseEnter={handlehover} // Removed the immediate execution of the function
                        onMouseLeave={handlehoverExit} // Removed the immediate execution of the function
                      >
                        Programmes
                      </Link>
                    </li>
                    <li>
                      <Link to="/services" ref={line2}  onMouseEnter={handlehover} // Removed the immediate execution of the function
                        onMouseLeave={handlehoverExit} // Removed the immediate execution of the function 
                        >
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link to="/contact" ref={line3}  onMouseEnter={handlehover} // Removed the immediate execution of the function
                        onMouseLeave={handlehoverExit} // Removed the immediate execution of the function
                        >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div ref={info} className="info">
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
                {CitiesArray.map((city) => (
                  <span
                    key={city.name}
                    onMouseEnter={() => handleCity(city.images)}
                    onMouseLeave={handleCitybacktonormal}
                  >
                    {city.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MenuBar;


//;