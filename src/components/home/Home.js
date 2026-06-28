import { Box, Typography } from "@mui/material";
import classNames from "classnames";
import { motion } from "framer-motion";
import me from "../../img/self.jpeg";
import { info } from "../../info/Info";
import EmojiBullet from "./EmojiBullet";
import Style from "./Home.module.scss";
import SocialIcon from "./SocialIcon";

export default function Home() {
   return (
      <Box
         component={"main"}
         display={"flex"}
         flexDirection={{ xs: "column", md: "row" }}
         alignItems={"center"}
         justifyContent={"center"}
         minHeight={"calc(100vh - 175px)"}
         px={{ xs: 2, md: 6 }}
         gap={4}
      >
         {/* Avatar */}
         <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
         >
            <Box
               className={classNames(Style.avatar, Style.shadowed)}
               alt={"image of developer"}
               style={{ background: info.gradient }}
               component={"img"}
               src={me}
               width={{ xs: "25vh", md: "30vh", lg: "35vh" }}
               height={{ xs: "25vh", md: "30vh", lg: "35vh" }}
               borderRadius={"50%"}
               p={"0.75rem"}
               sx={{
                  cursor: "pointer",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                     transform: "scale(1.05)",
                     boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
                  },
               }}
            />
         </motion.div>

         {/* Text Section */}
         <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
         >
            <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
               Hi, I&apos;m{" "}
               <span
                  style={{
                     background: info.gradient,
                     WebkitBackgroundClip: "text",
                     WebkitTextFillColor: "transparent",
                  }}
               >
                  {info.firstName}
               </span>
               <span className={Style.hand}>🤚</span>
            </Typography>

            <Typography
               variant="h5"
               component="h2"
               color="text-wecondary"
               gutterBottom
            >
               {info.position}
            </Typography>

            {/* Mini Bio */}
            <Box component={"ul"} p={"0.8rem"} mb={2}>
               {info.miniBio.map((bio, index) => (
                  <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
               ))}
            </Box>

            {/* Social Icons */}
            <Box
               display={"flex"}
               gap={"1rem"}
               fontSize={{ xs: "1.5rem", md: "2rem" }}
            >
               {info.socials.map((social, index) => (
                  <motion.div
                     key={index}
                     whileHover={{ scale: 1.2, rotate: 5 }}
                     whileTap={{ scale: 0.9 }}
                  >
                     <SocialIcon
                        link={social.link}
                        icon={social.icon}
                        label={social.label}
                     />
                  </motion.div>
               ))}
            </Box>
         </motion.div>
      </Box>
   );
}
