import { Box } from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { info } from "../info/Info";
import Style from "./Navbar.module.scss";
import Toggler from "./home/Toggler";

const links = [
  { name: "Home", to: "/mhassan", active: "home" },
  { name: "About Me", to: "/about", active: "about" },
  { name: info.initials, type: "initials", to: "/mhassan", active: "home" },
  { name: "Portfolio", to: "/portfolio", active: "portfolio" },
  { name: "Academic Projects", to: "/academic-projects", active: "academic-projects" },
];

export default function Navbar({ darkMode, handleClick }) {
  const location = useLocation();
  const [active, setActive] = useState(
    location.pathname === "/" ? "home" : location.pathname.slice(1)
  );

  return (
    <Box
      component="nav"
      className={`${Style.navbar} ${darkMode ? Style.dark : Style.light}`}
    >
      <Box
        component="ul"
        className={Style.navList}
      >
        {links.map((link, index) => (
          <Box
            key={index}
            component="li"
            className={`${Style.navItem} ${
              link.active === active && !link.type ? Style.active : ""
            }`}
          >
            <Link
              to={link.to}
              onClick={() => setActive(link.active)}
              className={Style.link}
            >
              {!link.type && (
                <span className={Style.navText}>{link.name}</span>
              )}
              {link.type && <h1 className={Style.initials}>{link.name}</h1>}
            </Link>
          </Box>
        ))}
        <li className={Style.togglerWrapper}>
          <Toggler darkMode={darkMode} handleClick={handleClick} />
        </li>
      </Box>
    </Box>
  );
}
