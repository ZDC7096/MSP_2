import {useState} from 'react'
import { Button, Card, Box, createTheme, Typography, CardContent, CardMedia, Grid, ThemeProvider } from '@mui/material';
import supabase from "../config/supabaseClient"

const theme = createTheme()

theme.typography.h3 = {
    fontSize: 11
}

theme.typography.h4 = {
    fontSize: 10
}



function SongCard(props) {

    const importData = async () => {
            const { data, error} =  await supabase
            .from('playlist')
            .insert([{artist: props.item.artistName, song_name: props.item.trackName, song_picture: props.item.artworkUrl100 }])
            .select()
        }

        const theme = createTheme()

        theme.typography.h3 = {
            fontSize: 11
        }
    
        theme.typography.h4 = {
            fontSize: 10
        }

        theme.typography.h3 = {
            fontSize: 11,
            color: '#000000'
        }

        theme.typography.h4 = {
            fontSize: 10,
            color: '#000000'
        }

    return(
        
        <Grid item xs={"auto"}>
            <Card style={{backgroundColor: "#F3F3F3"}} sx={{ display: 'flex', height: 100, maxWidth: 275, minWidth: 275 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', height: 33 }}>
                        <ThemeProvider theme={theme}>
                        <Typography component="div" variant="h3">
                            {props.item.trackName}
                        </Typography>
                        <Typography variant="h4"  component="div">
                            {props.item.artistName}
                        </Typography>
                        </ThemeProvider>
                    </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Button onClick={importData} variant="outlined" sx={{height:27.5}} >
                        Add
                    </Button>
                </Box>
                </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 100,
                            height: 100,
                            marginLeft: 'auto'}}
                        image={props.item.artworkUrl100}
                        alt={props.item.trackName}
                    />
            </Card>
        </Grid>
        
    )
}

export default SongCard;