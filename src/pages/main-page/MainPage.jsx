import React, { useState } from 'react';
import useGetMovies from '../../utils/getDataAPI';
import CardList from '../../components/card-list/CardList';
import Header from '../../components/header/Header';
import MovieDescr from '../../components/movie-descr/MovieDescr';
import styles from './MainPage.module.css';
import NotFound from '../../components/not-found/NotFound';

function MainPage() {
    const { movies, error, fetchData } = useGetMovies();
    const [getFlagComponent, setFlagComponent] = useState(false);
    const [getIdMovie, setIdMovie] = useState('')

    const getComponent = () => {
        if (error) {
            return (
                <>
                    <section className={styles.main}>
                        <NotFound TitleMsg={'404'}
                            DescrMsg={'Not Found'} />
                    </section>
                </>
            );
        }

        if (!getFlagComponent) {
            if (movies.length === 0 || movies.Response === 'False') {
                return (
                    <>
                        <section className={styles.main}>
                            <NotFound TitleMsg={'Oops...'}
                                DescrMsg={'There Are No Search Results...'} />
                        </section>
                    </>
                );
            }
            else {
                return <CardList movies={movies}
                    setFlagComponent={setFlagComponent}
                    setIdMovie={setIdMovie} />;
            }

        }
        else {
            return (
                <>
                    <section className={styles.main}>
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