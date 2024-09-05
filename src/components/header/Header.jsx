import React, { useState, useEffect } from "react";
import styles from './Header.module.css';

function Header(props) {
    const [stringSearch, setStringSearch] = useState(''); // Значение поисковой строки
    const param = '?s=';

    // Загрузка страницы
    useEffect(() => {
        props.fetchData();
    }, []);


    // Формирование строки для запроса
    const setSearchQuery = (str) => {
        if (str !== '') {
            setStringSearch(param + str)
        }
        else {
            setStringSearch(str);
        }
    }

    // Отправка на запрос фильма из поисковой строки
    const sendSearchQuery = () => {
        props.fetchData(stringSearch);
        props.setFlagComponent(false);
    }

    return (
        <>
            <header>
                <div className="wrapper">
                    <section className={styles.header}>
                        <h1 className={styles.title}
                            onClick={() => sendSearchQuery()}>Movie Search</h1>
                        <div className={styles.searchBlock}>
                            <input type="text"
                                className={styles.searchInput}
                                placeholder='Введите название фильма...'
                                onChange={(evt) => setSearchQuery(evt.target.value)}
                                onKeyUp={(evt) => evt.key === 'Enter' ? sendSearchQuery() : ''}
                            />
                            <button className={styles.searchBtn}
                                onClick={() => sendSearchQuery()}
                            ></button>
                        </div>
                    </section>
                </div>
            </header>
        </>
    );
}

export default Header;