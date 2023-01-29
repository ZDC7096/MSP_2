import NavBar from "./NavBar"
import { useState } from "react";
import { Typography, createTheme, ThemeProvider, Grid } from '@mui/material';
import ProfileCard from "./ProfileCard";


function Home(props) {

   const theme = createTheme()

   theme.typography.body1 = {
      fontSize: 25
  }

  const [info, setInfo] = useState([
   {
      imgAlt: "Picture of Jonathan Kishi", 
      img: "../img/kishi.png",
      name: "Jonathan Kishi",
      description: "Student at the SDSU software development bootcamp and part time busser at BJ's", 
      gitHub: "https://github.com/Jkishi6"
   }, 
   {
      imgAlt: "Picture of Didac Fernandez", 
      img: "../img/didac.jpg",
      name: "Didac Fernandez",
      description: "Sr. Architect at Insieme CloudNet and student at the SDSU software development bootcamp", 
      gitHub: "https://github.com/didacf"
   },
   {
      imgAlt: "Picture of Zane Larson", 
      img: "../img/zane.jpg",
      name: "Zane Larson",
      description: "Full time college student and student at the SDSU software development bootcamp", 
      gitHub: "https://github.com/zane-larson"
   }
   ])

  const display = info.map((item, index) => {
   return (
       <ProfileCard key={index} item={item} />
   )
})

    return(
      <div id="yonk" style={{minHeight: "100vh", backgroundColor: "#FCFCFC", marginLeft: "10vw", marginRight:"10vw", paddingTop:"20px", paddingBottom:"20px"}}>
         <img src="../img/jojoEarth.png" alt="Earth with musical nots surrounding it" style={{width:"50vw", display:"block", marginLeft:"auto", marginRight:"auto"}}/>
         <ThemeProvider theme={theme}>
            <Typography variant="h4" align="left" color={"#2074d4"}>
            What We've Created  
            </Typography>  
            <Typography variant="body1" align="left">
               We have created, as a team, a website to search music and compile it to a global connected playlist to share with the world. Anyone can search a song, add it to the playlist or remove a song.
            </Typography>
            <Typography variant="h4" align="left" color={"#2074d4"} style={{paddingTop:"15px"}}>
            Why
            </Typography>
            <Typography variant="body1" align="left">
               This project is a demonstration of PERN stack knowledge using React, PostgreSQL, Express, and NodeJS to build a fully functional site from scratch. This was not only an exercise in coding, but an exercise in collaboration and teamwork.
            </Typography>
            <Typography variant="h4" align="left" color={"#2074d4"} style={{paddingTop:"15px"}}>
            About the Creators
            </Typography>
         </ThemeProvider>
         <Grid container spacing={3} >
         {display}
         </Grid>
      </div>
    )
  }
      
  
  
  export default Home;
  