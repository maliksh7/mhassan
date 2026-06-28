import { Box, Typography } from "@mui/material";

function PortfolioBlock({ title, description, image, link }) {
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
        color: "#e6edf3",
        p: 3,
        height: "100%",
        borderRadius: 3,
        // bgcolor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.15)",
        boxShadow: "0 0 10px rgba(0,0,0,0.4)",
        transition: "all 0.25s ease-in-out",
        "&:hover": {
          transform: "translateY(-4px)",
          border: "1px solid #58a6ff",
          boxShadow: "0 0 20px rgba(88,166,255,0.4)",
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
          filter: "brightness(0.9) contrast(1.1)",
        }}
      />
      <Typography
        variant="h5"
        gutterBottom
        sx={{ color: "#58a6ff", fontWeight: 600 }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: "#9da5b4",
          lineHeight: 1.5,
          maxWidth: "90%",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

export default PortfolioBlock;
