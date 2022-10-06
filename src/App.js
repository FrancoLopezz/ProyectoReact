import React from 'react'; 
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './routes/Home'
import Character from './routes/character/Character';
import CharacterId from './routes/character/CharacterId'
import Planets from './routes/planets/Planets'
import PlanetsId from './routes/planets/PlanetsId';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/characters" element={<Character/> } />
        <Route exact path="/characters/:id" element={<CharacterId/> } />
        <Route exact path="/planets" element={<Planets/>} />
        <Route exact path="/planets/:id" element={<PlanetsId/>} />
      </Routes>
    </BrowserRouter>
  );
}


