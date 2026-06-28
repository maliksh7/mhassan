import { Box, Typography } from "@mui/material";

function PortfolioBlock({ title, description, image, link, darkMode }) {
  // Theme-aware tokens
  const cardBg      = darkMode ? "rgba(255,255,255,0.04)" : "#ffffff";
  const cardBorder  = darkMode ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.10)";
  const cardShadow  = darkMode ? "0 0 10px rgba(0,0,0,0.4)" : "0 2px 12px rgba(0,0,0,0.08)";
  const titleColor  = darkMode ? "#58a6ff" : "#0077cc";
  const descColor   = darkMode ? "#9da5b4" : "#444444";
  const hoverBorder = darkMode ? "#58a6ff" : "#0077cc";
  const hoverShadow = darkMode
    ? "0 0 20px rgba(88,166,255,0.4)"
    : "0 4px 20px rgba(0,119,204,0.2)";

  return (
    <Box
      component="a"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        textDecoration: "none",
        color: "inherit",
        p: 3,
        height: "100%",
        borderRadius: 3,
        bgcolor: cardBg,
        border: `1px solid ${cardBorder}`,
        boxShadow: cardShadow,
        transition: "all 0.25s ease-in-out",
        boxSizing: "border-box",
        "&:hover": {
          transform: "translateY(-4px)",
          border: `1px solid ${hoverBorder}`,
          boxShadow: hoverShadow,
        },
      }}
    >
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{
          width: "100%",
          height: "auto",
          mb: 2,
          borderRadius: 2,
          filter: darkMode ? "brightness(0.9) contrast(1.1)" : "brightness(1) contrast(1)",
        }}
      />
      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: titleColor, fontWeight: 600, fontSize: { xs: "1.1rem", md: "1.3rem" } }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: descColor, lineHeight: 1.6, maxWidth: "90%" }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default PortfolioBlock;