import React, { Component, MouseEventHandler } from 'react'
import { MovieName } from '../../types'
import MovieChoise from '../MovieChoise/MovieChoise'
interface Props {
  Movies: MovieName[]
  removeMove: (index: number) => void 
  nameMovie: (event: React.ChangeEvent<HTMLInputElement> , id:string) => void
}

class Movies extends Component<Props> {
  render() {
    return (
      <div>
        {this.props.Movies.map((movie , index) => (
        <MovieChoise Movies={this.props.Movies} id={movie.id} name={event => this.props.nameMovie(event , movie.id )} remove={() => this.props.removeMove(index)} key={JSON.parse(movie.id)}  nameMovie={movie.name}/>
        ))}
      </div>
    )
  }
}

export default Movies
