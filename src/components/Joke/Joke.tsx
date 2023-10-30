import React from 'react';
import './Joke.css'
interface Props {
  joke: string;
}

const Joke: React.FC<Props> = ({ joke }) => {
  return (
    <div className='Joke'>
      <p>{joke}</p>
    </div>
  )
}

export default Joke;
