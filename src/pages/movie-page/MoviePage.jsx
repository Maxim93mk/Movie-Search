import React from "react";
import styles from './MoviePage.module.css';
import { useState, useEffect } from "react";
import useGetMovies from '../../utils/getDataAPI';
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';
import MovieDescr from "../../components/movie-descr/MovieDescr";
import NotFound from "../../components/not-found/NotFound";

function MoviePage() {
    const location = useLocation();
    const [moviesx] = useState(location.state.movies);
    const [errox] = useState(location.state.error);
     const { movies, error, fetchData } = useGetMovies();
    // const param = '?i=';
    // let query = param + iDMovie;

    useEffect(() => {
        fetchData();
    }, []);

    if (errox) {
        return (
            <>
                <section className={styles.NotFound}>
                    <NotFound TitleMsg={'404'}
                        DescrMsg={'Not Found'} />
                </section>
            </>
        );

    }
    else {
        return (
            
            <>
                <Header fetchData={fetchData} />
                <main>

                    <div className="wrapper">
                        <section className={styles.main}>
                            <MovieDescr movies={moviesx} />
                        </section>
                    </div>

                </main>

            </>
        );
    }

}

export default MoviePage;