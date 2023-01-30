import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import Search from './components/Search'
import PlaylistView from './components/PlaylistView';
import ContactForm from './components/ContactForm';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Simon from './components/Simon'

function App() {
  
  return(
    <div style={{backgroundColor: "#CDCDCD"}}>
  <Router>
    <NavBar/>
<Routes>  
<Route path="/simon" element ={<Simon/>}/>
<Route path="/" element={<Home/>}/>
<Route path="/search" element={<Search />} />
<Route path="/playlistview" element={<PlaylistView />} />
<Route path="/contact" element={<ContactForm />} />
</Routes>
</Router>
</div>


  )
}
    
export default App;

