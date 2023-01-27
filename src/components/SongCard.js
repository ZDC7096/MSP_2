import {useState} from 'react'
import { createTheme, Grid, ThemeProvider } from '@mui/material'
import { Box, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

function SongCard(props) {
    console.log(props)

    const theme = createTheme()

    theme.typography.h3 = {
        fontSize: 11
    }

    theme.typography.h4 = {
        fontSize: 10
    }

    return(
        <Grid item xs={4}>
            <Card sx={{ display: 'flex', height: 100 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto', height: 33 }}>
                        <ThemeProvider theme={theme}>
                        <Typography component="div" variant="h3">
                            {props.item.trackName}
                        </Typography>
                        <Typography variant="h4" color="text.secondary" component="div">
                            {props.item.artistName}
                        </Typography>
                        </ThemeProvider>
                    </CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Button variant="outlined" sx={{height:27.5}}>
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

export default SongCard