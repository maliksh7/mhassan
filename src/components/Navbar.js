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

  // Explicit colors for drawer so text is always visible regardless of MUI theme resets
  const drawerBg = darkMode ? "#1a1a2e" : "#ffffff";
  const drawerText = darkMode ? "#e6edf3" : "#111111";
  const drawerActiveBg = darkMode
    ? "rgba(0,255,255,0.12)"
    : "rgba(0,100,200,0.10)";
  const drawerActiveBorder = darkMode ? "#00ffff" : "#0077cc";
  const drawerActiveText = darkMode ? "#00ffff" : "#0077cc";

  return (
    <Box
      component="nav"
      className={`${Style.navbar} ${darkMode ? Style.dark : Style.light}`}
    >
      {isMobile ? (
        /* ── Mobile layout ── */
        <Box className={Style.mobileBar}>
          <Link
            to={initialsLink.to}
            onClick={() => handleNavClick(initialsLink.active)}
            className={Style.link}
          >
            <h1 className={Style.initials}>{initialsLink.name}</h1>
          </Link>

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
            bgcolor: drawerBg,
            color: drawerText,
            pt: 1,
          },
        }}
      >
        {/* Close button */}
        <Box display="flex" justifyContent="flex-end" px={2} pb={1}>
          <IconButton
            onClick={() => setDrawerOpen(false)}
            sx={{ color: drawerText }}
            aria-label="close menu"
          >
            <CloseIcon />
          </IconButton>
        </Box>

        <List disablePadding>
          {navLinks.map((link, index) => {
            const isActive = link.active === active;
            return (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.to}
                  onClick={() => handleNavClick(link.active)}
                  sx={{
                    px: 3,
                    py: 1.5,
                    borderLeft: isActive
                      ? `3px solid ${drawerActiveBorder}`
                      : "3px solid transparent",
                    bgcolor: isActive ? drawerActiveBg : "transparent",
                    "&:hover": {
                      bgcolor: darkMode
                        ? "rgba(0,255,255,0.07)"
                        : "rgba(0,100,200,0.07)",
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
                      // Explicit color — never "inherit" so MUI resets can't hide text
                      color: isActive ? drawerActiveText : drawerText,
                      fontWeight: isActive ? 600 : 400,
                    }}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    </Box>
  );
}