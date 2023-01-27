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
<>
<NavBar/>
 {/* <Router>

<Routes>  
          <Route path="/" element={<NavBar/>}/>
          <Route path="/search" element={<Search />} />
          <Route path="/playlistview" element={<PlaylistView />} />
        </Routes>
     </Router> */}
</>




  )
}
    


export default App;

