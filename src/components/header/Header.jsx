import React, { useState } from "react";
import styles from './Header.module.css';

function Header(props) {
    const [stringSearch, setStringSearch] = useState(''); // Значение поисковой строки
    const param = '?s=';
    let query = '';
    // Проверка нажатия клавиши Enter
    const handleEnter = (evt) => {
        if (evt.key === 'Enter') {
            props.fetchData(query);
        }
    }
    if(stringSearch===''){
        query = stringSearch;
    }
    else{
        query = param + stringSearch
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
                                onClick={() => props.fetchData(query)}
                            ></button>
                        </div>
                    </section>
                </div>
            </header>
        </>
    );
}

export default Header;