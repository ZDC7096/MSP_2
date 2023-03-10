import {useState, useEffect} from 'react'
import { Button, Card, Box, createTheme, Typography, CardContent, CardMedia, Grid, ThemeProvider } from '@mui/material';
import supabase from "../config/supabaseClient"

const theme = createTheme()

theme.typography.h3 = {
  fontSize: 11,
  color: '#00000'
}

theme.typography.h4 = {
  fontSize: 10,
  color: '#00000'
}

//PULLING DATA AND CHECKING FOR ERRORS
function PlaylistView() {
    const [fetchError, setFetchError] = useState(null)
    const [songsBruh, setSongs] = useState(null)


    useEffect(() => {
        const fetchsongs = async () => {
          const { data, error } = await supabase
            .from('playlist')
            .select()
          
            //CATCHES DATABASE ERROR
          if (error) {
            setFetchError('Could not fetch the songs')
            setSongs(null)
            
          }
  
          //SETS DATA =songs variable
          if (data) {
              
            setSongs(data)
            setFetchError(null)
          }
        }
    
        fetchsongs()
    
      }, [])
    
    return(
      
      <div id="yop" style={{minHeight: "100vh", backgroundColor: "#FCFCFC", marginLeft: "10vw", marginRight:"10vw", paddingTop:"20px"}}>
        <h3>Our Playlist</h3>
{songsBruh && (
    <div>
      <Grid container spacing={3} justify="left">

   {/* MAPPING DATA INTO INDIVIDUAL CARDS      */}
    {songsBruh.map(song =>(


        <Grid item xs={"auto"}>
            <Card style={{backgroundColor: "#F3F3F3"}} sx={{ display: 'flex', height: 100, maxWidth: 275, minWidth: 275 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', height: 33 }}>
                        <ThemeProvider theme={theme}>
                        <Typography component="div" variant="h3">
                            {song.song_name}
                        </Typography>
                        <Typography variant="h4"  component="div">
                            {song.artist}
                        </Typography>
                        </ThemeProvider>
                    </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>

                  {/* Function to Delete data from database */}
                    <Button onClick={ async function(){
                        const {data, error} = await supabase
                        .from('playlist')
                        .delete()
                        .eq("id", song.id)
                        .select();
                        setSongs(prevSong => {
                          return prevSong.filter(sm => sm.id !== song.id)
                        })
                       }} 

variant="outlined" sx={{height:27.5, color:"red", borderColor: "red"}} >
                        Remove
                    </Button>
                </Box>
                </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 100,
                            height: 100,
                            marginLeft: 'auto'}}
                        image={song.song_picture}
                        alt={song.song_name}
                    />
            </Card>
          </Grid>



))}
</Grid>
</div>
)}

        </div>
        
       
    )
}

export default PlaylistView;