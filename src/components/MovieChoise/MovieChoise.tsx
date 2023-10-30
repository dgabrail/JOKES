import React, { Component, MouseEventHandler } from 'react'
import { MovieType } from '../../types';
import Movie from '../Movie/Movie';

interface State {
  movies: MovieType[];
  movie: MovieType;
}

class MovieChoise extends Component<{}, State> {
  state: State = {
    movies: [],
    movie: { movie: '' }
  };

  addMovie() {
    this.state.movies.push(this.state.movie);
    this.setState({
      movies: this.state.movies
    })
  };

  newMovie(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState(prev => ({
      ...prev,
      movie: { movie: e.target.value }
    }))
  };

  changeTitleMovie(e: React.ChangeEvent<HTMLInputElement>, index: number) {
    const newMovie: MovieType = { movie: e.target.value };
    this.state.movies[index] = newMovie;
    this.setState({
      movies: this.state.movies
    })
  };

  deleteMovie(index: number) {
    this.state.movies.splice(index, 1);
    this.setState({
      movies: this.state.movies
    })
  };

  render() {
    return (
      <div style={{ marginTop: '10px' }}>
        <input type="text" onChange={e => this.newMovie(e)} />
        <button onClick={() => this.addMovie()}>Add</button>
        {this.state.movies.map((movie, index) => (
          <Movie deleteMovie={() => this.deleteMovie(index)} changeTitleMovie={e => this.changeTitleMovie(e, index)} index={index} movieTitle={movie.movie} key={JSON.stringify(index)} />
        ))}
      </div>
    )
  }
}

export default MovieChoise
