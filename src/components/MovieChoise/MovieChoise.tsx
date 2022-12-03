import React, { Component, MouseEventHandler } from 'react'
import { MovieName } from '../../types';

interface Props {
  id: string;
  nameMovie: string
  remove: React.MouseEventHandler
  name: React.ChangeEventHandler<HTMLInputElement>
  Movies: MovieName[]
}

class MovieChoise extends Component<Props> {

  shouldComponentUpdate(nextProps: Readonly<Props>, ): boolean {
    if(this.props.name === nextProps.name && this.props.Movies === nextProps.Movies){
      return false
    }
    return true
  }
  render() {
    return (
      <div style={{marginTop:'10px'}}>
        <input onChange={this.props.name}  value={this.props.nameMovie} type="text"/>
        <button onClick={this.props.remove}>X</button>
      </div>
    )
  }
}

export default MovieChoise
