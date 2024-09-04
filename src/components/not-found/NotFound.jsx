import React from "react";
import styles from './NotFound.module.css';

function NotFound(props) {
    return (
        <>
            <div className={styles.notFoundBlock}>
                <h1 className={styles.title}>{props.TitleMsg}</h1>
                <p className={styles.descr}>{props.DescrMsg}</p>
            </div>
        </>
    )
}

export default NotFound;