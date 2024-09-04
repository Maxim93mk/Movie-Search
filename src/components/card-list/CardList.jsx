import React from "react";
import CardMovie from '..//card-movie/CardMovie';
import NotFound from "../not-found/NotFound";
import styles from './CardList.module.css';

function CardList(props) {
    if (props.error) {
        return (
            <>
                <section className={styles.NotFound}>
                    <NotFound TitleMsg={'404'}
                        DescrMsg={'Not Found'} />
                </section>
            </>
        )

    }
    else {
         if (props.movies.length===0 || props.movies.Response==='False') {
            return (
                <>
                    <section className={styles.NotFound}>
                        <NotFound TitleMsg={'Oops...'}
                            DescrMsg={'There Are No Search Results...'} />
                    </section>
                </>
            )
        }
        else {
            let cardMovies = props.movies.Search.map((elem) => {
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
