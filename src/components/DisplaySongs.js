import supabase from "../config/supabaseClient"
import {useEffect, useState} from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';


const DisplaySongs = () => {
    const [fetchError, setFetchError] = useState(null)
    const [songs, setSongs] = useState(null)
  
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
  
    return (

        //Displays Data on page
      <div className="page home">
        {fetchError && (<p>{fetchError}</p>)}
        {songs && (
          <div className="songs">
           
            <div className="song-grid">
              {songs.map(song => (
                <p>{song.song_name}</p>
              ))}
            </div>
            
          </div>
        )}
      </div>
    )
  }
export default DisplaySongs;