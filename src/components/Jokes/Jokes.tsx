import React, { useEffect, useState } from 'react'
import axios from 'axios'

const URL = 'https://v2.jokeapi.dev/joke/Programming'
const Jokes = () => {
  const [jok, setJok] = useState('')
  
  const newJok = async () => {
    const reqest = await axios(URL)
    setJok(reqest.data.joke)
  }

  useEffect(() => {
    newJok()
  }, [])

  return (
    <div style={{ border: '1px solid black', margin: '30px', textAlign: 'left' }}>
      <div style={{ margin: '10px' }}>
        <div>
          <p>{jok}</p>
        </div>
        <button className='btn btn-success' onClick={newJok}>New jok</button>
      </div>
    </div>
  )
}

export default Jokes
