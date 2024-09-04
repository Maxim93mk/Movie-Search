import React from "react";
import styles from './MovieDescr.module.css';

function MovieDescr(props) {
    return (
        <>
            <div className={styles.MovieBlock}>
                <div className={styles.left}>
                    <img src={props.movies.Poster} alt={props.movies.Title} />
                </div>
                <div className={styles.right}>
                    <h1 className={styles.title}>{props.movies.Title}</h1>
                    <p className={styles.descr}><span className={styles.span}>Description:</span> {props.movies.Plot}</p>
                    <p className={styles.year}><span className={styles.span}>Year:</span> {props.movies.Year}</p>
                    <p className={styles.genre}><span className={styles.span}>Genre:</span> {props.movies.Genre}</p>
                    <p className={styles.director}><span className={styles.span}>Director:</span> {props.movies.Director}</p>
                    <p className={styles.actors}><span className={styles.span}>Actors:</span> {props.movies.Actors}</p>
                </div>
            </div>
        </>
    );
}

export default MovieDescr;