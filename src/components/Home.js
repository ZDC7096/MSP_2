import supabase from "../config/supabaseClient"
import {useEffect, useState} from 'react'
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, Form, Row, Col, Button } from 'react-bootstrap';


const Home = () => {
    const [fetchError, setFetchError] = useState(null)
    const [songs, setSongs] = useState(null)
  
    useEffect(() => {
      const fetchsongs = async () => {
        const { data, error } = await supabase
          .from('playlist')
          .select()
        
        if (error) {
          setFetchError('Could not fetch the songs')
          setSongs(null)
        }
        if (data) {
            console.log(data)
          setSongs(data)
          setFetchError(null)
        }
      }
  
      fetchsongs()
  
    }, [])
  
    return (
      <div className="page home">
        {fetchError && (<p>{fetchError}</p>)}
        {songs && (
          <div className="songs">
            {/* order-by buttons */}
            <div className="smoothie-grid">
              {songs.map(smoothie => (
                <p>{smoothie.song_name}</p>
              ))}
            </div>
            
          </div>
        )}
      </div>
    )
  }
export default Home;