import React from "react";
import CardMovie from '..//card-movie/CardMovie';
import styles from './CardList.module.css';

function CardList(props) {
    const setFlagComponent = props.setFlagComponent;
    const setIdMovie = props.setIdMovie;

    let cardMovies = props.movies.Search.map((elem) => {
        return <CardMovie key={elem.imdbID}
            Id={elem.imdbID}
            Title={elem.Title}
            Poster={elem.Poster}
            Year={elem.Year}
            setFlagComponent={setFlagComponent}
            setIdMovie={setIdMovie} />
    });

    return (
        <>
            <section className={styles.main}>{cardMovies}</section>
        </>
    );
}


export default CardList;
