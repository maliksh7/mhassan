import { Box, Chip, Divider, Typography } from "@mui/material";
import classNames from "classnames";
import { motion } from "framer-motion";
import me from "../../img/self.jpeg";
import { info } from "../../info/Info";
import Style from "./Home.module.scss";
import SocialIcon from "./SocialIcon";

// Stagger children animation
const containerVariants = {
   hidden: {},
   show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
   },
};

const itemVariants = {
   hidden: { opacity: 0, y: 14 },
   show:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Home() {
   return (
      <Box
         component="main"
         display="flex"
         flexDirection="column"
         alignItems="center"
         justifyContent="center"
         minHeight="100vh"
         pt={{ xs: "80px", md: "0" }}
         pb={{ xs: "2.5rem", md: "2rem" }}
         px={{ xs: 2.5, md: 4 }}
         sx={{ overflow: "hidden", width: "100%", boxSizing: "border-box", textAlign: "center" }}
      >
         {/* ── Avatar ── */}
         <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ display: "flex", justifyContent: "center", marginBottom: "1.5rem" }}
         >
            <Box
               className={classNames(Style.avatar, Style.shadowed)}
               alt="image of developer"
               style={{ background: info.gradient }}
               component="img"
               src={me}
               sx={{
                  width:  { xs: "150px", md: "190px" },
                  height: { xs: "150px", md: "190px" },
                  borderRadius: "50%",
                  p: "0.65rem",
                  objectFit: "cover",
                  display: "block",
                  cursor: "pointer",
                  transition: "transform 0.35s ease, box-shadow 0.35s ease",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.35)",
                  "&:hover": {
                     transform: "scale(1.06) rotate(-2deg)",
                     boxShadow: "0 16px 48px rgba(0,0,0,0.45)",
                  },
               }}
            />
         </motion.div>

         {/* ── All text content, staggered ── */}
         <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            style={{ width: "100%", maxWidth: "560px" }}
         >
            {/* Greeting */}
            <motion.div variants={itemVariants}>
               <Typography
                  variant="h3"
                  component="h1"
                  fontWeight="800"
                  gutterBottom
                  sx={{ fontSize: { xs: "2rem", md: "2.8rem" }, lineHeight: 1.2 }}
               >
                  Hi, I&apos;m{" "}
                  <span
                     style={{
                        background: info.gradient,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                     }}
                  >
                     {info.firstName}
                  </span>{" "}
                  <span className={Style.hand}>🤚</span>
               </Typography>
            </motion.div>

            {/* Role */}
            <motion.div variants={itemVariants}>
               <Typography
                  variant="h6"
                  component="h2"
                  gutterBottom
                  sx={{
                     fontSize: { xs: "1rem", md: "1.2rem" },
                     fontWeight: 400,
                     opacity: 0.75,
                     letterSpacing: "0.5px",
                     mb: 2,
                  }}
               >
                  {info.position}
               </Typography>
            </motion.div>

            {/* Divider */}
            <motion.div variants={itemVariants}>
               <Divider
                  sx={{
                     mb: 2.5,
                     borderColor: "transparent",
                     "&::before, &::after": {
                        borderColor: "rgba(141,83,255,0.25)",
                     },
                  }}
               >
                  <Box
                     sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        background: info.gradient,
                        display: "inline-block",
                     }}
                  />
               </Divider>
            </motion.div>

            {/* Mini Bio chips */}
            <motion.div variants={itemVariants}>
               <Box
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="center"
                  gap={1}
                  mb={3}
               >
                  {info.miniBio.map((bio, i) => (
                     <Chip
                        key={i}
                        label={`${bio.emoji}  ${bio.text}`}
                        size="small"
                        sx={{
                           fontSize: { xs: "0.78rem", md: "0.85rem" },
                           height: "auto",
                           py: "6px",
                           px: "4px",
                           borderRadius: "999px",
                           bgcolor: "rgba(141,83,255,0.10)",
                           border: "1px solid rgba(141,83,255,0.22)",
                           color: "inherit",
                           "& .MuiChip-label": { whiteSpace: "normal", textAlign: "center" },
                        }}
                     />
                  ))}
               </Box>
            </motion.div>

            {/* Resume link */}
            <motion.div variants={itemVariants}>
               <Box mb={3}>
                  <a href={info.resumeUrl} target="_blank" rel="noreferrer">
                     <Box
                        component="span"
                        sx={{
                           display: "inline-block",
                           px: 3,
                           py: "0.5rem",
                           borderRadius: "999px",
                           background: info.gradient,
                           color: "#fff",
                           fontWeight: 600,
                           fontSize: "0.9rem",
                           letterSpacing: "0.4px",
                           transition: "opacity 0.25s ease, transform 0.25s ease",
                           boxShadow: "0 4px 18px rgba(141,83,255,0.35)",
                           "&:hover": { opacity: 0.88, transform: "translateY(-2px)" },
                        }}
                     >
                        📄 Download Resume
                     </Box>
                  </a>
               </Box>
            </motion.div>

            {/* Social icons */}
            <motion.div variants={itemVariants}>
               <Box
                  display="flex"
                  justifyContent="center"
                  gap="1.25rem"
                  fontSize={{ xs: "1.6rem", md: "1.9rem" }}
                  flexWrap="wrap"
               >
                  {info.socials.map((social, i) => (
                     <motion.div
                        key={i}
                        whileHover={{ scale: 1.25, y: -3 }}
                        whileTap={{ scale: 0.9 }}
                     >
                        <SocialIcon link={social.link} icon={social.icon} label={social.label} />
                     </motion.div>
                  ))}
               </Box>
            </motion.div>
         </motion.div>
      </Box>
   );
}