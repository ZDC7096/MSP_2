import {useState, useEffect} from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import supabase from "../config/supabaseClient"
const React = require('react')

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
              console.log(data)
            setSongs(data)
            setFetchError(null)
          }
        }
    
        fetchsongs()
    
      }, [])
    
    return(
        <div>
{songsBruh && (
    <div>
{songsBruh.map(song =>(

        <div>
            <Card sx={{maxWidth: 100}}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="100"
                        image= {song.song_picture}
                        alt ={song.artist}
                    />
                    <CardContent>
                        
                        {song.song_name}
                    </CardContent>
                    <CardContent>
                        {song.artist}
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>


))}
</div>
)}
        </div>

    )
}

export default PlaylistView;