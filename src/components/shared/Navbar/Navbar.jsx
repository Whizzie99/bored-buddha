import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import Container from "../Container/Container";
import { menuItems } from "../../../data/menuItems";
import { StyledNav } from "./styles";

import logo from "../../../assets/images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const toggleMenu = () => {
    setIsClicked(!isClicked);
    setActive(true);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [window.scrollY]);

  return (
    <StyledNav active={active} isClicked={isClicked}>
      <Container>
        <div className="nav-items">
          <div className="logo-section">
            <Link to="/" className="logo">
              <img src={logo} alt="bored buddha logo" />
            </Link>
          </div>
          <div className={`nav-links-section ${isClicked && "show-menu"}`}>
            <ul>
              {menuItems.map((menuItem, index) => (
                <li key={index}>
                  <Link to={menuItem.path}>{menuItem.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={`social-links ${isClicked && "show-menu"}`}>
            <ul>
              <li>
                <Link to="#">
                  <FaDiscord />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link to="#">
                  <span>connect</span>
                  <span>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.47656 4.87512H19.4766C19.6518 4.87504 19.8268 4.88615 20.0006 4.9084C19.9417 4.49486 19.7997 4.09752 19.583 3.74036C19.3664 3.3832 19.0797 3.07361 18.7402 2.83025C18.4007 2.58688 18.0154 2.4148 17.6076 2.32436C17.1998 2.23392 16.7779 2.227 16.3673 2.30402L4.03125 4.41012H4.01719C3.24285 4.5582 2.55425 4.9963 2.09203 5.63496C2.7884 5.13965 3.622 4.87401 4.47656 4.87512ZM19.4766 6.00012H4.47656C3.68118 6.00099 2.91862 6.31734 2.3562 6.87976C1.79378 7.44218 1.47743 8.20474 1.47656 9.00012V18.0001C1.47743 18.7955 1.79378 19.5581 2.3562 20.1205C2.91862 20.6829 3.68118 20.9993 4.47656 21.0001H19.4766C20.2719 20.9993 21.0345 20.6829 21.5969 20.1205C22.1593 19.5581 22.4757 18.7955 22.4766 18.0001V9.00012C22.4757 8.20474 22.1593 7.44218 21.5969 6.87976C21.0345 6.31734 20.2719 6.00099 19.4766 6.00012ZM17.25 15.0001C16.9533 15.0001 16.6633 14.9121 16.4166 14.7473C16.17 14.5825 15.9777 14.3482 15.8642 14.0741C15.7506 13.8001 15.7209 13.4985 15.7788 13.2075C15.8367 12.9165 15.9796 12.6492 16.1893 12.4395C16.3991 12.2297 16.6664 12.0868 16.9574 12.0289C17.2483 11.9711 17.5499 12.0008 17.824 12.1143C18.0981 12.2278 18.3324 12.4201 18.4972 12.6668C18.662 12.9134 18.75 13.2034 18.75 13.5001C18.75 13.8979 18.592 14.2795 18.3107 14.5608C18.0294 14.8421 17.6478 15.0001 17.25 15.0001Z"
                        fill="url(#paint0_linear_127_248)"
                        fillOpacity="0.98"
                      />
                      <path
                        d="M1.5 12.1641V7.5C1.5 6.48422 2.0625 4.78125 4.01484 4.41234C5.67188 4.10156 7.3125 4.10156 7.3125 4.10156C7.3125 4.10156 8.39062 4.85156 7.5 4.85156C6.60938 4.85156 6.63281 6 7.5 6C8.36719 6 7.5 7.10156 7.5 7.10156L4.00781 11.0625L1.5 12.1641Z"
                        fill="url(#paint1_linear_127_248)"
                        fillOpacity="0.98"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_127_248"
                          x1="11.9766"
                          y1="2.25098"
                          x2="11.9766"
                          y2="21.0001"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.015625" stopColor="#F0D0FF" />
                          <stop offset="0.317708" stopColor="#8911C0" />
                          <stop
                            offset="0.609375"
                            stopColor="#562CC4"
                            stopOpacity="0.99145"
                          />
                          <stop
                            offset="1"
                            stopColor="#B5CEFF"
                            stopOpacity="0.98"
                          />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_127_248"
                          x1="4.69271"
                          y1="4.10156"
                          x2="4.69271"
                          y2="12.1641"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop offset="0.015625" stopColor="#F0D0FF" />
                          <stop offset="0.317708" stopColor="#8911C0" />
                          <stop
                            offset="0.609375"
                            stopColor="#562CC4"
                            stopOpacity="0.99145"
                          />
                          <stop
                            offset="1"
                            stopColor="#B5CEFF"
                            stopOpacity="0.98"
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="hamburger-menu" onClick={toggleMenu}>
            {isClicked ? <HiX /> : <HiMenu />}
          </div>
        </div>
      </Container>
    </StyledNav>
  );
};

export default Navbar;
