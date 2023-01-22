import {useEffect, useState} from 'react'
import supabase from "../config/supabaseClient"

const Create =() => {
    const [song_name, setsong_Name] = useState('')
    const [artist, setArtist] = useState('')
    const [formError, setFormError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!song_name || !artist){
            setFormError('Please fill in all the fields correctly')
            return
        }

        console.log(song_name, artist)
        const { data, error} = await supabase
        .from('playlist')
        .insert([{song_name, artist}])
        .select()

        if (error) {
            console.log(error)
            setFormError('Please fill in the form correctly')
        }

        if (data){
            console.log(data)
            setFormError(null)
        }

    }

    return(
        <div className="page create">
        <form onSubmit={handleSubmit}>
          <label htmlFor="song_name">song_name:</label>
          <input 
            type="text" 
            id="song_name"
            value={song_name}
            onChange={(e) => setsong_Name(e.target.value)}
          />
  
          <label htmlFor="artist">artist:</label>
          <textarea 
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
          />
  
          <button>Add Song</button>
  
          {formError && <p className="error">{formError}</p>}
        </form>
      </div>
    )
};

export default Create;