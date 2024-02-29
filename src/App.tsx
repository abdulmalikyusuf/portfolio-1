import React from 'react';


import Portfolio from './pages/Portfolio';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App():JSX.Element {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
