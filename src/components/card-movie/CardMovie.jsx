import React from "react";
import styles from './CardMovie.module.css';

function CardMovie(props) {
    let list = '';
    if (!props.error) {
        list = props.movies.map((elem, index) => {
            return <>
                <div className={styles.card} key={index}>
                    <div className={styles.blockImg}>
                        <img src={elem.Poster} alt={elem.Title} className={styles.cardImg} />
                    </div>
                    <div className={styles.blockDescr}>
                        <p className={styles.title}>{elem.Title}</p>
                        <p className={styles.year}>Year: {elem.Year}</p>
                    </div>

                </div>
            </>

        });
    }
    else {
        return <>
            <div className={styles.card}>ХУЙ</div>
        </>
    }


    return (
        <>
            {list}
        </>
    )
}

export default CardMovie;
