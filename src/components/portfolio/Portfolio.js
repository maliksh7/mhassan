import { Box } from "@mui/material";
import Pagination from '@mui/material/Pagination';
import React, { useState } from 'react';
import projects from "../../info/Projects";
import PortfolioBlock from "./PortfolioBlock";

const ITEMS_PER_PAGE = 1; // 1 project per page

function Portfolio() {
   const [page, setPage] = useState(1);
   const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

   const handleChange = (event, value) => {
      setPage(value);
   };

   const startIndex = (page - 1) * ITEMS_PER_PAGE;
   const selectedProject = projects[startIndex];

   return (
      <Box 
         component={'section'} 
         display="flex" 
         flexDirection="column" 
         alignItems="center" 
         justifyContent="center" 
         minHeight="100vh"
         p={3}
      >
         <Box display="flex" justifyContent="center" alignItems="center" width="100%" flexGrow={1}>
            <PortfolioBlock 
               title={selectedProject.title} 
               description={selectedProject.description} 
               image={selectedProject.image} 
               link={selectedProject.link} 
            />
         </Box>
         <Pagination 
            count={totalPages} 
            page={page} 
            onChange={handleChange} 
            color="primary" 
            size="large" 
            sx={{ marginTop: '2rem'}} 
         />
      </Box>
   );
}

export default Portfolio;
