import styles from './Header.module.css';
import React, { useState, useEffect } from 'react';
import Main from '../main/Main';

function Header() {
  let [movies, setMovies] = useState([]);
    let getDataAPI = async (search) => {
        search = encodeURIComponent(search);
        console.log(search)
        if(search==='undefind'|| search ===""){
            search = undefined;
        }
        let url = `http://www.omdbapi.com/?i=tt3896198&apikey=126a658e&s=${search}`;

        await fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                setMovies(data.Search);
            })
            .catch(error => {
                console.log(error)
                console.error('There was a problem with the fetch operation:', error);
            });
    };

    useEffect(() => {
        getDataAPI();
    }, []);
   
    return (

        <>

            <header>
                <div className="wrapper">
                    <section className={styles.header}>
                        <h1 className={styles.title}>Movie Search</h1>
                        <div className={styles.searchBlock}>
                            <input type="text"
                                className={styles.searchInput}
                                placeholder='Введите название фильма...'
                                onBlur={(evt) => getDataAPI(evt.target.value)} />
                            <button className={styles.searchBtn}></button>
                        </div>
                    </section>
                </div>
            </header>
            <Main movies={movies}/>
        </>
    );
}

export default Header;