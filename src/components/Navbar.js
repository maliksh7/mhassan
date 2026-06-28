// import { Box } from "@mui/material";
// import { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { info } from "../info/Info";
// import Style from "./Navbar.module.scss";
// import Toggler from "./home/Toggler";

// const links = [
//   { name: "Home", to: "/mhassan", active: "home" },
//   { name: "About Me", to: "/about", active: "about" },
//   { name: info.initials, type: "initials", to: "/mhassan", active: "home" },
//   { name: "Portfolio", to: "/portfolio", active: "portfolio" },
//   { name: "Academic Projects", to: "/academic-projects", active: "academic-projects" },
// ];

// export default function Navbar({ darkMode, handleClick }) {
//   const location = useLocation();
//   const [active, setActive] = useState(
//     location.pathname === "/" ? "home" : location.pathname.slice(1)
//   );

//   return (
//     <Box
//       component="nav"
//       className={`${Style.navbar} ${darkMode ? Style.dark : Style.light}`}
//     >
//       <Box
//         component="ul"
//         className={Style.navList}
//       >
//         {links.map((link, index) => (
//           <Box
//             key={index}
//             component="li"
//             className={`${Style.navItem} ${
//               link.active === active && !link.type ? Style.active : ""
//             }`}
//           >
//             <Link
//               to={link.to}
//               onClick={() => setActive(link.active)}
//               className={Style.link}
//             >
//               {!link.type && (
//                 <span className={Style.navText}>{link.name}</span>
//               )}
//               {link.type && <h1 className={Style.initials}>{link.name}</h1>}
//             </Link>
//           </Box>
//         ))}
//         <li className={Style.togglerWrapper}>
//           <Toggler darkMode={darkMode} handleClick={handleClick} />
//         </li>
//       </Box>
//     </Box>
//   );
// }

import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, useMediaQuery, useTheme } from "@mui/material";
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
  const [drawerOpen, setDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleNavClick = (activeKey) => {
    setActive(activeKey);
    setDrawerOpen(false);
  };

  const navLinks = links.filter((l) => !l.type);
  const initialsLink = links.find((l) => l.type === "initials");

  return (
    <Box
      component="nav"
      className={`${Style.navbar} ${darkMode ? Style.dark : Style.light}`}
    >
      {isMobile ? (
        /* ── Mobile layout ── */
        <Box className={Style.mobileBar}>
          {/* Logo/Initials on the left */}
          <Link
            to={initialsLink.to}
            onClick={() => handleNavClick(initialsLink.active)}
            className={Style.link}
          >
            <h1 className={Style.initials}>{initialsLink.name}</h1>
          </Link>

          {/* Hamburger + toggler on the right */}
          <Box display="flex" alignItems="center" gap={1}>
            <Toggler darkMode={darkMode} handleClick={handleClick} />
            <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{ color: "inherit" }}
              aria-label="open menu"
            >
              <MenuIcon fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      ) : (
        /* ── Desktop layout ── */
        <Box component="ul" className={Style.navList}>
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
                onClick={() => handleNavClick(link.active)}
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
      )}

      {/* ── Mobile Drawer ── */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 240,
            bgcolor: darkMode ? "#1f1f1f" : "#f5f5f5",
            color: darkMode ? "#e6edf3" : "#111",
            pt: 2,
          },
        }}
      >
        {/* Close button */}
        <Box display="flex" justifyContent="flex-end" px={2} pb={1}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: "inherit" }}
            aria-label="close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List>
          {navLinks.map((link, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                component={Link}
                to={link.to}
                onClick={() => handleNavClick(link.active)}
                selected={link.active === active}
                sx={{
                  px: 3,
                  py: 1.5,
                  "&.Mui-selected": {
                    background: "linear-gradient(90deg, rgba(0,255,255,0.15), transparent)",
                    borderLeft: "3px solid #00ffff",
                  },
                  "&:hover": {
                    background: "rgba(0,255,255,0.08)",
                  },
                }}
              >
                <ListItemText
                  primary={link.name}
                  primaryTypographyProps={{
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    letterSpacing: "0.5px",
                    color: link.active === active ? "#00ffff" : "inherit",
                    fontWeight: link.active === active ? 600 : 400,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}