import React from "react";
import './genre.css'
import tvShows from '../../assets/tvShow.jpg'
import movies from '../../assets/movies.jpg'
import anima from '../../assets/anima.jpg'
import series from '../../assets/series.jpg'

function Genre() {
    return (
        <>
            <div className="genre_container">
                <div className="genre_pic_container">
                    <img src={tvShows} alt="tvshow" />
                </div>
                <div className="genre_pic_container">
                    <img src={movies} alt="tvshow" />
                </div>
                <div className="genre_pic_container">
                    <img src={anima} alt="tvshow" />
                </div>
                <div className="genre_pic_container">
                    <img src={series} alt="tvshow" />
                </div>
                
        </div>
        </>
    )
}

export default Genre;