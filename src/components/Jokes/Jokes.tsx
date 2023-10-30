import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Joke from '../Joke/Joke';
const URL = 'https://v2.jokeapi.dev/joke/Programming';

const Jokes = () => {
  const [joke, setJoke] = useState('');

  const newJok = async () => {
    const reqest = await axios(URL);
    if (reqest.data.joke === undefined) {
      setJoke('No joke yet');
    } else { setJoke(reqest.data.joke) }
  }

  useEffect(() => {
    newJok();
  }, []);

  return (
    <div>
      <Joke joke={joke} />
      <button className='btn btn-success' onClick={newJok}>New jok</button>
    </div >
  )
}

export default Jokes
