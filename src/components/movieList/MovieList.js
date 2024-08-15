import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import './MovieList.css';

const MovieList = ({movies}) => {

  return (
    <div className='movie-list-container'>
        {/* <ul className='movie-grid'>
            {movies?.map(movie => (
                <li className='movie-detail' key={movie.imdbId}>
                    <Paper elevation={3} className='movie-paper'>
                        <div className='movie-poster'>
                            <img src={movie.poster} alt='poster'/>
                        </div>
                        <div className='movie-title'>
                            <h4>{movie.title}</h4>
                        </div>
                    </Paper>
                </li>
            ))}
        </ul>     */}
    <ImageList sx={{ width: '100vw', height: '100vh' }} cols={5}>
      {movies?.map((movie) => (
        // <Paper elevation={3}>
            <ImageListItem key={movie.imdbId}>
          <img
            srcSet={`${movie.poster}?w=248&fit=crop&auto=format&dpr=2 2x`}
            src={`${movie.poster}?w=248&fit=crop&auto=format`}
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

export default MovieList