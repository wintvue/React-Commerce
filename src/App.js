import React from 'react';
import './App.css';
import styled from 'styled-components'
import Home from './routes/home/home.component.jsx';
import {Routes, Route} from 'react-router-dom'

const App = () => {
    return (
      <Routes>
        <Route path='/' element={<Home/>}/> 
      </Routes>
    );
}

export default App;