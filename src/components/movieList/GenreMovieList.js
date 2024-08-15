import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './MovieList.css';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import api from '../../api/axiosConfig';

const GenreMovieList = ({movies, setMovies}) => {

    const params = useParams();
    const genre = params.genre;

   const handleMovieSelect = async(genre) => {
    try {
        const response = genre === 'All' ? await api.get(`/api/v1/movies/search`) :
        await api.get(`/api/v1/movies/search?genre=${genre}`);
        setMovies(response.data); 
    } catch (e) {
      console.log(e); 
    }
  }

    useEffect(()=>{
        handleMovieSelect(genre);
    },[genre])

  return (

    <div className='movie-list-container'>
    <ImageList sx={{ width: '100%', height: 'auto' }} cols={5}>
      {movies?.map((movie) => (
        // <Paper elevation={3}>
            <ImageListItem key={movie.imdbId} >
          <img
            srcSet={movie.poster}
            src={movie.poster}
            alt={movie.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={movie.title}
            subtitle={<span>released: {movie.releaseDate}</span>}
            position="below"
          />
        </ImageListItem>
        // </Paper>
      ))}
    </ImageList>


    </div>
  )
}

export default GenreMovieList