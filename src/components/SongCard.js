import {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

function SongCard(props) {
    console.log(props)

    return(
        
        <Card sx={{maxWidth: 100}}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="100"
                    image= {props.item.artworkUrl100}
                    alt ={props.item.artistName}
                />
                <CardContent>
                    {props.item.trackName}
                </CardContent>
                <CardContent>
                    {props.item.artistName}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default SongCard