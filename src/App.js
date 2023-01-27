import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link, Router, } from "react-router-dom"
import Search from './components/Search';
//package imports/requirements
//require('dotenv').config();

function App() {
  return(
    <Search/>
  )
}


export default App;

