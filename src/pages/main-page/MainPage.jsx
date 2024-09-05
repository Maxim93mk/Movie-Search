import React, { useEffect, useState } from 'react';
import useGetMovies from '../../utils/getDataAPI';
import CardList from '../../components/card-list/CardList';
import MoviePage from '../movie-page/MoviePage';
import Header from '../../components/header/Header';
import MovieDescr from '../../components/movie-descr/MovieDescr';

function MainPage() {
    const { movies, error, fetchData } = useGetMovies();
    const [getFlagComponent, setFlagComponent] = useState(false);
    console.log(getFlagComponent);

    // if(getFlagComponent){
    //     setComponent(<CardList movies={movies} error={error} />);
    // }
    // else{

    // }
    const component = !getFlagComponent ? <CardList movies={movies} error={error} setFlagComponent={setFlagComponent} /> : <MovieDescr />;

    return (
        <>
            <Header fetchData={fetchData}
                setFlagComponent={setFlagComponent} />
            <main>
                <div className="wrapper">
                    {component}

                    {/* <MoviePage /> */}
                </div>
            </main>
        </>
    );
}

export default MainPage;