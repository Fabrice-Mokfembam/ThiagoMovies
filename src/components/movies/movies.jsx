import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './movies.css';
import { useNavigate, Routes, Route } from 'react-router-dom';
import MovieDetails from '../MovieDetails/movieDetails';

const Movies = ({ searchValue }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [eachMovie, setEachMovie] = useState({});
  const [background, setBakground] = useState('');

  const navigate = useNavigate();

  function navigateToMovieDetails(movie,backdrop_path,movieID) {
      navigate('/movieDetails', {
          state: {
              eachMovie: movie,
              background: backdrop_path,
              key:movieID
          }
      });
  }

  useEffect(() => {
    setSearchTerm(searchValue);
  }, [searchValue]);

  useEffect(() => {
    fetchMovies();
    console.log(movies);
    setBakground(`https://image.tmdb.org/t/p/w500${movies[0]?.backdrop_path}`);
  }, [searchTerm]);

  const fetchMovies = () => {
    const apiKey = 'adc432fc6ba789e3ac5d21f883b3a5a3';

    let url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}`;

    if (searchTerm === 'discover') {
      url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;
    } else if (searchTerm === 'trending') {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;
    } else if (searchTerm !== '') {
      url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(
        searchTerm
      )}`;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.log(error));
  };

  const generateStarRating = (rating) => {
    const stars = [];
    const filledStar = <FaStar className="star_filled" />;

    for (let i = 1; i <= rating; i++) {
      stars.push(<span className="star_filled">{filledStar}</span>);
    }

    return stars;
  };

  return (
    <div className="movie_container">
      {movies.length > 0 ? (
        movies.map((movie) => {
          return (
              <div className="movie_wrapper" key={movie.id} onClick={() => {
                  navigateToMovieDetails(movie,movie.backdrop_path,movie.id)
            
              }}>
              <div>
                {movie.poster_path ? (
                  <img
                    className="movie_image"
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt="image"
                  />
                ) : (
                  <div className="no_image_part">
                    <p p_image>no image found</p>
                  </div>
                )}
                <div className="movie_title">{movie.title}</div>
                <div className="star_rating">
                  <div className="textOfRating">
                    Rating: <span className="figure_rating">{movie.vote_average}/10 </span>
                  </div>
                          <div>{generateStarRating(Math.floor(movie.vote_average))}</div>
                       
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <div className="loading">Loading movies......</div>
      )}
      <Routes>
        <Route path="/movieDetails" element={<MovieDetails eachMovie={eachMovie} movie={movies} />} />
      </Routes>
    </div>
  );
};

export default Movies;