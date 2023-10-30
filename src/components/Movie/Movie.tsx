import React, { Component, MouseEventHandler } from 'react'
interface Props {
  movieTitle: string;
  index: number;
  changeTitleMovie: React.ChangeEventHandler<HTMLInputElement>;
  deleteMovie: React.MouseEventHandler;
}

class Movie extends Component<Props> {

  shouldComponentUpdate(nextProps: Readonly<Props>,): boolean {
    return nextProps.movieTitle !== this.props.movieTitle
  }
  render() {
    return (
      <div>
        <input onChange={this.props.changeTitleMovie} value={this.props.movieTitle} type="text" />
        <button onClick={this.props.deleteMovie}>DELETE</button>
      </div>

    )
  }
}

export default Movie
