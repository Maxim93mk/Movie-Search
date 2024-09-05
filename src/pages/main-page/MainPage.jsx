import React, { useEffect, useState } from 'react';
import useGetMovies from '../../utils/getDataAPI';
import CardList from '../../components/card-list/CardList';
import Header from '../../components/header/Header';
import MovieDescr from '../../components/movie-descr/MovieDescr';
import styles from './MainPage.module.css';


function MainPage() {
    const { movies, error, fetchData } = useGetMovies();
    const [getFlagComponent, setFlagComponent] = useState(false);
    const [getIdMovie, setIdMovie] = useState('')

    const getComponent = () => {
        if (!getFlagComponent) {
            return <CardList movies={movies}
                error={error}
                setFlagComponent={setFlagComponent}
                setIdMovie={setIdMovie} />;
        }
        else {
            return (
                <>
                    <section className={styles.MovieDescr}>
                        <MovieDescr getIdMovie={getIdMovie} />;
                    </section>

                </>
            );

        }
    }

    return (
        <>
            <Header fetchData={fetchData}
                setFlagComponent={setFlagComponent} />
            <main>
                <div className="wrapper">{getComponent()}</div>
            </main>
        </>
    );
}

export default MainPage;