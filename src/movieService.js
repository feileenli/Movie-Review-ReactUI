//a service file to handle api requests 
// src/movieService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/movies';

export const fetchMovies = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
};

export const fetchSingleMovies = async (imdbId) => {
  try {
    const response = await axios.get(API_URL + '/' + imdbId);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching single movie:', error);
    throw error;
  }
};
