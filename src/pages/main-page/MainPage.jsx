import React, { useState, useEffect } from 'react';
import Header from '../../components/header/Header.jsx';

function MainPage() {
    // let [movies, setMovies] = useState("");
    // console.log(movies);
    // let data = async (search) => {
    //     search = encodeURIComponent(search);
    //     let url = `http://www.omdbapi.com/?i=tt3896198&apikey=126a658e&s=${search}`;

    //     await fetch(url)
    //         .then(response => {
    //             if (!response.ok) {
    //                 throw new Error('Network response was not ok');
    //             }
    //             return response.json();
    //         })
    //         .then(data => {
    //             console.log('Data received:', data);
    //             setMovies(data.Search);
    //         })
    //         .catch(error => {
    //             console.error('There was a problem with the fetch operation:', error);
    //         });
    // };

    // useEffect(() => {
    //     data();
    // }, []);

    // let list = movies.map((elem) => {
    //     return (
    //         <>
    //             <CardMovie
    //                 title={elem.Title}
    //                 year={elem.Year}
    //                 poster={elem.Poster}
    //             />
    //         </>

    //     )
    // });
    return (
        <>
            <Header />
           {/* <section>{list}</section> */}
        </>
    );
}

export default MainPage;