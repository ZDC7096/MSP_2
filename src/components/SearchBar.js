import { useState } from 'react'
import { TextField, Button } from '@mui/material'

function SearchBar(props) {
    let [searchTerm, setSearchTerm] = useState('')
    

    return (
        <form onSubmit={(e) => props.handleSearch(e, searchTerm)}>

            <TextField id="outlined-basic" label="Search" variant="outlined" type="text" 
                sx={{height:"50px"}}
                onChange={
                    (e) => setSearchTerm(e.target.value)
                } />

            <Button variant="contained" type="submit" sx={{height: "50px"}}>Submit</Button>

        </form>
    )
}

export default SearchBar