import React from "react";
import styles from './CardMovie.module.css';

function CardMovie(props) {

    const setParamQuery = () => {
        props.setFlagComponent(true);
        props.setIdMovie(props.Id)
    }

    const getPoster = () => {
        if (props.Poster !== 'N/A') {
            return <img src={props.Poster} alt={props.Title} className={styles.cardImg} />
        }
        else {
            return <img src="/assets/img/no_poster.png" alt="no-poster" />
        }
    }

    return (
        <>
            <div className={styles.card}
                onClick={setParamQuery}>
                <div className={styles.blockImg}>{getPoster()}</div>
                <div className={styles.blockDescr}>
                    <p className={styles.title}>{props.Title}</p>
                    <p className={styles.year}>Year: {props.Year}</p>
                </div>

            </div>
        </>
    );
}

export default CardMovie;
