import { Grid, Box } from '@mui/material'
import { useContext } from 'react'
import { DataContext } from './Context/DataContext'
import SongCard from './SongCard'

function Gallery(props) {
    const data = useContext(DataContext)

    const display = data.map((item, index) => {
        return (
            <SongCard key={index} item={item} />
        )
    })

    return (
        <div>
            <Box sx={{
                maxWidth: 1000
            }}>
                <Grid container spacing={3} justify="left">
                    {display}
                </Grid>
            </Box>
        </div>
    )
}

export default Gallery;