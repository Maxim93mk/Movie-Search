import React from "react";
import styles from './CardMovie.module.css';

function CardMovie(props) {
    let list = props.movies.map((elem, index) => {
        return <>
            <div className={styles.card} key={index}>
                <div className={styles.blockImg}>
                    <img src={elem.Poster} alt={elem.Title} className={styles.cardImg} />
                </div>
                <div className={styles.blockDescr}>
                     <p className={styles.title}>{elem.Title}</p>
                <p className={styles.year}>{elem.Year}</p>
                </div>
               
            </div>
        </>

    });

    return (
        <>
            {list}
        </>
    )
}

export default CardMovie;
