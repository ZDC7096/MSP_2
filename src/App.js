import './App.css';
import supabase from "./config/supabaseClient"
import Home from "./components/Home"
import { BrowserRouter, Routes, Route, Link, Router, } from "react-router-dom"
import Default from './components/Default';
//package imports/requirements
//require('dotenv').config();

//spotify links
const REDIRECT_URI="http://localhost:3000/"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


function App() {
  return (
    <div className="App">

      {/* RENDERS HOME COMPONENT */}
      <Home/>
    </div>
    


  );
  }


export default App;