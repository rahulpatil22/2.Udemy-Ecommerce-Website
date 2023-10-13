import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import './App.css';

function App() {
  return (
    <>
      <Header />
      <MainContainer />
    </>
  );
}

export default App;

