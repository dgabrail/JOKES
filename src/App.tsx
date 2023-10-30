import React, { useState } from 'react';
import './App.css';
import NumberMovies from './components/Movie/Movie';
import Jokes from './components/Jokes/Jokes';
import MovieChoise from './components/MovieChoise/MovieChoise';


function App() {

  return (
    <div className="App">
      <MovieChoise/>
      <Jokes/>
    </div>
  );
}

export default App;
 