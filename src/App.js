import React from 'react';
import './App.css';
import './components/Landing.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import TicTacToe from './components/TicTacToe';
import Landing from './components/Landing.js';
import TicTacToe from './components/TicTacToe';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Landing  />}/>
        <Route path='TicTacToe' element={<TicTacToe/>}/>
      </Routes>
    </BrowserRouter>
  //  <div className="App">
  //    <Landing/>
  //    {/* <TicTacToe/> */}
  //    </div>
  );
}

export default App;
