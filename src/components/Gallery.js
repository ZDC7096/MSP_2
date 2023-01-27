import { Grid } from '@mui/material'
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
            <Grid container direction={"row"}
            justifyContent={'center'}>
                <Grid xs={6}>
                    {display}
                </Grid>
            </Grid>
        </div>
    )
}

export default Gallery