import { Box, Grid, Pagination, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import projects from "../../info/Projects";
import PortfolioBlock from "./PortfolioBlock";

const ITEMS_PER_PAGE = 4; // 2 projects per row × 2 rows per page

// Group projects by domain
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

function Portfolio() {
  const [selectedDomain, setSelectedDomain] = useState(categories[0]);
  const [page, setPage] = useState(1);

  const handleTabChange = (event, newValue) => {
    setSelectedDomain(newValue);
    setPage(1); // reset page when domain changes
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const domainProjects = groupedProjects[selectedDomain] || [];
  const totalPages = Math.ceil(domainProjects.length / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const selectedProjects = domainProjects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <Box
      component="section"
      
      sx={{
        width: "100%",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        bgcolor: "#1f1f1f", // deep dark background
        color: "#e6edf3", // soft white text
        p: { xs: 2, md: 5 },
        pt: { xs: 10, md: 12 }, // 👈 added top padding for navbar space
      }}
    >
      {/* Tabs for Domains */}
      <Tabs
        value={selectedDomain}
        onChange={handleTabChange}
        centered
        variant="scrollable"
        position = "center"
        scrollButtons="auto"
        backgroundColor="#0d1117"   
        textColor="inherit"
        indicatorColor="primary"
        sx={{
          mb: 5,
          "& .MuiTab-root": {
            color: 575e64,
            fontSize: "1rem",
            fontWeight: 500,
            textTransform: "none",
            minWidth: "auto",
            mx: 1,
          },
          "& .Mui-selected": {
            color: "#58a6ff",
            fontWeight: 600,
          },
          "& .MuiTabs-indicator": {
            backgroundColor: "#58a6ff",
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
            "& .MuiPaginationItem-root": {
              color: "#e6edf3",
            },
            "& .Mui-selected": {
              backgroundColor: "#58a6ff !important",
              color: "#0d1117 !important",
            },
          }}
        />
      )}
    </Box>
  );
}

export default Portfolio;
