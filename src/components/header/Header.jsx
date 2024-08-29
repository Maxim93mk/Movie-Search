import styles from './Header.module.css';
import React, { useState, useEffect } from 'react';
import Main from '../main/Main';

function Header() {
    let [movies, setMovies] = useState([]);
    let [stringSearch, setStringSearch] = useState('');
    let [error, setError] = useState(false);

    let getDataAPI = async (search) => {
        search = encodeURIComponent(search);
        console.log(search)
        if (search === 'undefind' || search === "") {
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
                setError(false);
                console.log('Data received:', data);
                setMovies(data.Search);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                setError(true);
            });
    };

    useEffect(() => {
        getDataAPI();
    }, []);

    let handleEnter = (evt) => {
        if (evt.key === 'Enter') {
            getDataAPI(stringSearch);
        }
    }
    console.log(error)
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
                                onChange={(evt) => setStringSearch(evt.target.value)}
                                onKeyUp={(evt) => (handleEnter(evt))}

                            />
                            <button className={styles.searchBtn}
                                onClick={() => getDataAPI(stringSearch)}
                                onKeyUp={(evt) => (handleEnter(evt.key))}
                            ></button>
                        </div>
                    </section>
                </div>
            </header>
            <Main movies={movies}
                error={error} />
        </>
    );
}

export default Header;