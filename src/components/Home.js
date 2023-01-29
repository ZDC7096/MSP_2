import NavBar from "./NavBar"
import { useState } from "react";
import { Typography, createTheme, ThemeProvider } from '@mui/material';
import ProfileCard from "./ProfileCard";


function Home(props) {

   const theme = createTheme()

   theme.typography.body1 = {
      fontSize: 30
  }

  const [info, setInfo] = useState([
   {
      imgAlt: "Picture of Jonathan Kishi", 
      img: "https://i.ytimg.com/vi/hAsZCTL__lo/mqdefault.jpg",
      name: "Jonathan Kishi",
      description: "Student of the SDSU/ThriveDX digital skills bootcamp and part time busser at BJ's", 
      gitHub: "https://github.com/Jkishi6"
   }
   ])

  const display = info.map((item, index) => {
   return (
       <ProfileCard key={index} item={item} />
   )
})

    return(
      <div id="yo" style={{minHeight: "100vh", backgroundColor: "#FCFCFC", marginLeft: "200px", marginRight:"200px", paddingTop:"20px"}}>
         <ThemeProvider theme={theme}>  
            <Typography variant="body1" align="center">
               What we've created: We have created, as a team, a website to search music and compile it to a global connected playlist to share with the world. Anyone can search a song, add it to the playlist or remove a song
            </Typography>
            <Typography variant="body1" align="center">
               Why: This project is a demonstration of PERN stack knowledge using React, PostgreSQL, Express, and NodeJS to build a fully functional site from scratch. This was not only an exercise in coding, but an exercise in collaboration and teamwork.
            </Typography>
         </ThemeProvider>
         {display}
      </div>
    )
  }
      
  
  
  export default Home;
  