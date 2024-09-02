import React from "react";
import styles from './CardMovie.module.css';

function CardMovie(props) {
    return (
        <>  
         <div className={styles.card}>
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
