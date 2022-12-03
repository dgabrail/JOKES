import React, { useState } from 'react';
import './App.css';
import { MovieName } from './types';
import NumberMovies from './components/Movies/NumberMovies';
import Jokes from './components/Jokes/Jokes';


function App() {

  const [showPeople , setShowPeople] = useState(false)
  const [Movies , setMovies] = useState<MovieName[]>([])
  const [movie , setMovie]  = useState({
    name: '',
    id: ''
  }) 

  const name = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('ll')
    setMovie(prev => ({
      ...prev , 
      name: prev.name = event.target.value
    }))
  }

  const nameMovie = (event: React.ChangeEvent<HTMLInputElement> , id: string) => {
    setMovies(prev => prev.map(movie => {
      if(movie.id === id){
          return {
              ...movie,
              name: event.target.value
          }
      }
      return  movie
  }))
  }

  const oo = () => {
    console.log('kk')
  }

  const removeMove = (index: number) => {
    setMovies(prev => {
      const ooo = [...prev]
      ooo.splice(index , 1)
      prev = ooo
      return prev
    })
  }

  const newMovie = () => {
    setMovie(prev => ({
      ...prev , 
      id: prev.id = JSON.stringify(Math.floor(Math.random()* 1000))
    }))
    setMovies(prev => ([...prev , movie]))  
  }
  return (
    <div className="App">
      <input onChange={e => name(e)} style={{margin:'10px'}} type="text"/>
      <button onClick={newMovie}>Add</button>
      <NumberMovies nameMovie={nameMovie} removeMove={removeMove} Movies={Movies}/>
      <Jokes/>
    </div>
  );
}

export default App;
