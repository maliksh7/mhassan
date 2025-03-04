import { Box, Typography } from "@mui/material";
import React from 'react';

function PortfolioBlock({ title, description, image, link }) {
   return (
      <Box 
         component="a" 
         href={link} 
         target="_blank" 
         rel="noopener noreferrer" 
         display="flex" 
         flexDirection="column" 
         alignItems="center" 
         textAlign="center" 
         p={3} 
         m={2} 
         width="80%" // Adjust width to make it larger
         maxWidth="800px" 
         boxShadow={3}
         borderRadius="8px"
         sx={{ 
            textDecoration: 'none', 
            color: 'inherit',
            border: '4px solid gray' // Add a strong gray border
         }}
      >
         <Box 
            component="img" 
            src={image} 
            alt={title} 
            width="100%" 
            height="auto" 
            mb={2} 
            borderRadius="4px"
         />
         <Typography variant="h4" component="h3" gutterBottom>
            {title}
         </Typography>
         <Typography variant="body1" sx={{ color: 'green' }}>
            {description}
         </Typography>
      </Box>
   );
}

export default PortfolioBlock;
