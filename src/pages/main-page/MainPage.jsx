import styles from './MainPage.module.css';
import React, { useState, useEffect } from 'react';
import useGetMovies from '../../utils/getDataAPI';
import CardList from '../../components/card-list/CardList';
import MoviePage from '../movie-page/MoviePage';
import Header from '../../components/header/Header';

function MainPage() {
    const { movies, error, fetchData } = useGetMovies();
    // Загрузка страницы
    useEffect(() => {
        fetchData();
    }, []);

  
console.log(movies)
    return (
        <>
            <Header fetchData={fetchData} />
            <main>
                <div className="wrapper">
                    <section className={styles.main}>
                        <CardList movies={movies} error={error} />
                        <MoviePage />
                    </section>
                </div>
            </main>
        </>
    );
}

export default MainPage;