import React from 'react';
import './App.css';
import Search from './components/Search'
import PlaylistView from './components/PlaylistView';
import DisplaySongs from './components/DisplaySongs';
import NavBar from './components/NavBar'
import Home from './components/Home'
import { ContactEmergency } from '@mui/icons-material';


function App() {
  return(
    <div style={{backgroundColor: "#CDCDCD"}}>
  <Router>
    <NavBar/>
<Routes>  
<Route path="/" element={<Home/>}/>
<Route path="/search" element={<Search />} />
<Route path="/playlistview" element={<PlaylistView />} />
</Routes>
</Router>
</div>


  )
}
    
export default App;

