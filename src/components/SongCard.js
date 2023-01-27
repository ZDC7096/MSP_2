import {useState} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import supabase from "../config/supabaseClient"

function SongCard(props) {

    const importData = async () => {
            const { data, error} =  await supabase
            .from('playlist')
            .insert([{artist: props.item.artistName, song_name: props.item.trackName, song_picture: props.item.artworkUrl100 }])
            .select()
        }


    return(
        <div>
        <Card sx={{maxWidth: 100}}>
            <CardActionArea  onClick={importData}>
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
        </div>
    )
}

export default SongCard