import './App.css';
import React, { useEffect, useState } from 'react';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews'; 
import MovieList from './components/movieList/MovieList';
import GenreMovieList from './components/movieList/GenreMovieList';
import SingleMovie from './components/movieList/SingleMovie';


function App() {
  //movies stores array of movie data, setMovies is a function that changes the state 
  const[movies, setMovies] = useState([]);
  const[movie, setMovie] = useState();
  const[reviews, setReviews] = useState([]);
  
  const getMovies = async() => {

    try{
      const response = await api.get("/api/v1/movies")
      // console.log(response.data);
      setMovies(response.data);
    } catch(err) {
      console.log(err);
    }
  }


const getMovieData = async(movieId) => {
  try {
    const response = await api.get(`/api/v1/movies/${movieId}`);
    const singleMovie = response.data;
    setMovie(singleMovie);
    setReviews(singleMovie.reviewIDs);

  } catch(err) {
    console.error(err);
  }
}


useEffect(() => {
  getMovies(); 
},[]);

 
  return (
    <div className="App">
      <Header/>
      <Routes>  
        <Route path="/" element={<Layout/>}>
        <Route path="/" element={<Home movies={movies}/>}></Route>
        <Route path="/MovieList" element={<MovieList movies={movies} setmovies={setMovies}/>}></Route>
        <Route path="/Trailer/:ytTrailerId" element={<Trailer/>}></Route>
        <Route path="/Reviews/:movieId" element={<Reviews getMovieData={getMovieData} movie={movie} reviews={reviews}
        setReviews={setReviews}/>}></Route>
        <Route path="/MovieList/:genre" element={<GenreMovieList movies={movies} setMovies={setMovies}/>}></Route>
        <Route path="/Movie/:movieTitle" element={<SingleMovie movie={movie} setMovie={setMovie} />}></Route>
        </Route>
      </Routes>
    </div>
  );
  
}

export default App;
