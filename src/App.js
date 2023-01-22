import {useEffect, useState} from 'react';
import './App.css';
import supabase from "./config/supabaseClient"
import Home from "./components/Home"
import Test from "./components/Test"
import { BrowserRouter, Routes, Route, Link, Router, } from "react-router-dom"//
//package imports/requirements
//require('dotenv').config();

function App() {
//spotify links
const REDIRECT_URI="http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"

//pass token and split token as substrings after authenticating to Spotiy

const [token, setToken] = useState("")

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

const logout = () => {
  setToken("")
  window.localStorage.removeItem("token")
}



  return (
    <div className="App">
      <header className="App-header">
      <h1>Spotify App</h1>
      <a href={`${AUTH_ENDPOINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} >Login to Spotify</a>
      </header>
      </div>
  );
}
    


export default App;

