import React, { useEffect } from "react";
import styles from './MovieDescr.module.css';
import useGetMovies from '../../utils/getDataAPI';

function MovieDescr(props) {
    const { movies, error, fetchData } = useGetMovies();
    const paramQuery = '?i=' + props.getIdMovie;

    console.log(paramQuery);

    useEffect(() => {
        fetchData(paramQuery);
    }, []);


    return (
        <>
            <div className={styles.MovieBlock}>
                <div className={styles.left}>
                    <img src={movies.Poster} alt={movies.Title} />
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>{movies.Title}</h1>
                    <p className={styles.descr}><span className={styles.span}>Description:</span> {movies.Plot}</p>
                    <p className={styles.year}><span className={styles.span}>Year:</span> {movies.Year}</p>
                    <p className={styles.genre}><span className={styles.span}>Genre:</span> {movies.Genre}</p>
                    <p className={styles.director}><span className={styles.span}>Director:</span> {movies.Director}</p>
                    <p className={styles.actors}><span className={styles.span}>Actors:</span> {movies.Actors}</p>
                </div>
            </div>
        </>
    );
}

export default MovieDescr;