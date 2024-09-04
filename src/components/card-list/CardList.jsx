import React from "react";
import CardMovie from '..//card-movie/CardMovie';
import NotFound from "../not-found/NotFound";
import styles from './CardList.module.css';

function CardList(props) {

    if (props.error) {
        return (
            <>
                <section className={styles.NotFound}>
                    <NotFound />
                </section>
            </>
        )

    }
    else {
        if (props.movies.length === 0) {
            return <p>No results</p> // Стилизовать компонент, сделать в компоненте not found
        }
        else {
            let cardMovies = props.movies.map((elem) => {
                return <CardMovie key={elem.imdbID}
                    Id={elem.imdbID}
                    Title={elem.Title}
                    Poster={elem.Poster}
                    Year={elem.Year} />
            });

            return (
                <>
                    <section className={styles.main}>
                        {cardMovies}
                    </section>

                </>
            );
        }
    }
}

export default CardList;
