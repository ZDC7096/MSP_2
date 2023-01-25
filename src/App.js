import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import supabase from "./config/supabaseClient"
import Home from "./components/Home"
import Test from "./components/Test"
import { BrowserRouter, Routes, Route, Link, Router, } from "react-router-dom"
//package imports/requirements
//require('dotenv').config();

function App() {
//spotify links
const REDIRECT_URI="http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

//pass token and split token as substrings after authenticating to Spotiy

const [token, setToken] = useState("")
const [searchKey, setSearchKey] = useState("")
const [artists, setArtists] = useState([])

useEffect(() => {
  const hash = window.location.hash
  let token = window.localStorage.getItem("token")
  

  if (!token && hash) {
    token = hash.substring(1).split("&").find (elem => elem.startsWith("access_token")).split("=")[1]
    
    window.location.hash = ""
            window.localStorage.setItem("token", token)
  }
  setToken(token)
}, [])

//logout function

const logout = () => {
  setToken("")
  window.localStorage.removeItem("token")
}

//Search Artist function using axios and react promises
const searchArtists = async (e) => {
  e.preventDefault()
  const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
          Authorization: `Bearer ${token}`
      },
      params: {
          q: searchKey,
          type: "artist"
      }
  })

  setArtists(data.artists.items)
}
//Render Artis results

const renderArtists = () => {
  return artists.map(artist => (
      <div key={artist.id}>
          {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
          {artist.name}
      </div>
  ))
}


  return (
    <div className="App">
      <header className="App-header">
      <h1>Spotify App</h1>
      {!token ?
      <a href={`${AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} >Login to Spotify</a>
      : <button onClick={logout}>Logout</button>}

      {token ?
             <form onSubmit={searchArtists}>
                  <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                  <button type={"submit"}>Search</button>
                </form>

                : <h2>Please login</h2>
                }

                {renderArtists()}
      </header>


      <Home/>
      <Create/>

      </div>
  )
}
    


export default App;

