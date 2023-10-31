import React, { useEffect , useState} from "react";
import "./movieDetails.css";
import { FaStar } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from "react-router-dom";

function MovieDetails() {
    const { eachMovie , background, key} = useLocation().state;
    const [trailerUrl, setTrailerUrl] = useState("");
    const [moreMovieDetails, setMoreMovieDetails] = useState({});

    const navigate = useNavigate();
    console.log('start',`https://image.tmdb.org/t/p/w500//${background}`,'end')

  const generateStarRating = (rating) => {
    const stars = [];
    const filledStar = <FaStar className="star_filled" />;

    for (let i = 1; i <= rating; i++) {
      stars.push(<span className="star_filled">{filledStar}</span>);
    }

    return stars;
  };

    useEffect(() => {
     fetchMoreMovieDetails(key)
    
    fetchTrailer();
  }, []);
    
     const apiKey = 'adc432fc6ba789e3ac5d21f883b3a5a3';
    
    const fetchMoreMovieDetails = async (movieID) => {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}`);
        const data = await response.json();

        setMoreMovieDetails(data);

        console.log('time', moreMovieDetails, 'data', data);

    } 

    function movieDuration(minutes) {
          const hours = Math.floor(minutes / 60);
          const remainingMinutes = minutes % 60;

          const formattedTime =
            (hours > 0 ? hours + " hour" + (hours > 1 ? "s" : "") : "") +
            (remainingMinutes > 0 ? " " + remainingMinutes + " minute" + (remainingMinutes > 1 ? "s" : "") : "");

             return formattedTime.trim();
      }

 const fetchTrailer = async () => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${eachMovie.id}/videos?api_key=adc432fc6ba789e3ac5d21f883b3a5a3`
    );
    const data = await response.json();
    const trailerKey = data.results[0]?.key;
    if (trailerKey) {
      const trailerUrl = `https://www.youtube.com/embed/${trailerKey}`;
      setTrailerUrl(trailerUrl);
    } else {
      console.log("No trailer available for this movie.");
    }
  } catch (error) {
    console.error("Error fetching trailer:", error);
  }
    };

    const returnToHome = () => {
        navigate('/');
    }
    
    let backdrop_path = `${eachMovie.backdrop_path}`
    let backdropString = `https://image.tmdb.org/t/p/w500/${backdrop_path}` 
    console.log(backdropString);
  return (
    <>
      <div className="movie_details_container">
        <div className="movie_details_wrapper">
          <div className="movie_wrapper_details">
            <div className="backdrop_image_wrapper"  style={{ backgroundImage: `url(${backdropString})` }}>
               <IoIosArrowBack className="icon_back" onClick={returnToHome}/>
               <div className="h1_movie_details">{eachMovie.title}</div>
            </div>
            <div className="details_container">
              <div className="original_title format">Original Title</div>
              <div className="dtext">{eachMovie.original_title}</div>
              <div className="original_language format">Original Language</div>
              <div className="dtext">{eachMovie.original_language}</div>
              <div className="released_date ">
                <span className="format">Released Date:</span>{" "}
                <span className="dtext">{eachMovie.release_date}</span>
              </div>
              <div className="original_title ">
                <span className="format">Rating:</span>
                <span className="dtext">{eachMovie.vote_average}/10</span>
              </div>
              <div className="stars">
                {generateStarRating(Math.floor(eachMovie.vote_average))}
              </div>
                <div className="duration">
                              <span className="format">Duration:</span>
                              <span className="dtext">{ movieDuration(moreMovieDetails.runtime)}</span>
                  </div>
                <div className="status duration">
                              <span className="format">status:</span>
                              <span className="dtext">{ moreMovieDetails.status}</span>
                  </div>
                <div className="slogan duration">
                              <span className="format">Movie Slogan:</span>
                              <span className="dtext">{ moreMovieDetails.tagline}</span>
                  </div>
                 <div className="genre duration">
                    <span className="format">Movie Genre:</span>
                    <div className="genre_list">{moreMovieDetails.genres && moreMovieDetails.genres.map(item => (
                      <div  key={item.id}>
                        <li className="dtext">{item.name}</li>
                           </div>
                               ))}</div>
                          </div>
                <div className="status duration">
                              <span className="format">viewers { '>'}18:</span>
                              <span className="dtext">{ moreMovieDetails.adult?'True':'false'}</span>
                  </div>                          
            </div>
          </div>
          <div className="movie_details_overview">
            <div className="md">Movie Description</div>
            <div className="actual_text">{eachMovie.overview}</div>
            <div className="slogan duration">
                              <span className="format">Website:</span>
                              <span className="dtext"><a className="dtext" href={moreMovieDetails.homepage}>Home Page</a></span>
                  </div>
            <div className="slogan duration">
                              <span className="format">Production Companies</span>
                          <div className="pdC">{moreMovieDetails.production_companies && moreMovieDetails.production_companies.map(item => {
                              return <div className="company_wrapper">
                                  <div className="dtext">{item.name}</div>
                                  <div className="container_logo"><img className="comp_image" src={`https://image.tmdb.org/t/p/w500${item.logo_path}`} alt="logo of company" /></div>    
                        
                              </div>
                          }) }</div>
                  </div>
                <div className="slogan duration">
                              <span className="format">Film Budget:</span>
              <span className="dtext"> { moreMovieDetails.budget} USD</span>
                  </div>      
                <div className="slogan duration">
                              <span className="format">Renenue:</span>
              <span className="dtext"> { moreMovieDetails.revenue} USD</span>
                  </div>      
          </div>

          <div className="trailer">Trailer</div>

          {trailerUrl && (
              <div className="trailer_container">
                   <iframe
                      src={trailerUrl}
                      width="1350"
                      height="500"
                      frameBorder="0"
                      allowFullScreen
                      ></iframe>
                  </div>
                  )}
                     
        </div>
      </div>
    </>
  );
}

export default MovieDetails;