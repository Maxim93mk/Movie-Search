import React, { useEffect } from 'react';
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

    return (
        <>
            <Header fetchData={fetchData} />
            <main>
                <div className="wrapper">
                   
                        <CardList movies={movies} error={error} />
                        {/* <MoviePage /> */}
                </div>
            </main>
        </>
    );
}

export default MainPage;