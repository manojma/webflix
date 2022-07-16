import React, { useState, useEffect } from 'react';
import axios from '../axios';
import "./row.css";


const base_url = "https://image.tmdb.org/t/p/original/";
var currMovie;
var scroll = false;
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [showhide, setShowHide] = useState(false);

    useEffect(() => {
        async function fetchData(){
            const requests = await axios.get(fetchUrl);
            setMovies(requests.data.results);
            return requests;
        }
        fetchData();
    }, [fetchUrl]);

    const handleClick = (movie) => {
        currMovie = movie;
        // console.log(currMovie);
        setShowHide(!showhide)
        if(scroll === true){
            window.scrollBy({
                top: -300,
                left: 0,
                behavior : "smooth"
            })
            scroll = false;
        }
        else{
            window.scrollBy({
                top: 300,
                left: 0,
                behavior : "smooth"
            })
            scroll = true;
        }

    };
    return (
        <div className="row" >
            <h2>{title}</h2>

            <div className="row_posters">
            
            {movies.map(movie => (
                <img key={movie.id} onClick={() => handleClick(movie)} className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
                    
            ))}
            </div>

            {showhide && <div Style="background-color: rgb(16 16 16)">
            <h2 Style="padding: 20px 0px 0px 30px;">{currMovie?.title || currMovie?.name}</h2>
            <div Style="display:flex; margin:auto; margin-top:-2%">
                <div Style="margin: 2%">
            <img Style="width: 80%; height: 80% margin: 10%" src={`${base_url}${currMovie?.backdrop_path}`} alt={currMovie?.name}></img>
            </div>

            <div Style="margin: auto; margin-right:10%">
            <h4><b>Overview</b></h4>
            <p Style="text-align: justify; text-justify: inter-word;">{currMovie?.overview}</p>
            <p><b>Original Language:</b> {currMovie?.original_language}</p>
            <p><b>Ratings:</b> {currMovie?.vote_average}</p>
            <p><b>Votes:</b> {currMovie?.vote_count}</p>
            <p><b>Popularity:</b> {currMovie?.popularity}</p>
            <p><b>Release date:</b> {currMovie?.first_air_date || currMovie?.release_date}</p>
            </div>
            </div>
            </div>}

        </div>
    )
}

export default Row
