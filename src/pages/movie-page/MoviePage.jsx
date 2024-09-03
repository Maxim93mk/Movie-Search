import React from "react";
import style from './MoviePage.module.css';
import { useState, useEffect } from "react";
import useGetMovies from '../../utils/getDataAPI';

function MoviePage() {
    const [stringSearch, setStringSearch] = useState(''); // Значение поисковой строки
    const { movies, error, fetchData } = useGetMovies();

    // setStringSearch('Matrix');
    useEffect(() => {
        fetchData("Dracula", 't');
    }, []);

    console.log(movies)

    return (
        <>
            <div className={style.MovieBlock}>
                <div className={style.left}>
                    <img src={movies.Poster} alt={movies.Title} />
                </div>
                <div className={style.right}>
                    <h1 className={style.title}>{movies.Title}</h1>
                    <p className={style.descr}><span className={style.span}>Description:</span> {movies.Plot}</p>
                    <p className={style.year}><span className={style.span}>Year:</span> {movies.Year}</p>
                    <p className={style.genre}><span className={style.span}>Genre:</span> {movies.Genre}</p>
                    <p className={style.director}><span className={style.span}>Director:</span> {movies.Director}</p>
                    <p className={style.actors}><span className={style.span}>Actors:</span> {movies.Actors}</p>
                </div>
            </div>
        </>
    );
}

export default MoviePage;