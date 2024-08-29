import styles from './MainPage.module.css';
import React, { useState, useEffect } from 'react';
import Main from '../../components/main/Main'
import getDataAPI from '../../utils/getDataAPI';

function MainPage() {
    let [movies, setMovies] = useState([]); // Получаемые фильмы
    let [stringSearch, setStringSearch] = useState(''); // Вводимая строка в поиске
    let [errorNetwork, setErrorNetwork] = useState(false); // Состояние сетевых ошибок
    // Загрузка страницы
    useEffect(() => {
        getDataAPI();
    }, []);

    // Проверка нажатия клавиши Enter
    let handleEnter = (evt) => {
        if (evt.key === 'Enter') {
            let mov = getDataAPI(stringSearch);

            console.log(mov)
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
                                onClick={() => getDataAPI(stringSearch)}
                            ></button>
                        </div>
                    </section>
                </div>
            </header>
            <Main movies={movies}
                error={errorNetwork} />
        </>
    );
}

export default MainPage;