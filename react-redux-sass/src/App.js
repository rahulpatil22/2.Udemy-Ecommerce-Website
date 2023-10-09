import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from "./components/Header";

import './App.css';
import LandingPage from './components';

function App() {
  return (
    <>
      <Header />
      <section>
      <Routes>
      <Route exact path='/' element={LandingPage}/>
      </Routes>
      </section>
    
    </>
  );
}

export default App;
