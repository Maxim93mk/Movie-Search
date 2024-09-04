import React, { useState } from "react";
import styles from './CardMovie.module.css';
import useGetMovies from '../../utils/getDataAPI';
import { useNavigate } from "react-router-dom";
import MoviePage from "../../pages/movie-page/MoviePage";

function CardMovie(props) {
    const Id = props.Id
    const navigate = useNavigate();

    const redirectMoviePage = () => {
        return navigate('/movie', { state: { Id } });
    }

    return (
        <>
            <div className={styles.card}
                onClick={redirectMoviePage}>
                <div className={styles.blockImg}>
                    <img src={props.Poster} alt={props.Title} className={styles.cardImg} />
                </div>
                <div className={styles.blockDescr}>
                    <p className={styles.title}>{props.Title}</p>
                    <p className={styles.year}>Year: {props.Year}</p>
                </div>

            </div>
        </>
    );
}

export default CardMovie;
