import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import Search from './components/Search'
import PlaylistView from './components/PlaylistView';
import DisplaySongs from './components/DisplaySongs';
import NavBar from './components/NavBar'


function App() {
  return(
    
<div style={{backgroundColor: "#464544"}}>
<NavBar/>
</div>

  )
}
    


export default App;

