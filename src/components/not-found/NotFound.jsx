import React from "react";
import styles from './NotFound.module.css';

function NotFound() {
    return (
        <>
            <div className={styles.notFoundBlock}>
                <h1 className={styles.title}>404</h1>
                <p className={styles.descr}>Not Found</p>
            </div>
        </>
    )
}

export default NotFound;