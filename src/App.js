import './App.css';
import supabase from "./config/supabaseClient"
import Home from "./components/Home"
import Test from "./components/Test"
import { BrowserRouter, Routes, Route, Link, Router, } from "react-router-dom"
//package imports/requirements
//require('dotenv').config();

//spotify links
const REDIRECT_URI="http://localhost:3000/"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


function App() {
  return (
    <div className="App">
      <h1>Playlist Maker</h1>
        <a href={`${AUTH_ENDPOINT}?client_id=${process.env.CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`} >button</a>

      {/* RENDERS HOME COMPONENT */}
      <Home/>
    </div>
    


  );
  }


export default App;