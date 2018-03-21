import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';


class App extends Component {

  state = {
    
  }

  componentDidMount(){
    this._getMovies()
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _renderMovies = ()=>{
    
    const movie = this.state.movies.map(movie=>{
      console.log(movie)
      return <Movie title={movie.title} poster={movie.medium_cover_image} key={movie.id} 
      genres = {movie.genres} synopsis = {movie.synopsis}  />
    })
    return movie
  }

  render() {
    const movies = this.state.movies
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : 'Loading'}
      </div>
    );
  }
}

class MoviePoster extends Component{
  render(){
    return(
      <img src="" />
    )
  }
}

export default App;
