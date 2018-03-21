import React, {Component} from 'react';
import './Movie.css';
import PropTypes from 'prop-types';
import LinesElipsis from 'react-lines-ellipsis';

function Movie({title, poster, genres, synopsis}){
    return(
        <div className="Movie">
            <div className="Movie__Columns">
            <MoviePoster poster={poster} alt={title} />
            </div>
            <div className="Movie_Columns">
            <h1>{title}</h1>
                <div className="Movie_Genres">
                {genres.map((genre, index)=> <MovieGenres genre={genre} key={index}/>)}
                </div>
                <div className="Movie__Synopsis">
                    <LinesElipsis 
                    text={synopsis}
                    maxLine='3'
                    ellipsis='...'
                    trimRight
                    basedOn='letters'/>
                </div>
            </div>
        </div>
    )
}

function MovieGenres({genre}){
    return(
        <span className="Movie__genre">{genre} </span>
    )
}

function MoviePoster({poster, alt}){
    return(
        <img src={poster} alt={alt} title={alt} className="Movie__poster"/>
    )
}

MovieGenres.propTypes = {
    genre : PropTypes.string.isRequired
}

Movie.propTypes = {
    title : PropTypes.string.isRequired,
    poster : PropTypes.string.isRequired,
    genres : PropTypes.array.isRequired,
    synopsis : PropTypes.string.isRequired
}

MoviePoster.propTypes = {
    poster : PropTypes.string.isRequired,
    alt : PropTypes.string.isRequired
}


export default Movie;