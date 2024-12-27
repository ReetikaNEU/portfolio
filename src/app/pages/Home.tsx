import {
  IconButton,
  Link,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { useEffect } from "react";
import logo from "../../static/favicon.jpg";
import cmu from "../../static/neu.jpg"
import { useLocation } from "react-router-dom";
import { links } from "./links";
import './Home.css'
import Divider from "@mui/material/Divider";
import GitHubCalendar, {createCalendarTheme} from "react-github-calendar";

interface Props {
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
}

export default function Home({ setSelectedIndex }: Props) {
  const { pathname } = useLocation();
  useEffect(() => {
    setSelectedIndex(-1);
  }, [setSelectedIndex]);

  useEffect(() => {
    document.title = process.env.REACT_APP_NAME!;
  }, [pathname]);

  return (
      <>
        <div id="main-container">
          <img src={cmu} alt={"Header"} id="cmu-header"/>
          <img src={logo} id="my-logo" alt={"Logo"}/>
        </div>
        <div id="title-container">
          <Typography variant="h3">Reetika Bhanushali</Typography>
          <Typography variant="h6">Graduate Student @ Northeastern University</Typography>
          <Stack direction="row" spacing={0.4}>
            {links.map((link) => (
                <Tooltip key={link.index} title={link.title} arrow>
                  <Link
                      target="_blank"
                      href={link.href}
                      underline="none"
                      color="inherit"
                  >
                    <IconButton color="inherit">{link.icon}</IconButton>
                  </Link>
                </Tooltip>
            ))}
          </Stack>
            <Divider style={{marginTop: "20px"}}/>
            <Typography style={{marginTop: "20px", marginBottom: "20px"}} variant="h6">As an Information Systems professional with nearly three years of experience, I specialize in Java development, Spring frameworks, and cloud solutions, particularly Amazon Web Services. Throughout my career, I have driven significant technological advancements in roles ranging from a Consultant at JP Morgan Chase & Co. to a Software Engineering Analyst at Accenture. My projects have ranged from optimizing SQL queries for improved performance to pioneering a Sign Language Interpreter to aid communication for the hearing impaired. Currently pursuing a Master’s degree at Northeastern University, I am dedicated to continuous personal and professional growth. I excel in environments that challenge my problem-solving abilities and offer opportunities for innovation. Whether developing complex software solutions or leading data-driven projects, I am committed to leveraging technology to create impactful solutions.</Typography>
            <GitHubCalendar username="ReetikaNEU" theme={createCalendarTheme("green", "#2D333B")}/>
        </div>
      </>
  );

  // return (
  //   <Grid
  //     container
  //     spacing={0}
  //     direction="column"
  //     alignItems="center"
  //     justifyContent="center"
  //     sx={{ minHeight: `calc(100vh - 20px - 33px)` }}
  //   >
  //     <Grid item xs={3}>
  //       <Stack direction={{ xs: "column", sm: "row-reverse" }} spacing={2}>
  //         <Box display="flex" sx={{ justifyContent: "center" }}>
  //           <img src={logo} width="140px" height="140px" alt="logo" />
  //         </Box>
  //         <Box>
  //           <Grid
  //             display="flex"
  //             justifyContent={{ xs: "center", sm: "flex-start" }}
  //           >
  //             <Typography variant="h3">Femin Dharamshi</Typography>
  //           </Grid>
  //           <Grid
  //             display="flex"
  //             justifyContent={{ xs: "center", sm: "flex-start" }}
  //           >
  //             <Typography variant="subtitle1" gutterBottom>
  //               Always difficult, always beautiful
  //               {/* Better an{' '}
  //               <Box fontWeight="fontWeightMedium" display="inline">
  //                 oops
  //               </Box>{' '}
  //               than a{' '}
  //               <Box fontWeight="fontWeightMedium" display="inline">
  //                 what if
  //               </Box> */}
  //             </Typography>
  //           </Grid>
  //           <Grid
  //             display="flex"
  //             justifyContent={{ xs: "center", sm: "flex-start" }}
  //           >
  //             <Stack direction="row" spacing={0.4}>
  //               {links.map((link) => (
  //                 <Tooltip key={link.index} title={link.title} arrow>
  //                   <Link
  //                     target="_blank"
  //                     href={link.href}
  //                     underline="none"
  //                     color="inherit"
  //                   >
  //                     <IconButton color="inherit">{link.icon}</IconButton>
  //                   </Link>
  //                 </Tooltip>
  //               ))}
  //             </Stack>
  //           </Grid>
  //         </Box>
  //       </Stack>
  //     </Grid>
  //   </Grid>
  // );
}
