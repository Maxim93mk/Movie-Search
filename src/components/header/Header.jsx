import React, { useState, useEffect } from "react";
import styles from './Header.module.css';
import { useNavigate } from "react-router-dom";

function Header(props) {
    const [stringSearch, setStringSearch] = useState(''); // Значение поисковой строки
    
    const param = '?s=';
    let query = '';
    // const navigate = useNavigate();

    // Загрузка страницы
    useEffect(() => {
        props.fetchData();
    }, []);

    // Проверка нажатия клавиши Enter
    const handleEnter = (evt) => {
        if (evt.key === 'Enter') {
            console.log("lklkdk")
            props.fetchData(query);
            props.setFlagComponent(false);
            // redirectMainPage();
        }
    }

    // const redirectMainPage = () => {
    //     return navigate('/');
    // }

    if(stringSearch===''){
        query = stringSearch;
    }
    else{
        query = param + stringSearch;
    }
    console.log(query,stringSearch)
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