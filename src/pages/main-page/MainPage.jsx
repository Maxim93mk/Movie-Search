import styles from './MainPage.module.css';
import React, { useState, useEffect } from 'react';
import useGetMovies from '../../utils/getDataAPI';
import CardList from '../../components/card-list/CardList';

function MainPage() {
    const [stringSearch, setStringSearch] = useState(''); // Значение поисковой строки
    const {movies, error, fetchData} = useGetMovies(); 

    // Загрузка страницы
    useEffect(() => {
       fetchData();
    }, []);

    // Проверка нажатия клавиши Enter
    const  handleEnter =  (evt) => {
        if (evt.key === 'Enter') {
         fetchData(stringSearch);
        }
    }
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
                                onClick={() => fetchData(stringSearch)}
                            ></button>
                        </div>
                    </section>
                </div>
            </header>
            <main>
                <div className="wrapper">
                    <section className={styles.main}>
                        <CardList movies = {movies} error={error}/>
                    </section>
                </div>
            </main>
        </>
    );
}

export default MainPage;