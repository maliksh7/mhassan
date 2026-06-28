import { Box, Grid, Pagination, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import projects from "../../info/Projects";
import PortfolioBlock from "./PortfolioBlock";

const ITEMS_PER_PAGE = 4;

const groupByDomain = () => {
  const categories = {};
  projects.forEach((project) => {
    const domain = project.domain || "Other";
    if (!categories[domain]) categories[domain] = [];
    categories[domain].push(project);
  });
  return categories;
};

const groupedProjects = groupByDomain();
const categories = Object.keys(groupedProjects);

function Portfolio({ darkMode }) {
  const [selectedDomain, setSelectedDomain] = useState(categories[0]);
  const [page, setPage] = useState(1);

  const handleTabChange = (event, newValue) => {
    setSelectedDomain(newValue);
    setPage(1);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const domainProjects = groupedProjects[selectedDomain] || [];
  const totalPages = Math.ceil(domainProjects.length / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const selectedProjects = domainProjects.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Theme-aware color tokens
  const bg          = darkMode ? "#1f1f1f" : "#f5f5f5";
  const textColor   = darkMode ? "#e6edf3" : "#1f1f1f";
  const tabColor    = darkMode ? "#8b949e" : "#555555";
  const activeTab   = darkMode ? "#58a6ff" : "#0077cc";
  const indicator   = darkMode ? "#58a6ff" : "#0077cc";
  const pageItemClr = darkMode ? "#e6edf3" : "#1f1f1f";

  return (
    <Box
      component="section"
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: bg,
        color: textColor,
        p: { xs: 2, md: 5 },
        pt: { xs: 10, md: 12 },
        transition: "background-color 0.4s ease, color 0.4s ease",
        boxSizing: "border-box",
      }}
    >
      {/* Domain Tabs */}
      <Tabs
        value={selectedDomain}
        onChange={handleTabChange}
        centered
        variant="scrollable"
        scrollButtons="auto"
        textColor="inherit"
        indicatorColor="primary"
        sx={{
          mb: 5,
          "& .MuiTab-root": {
            color: tabColor,
            fontSize: "1rem",
            fontWeight: 500,
            textTransform: "none",
            minWidth: "auto",
            mx: 1,
            transition: "color 0.3s",
          },
          "& .Mui-selected": {
            color: activeTab,
            fontWeight: 600,
          },
          "& .MuiTabs-indicator": {
            backgroundColor: indicator,
            height: "3px",
            borderRadius: "2px",
          },
        }}
      >
        {categories.map((category) => (
          <Tab key={category} label={category} value={category} />
        ))}
      </Tabs>

      {/* Project Grid */}
      <Grid container spacing={4}>
        {selectedProjects.map((project, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <PortfolioBlock
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              darkMode={darkMode}
            />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          count={totalPages}
          page={page}
          onChange={handlePageChange}
          color="primary"
          size="large"
          sx={{
            mt: 5,
            alignSelf: "center",
            "& .MuiPaginationItem-root": { color: pageItemClr },
            "& .Mui-selected": {
              backgroundColor: `${activeTab} !important`,
              color: darkMode ? "#0d1117 !important" : "#ffffff !important",
            },
          }}
        />
      )}
    </Box>
  );
}

export default Portfolio;