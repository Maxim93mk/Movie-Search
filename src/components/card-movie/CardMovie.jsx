import React, { useState } from "react";
import styles from './CardMovie.module.css';
import useGetMovies from '../../utils/getDataAPI';
import { useNavigate } from "react-router-dom";
import MoviePage from "../../pages/movie-page/MoviePage";

function CardMovie(props) {
    const Id = props.Id
    const navigate = useNavigate();


    const [iDMovie] = useState(Id);
    const { movies, error, fetchData } = useGetMovies();
    const param = '?i=';
    let query = param + iDMovie;


    // const redirectMoviePage = () => {
    //     fetchData(query)
    //     return navigate('/movie', { state: { movies, error } });
    // }
    function test(){
        props.setFlagComponent(true);
    }

    return (
        <>
            <div className={styles.card}
                onClick={test}>
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
