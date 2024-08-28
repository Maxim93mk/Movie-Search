import styles from './Main.module.css';
import CardMovie from '../../components/card-movie/CardMovie';

function Main(props){
    return(
        <>
            <main>
                <div className="wrapper">
                    <section className={styles.main}>
                        <CardMovie movies = {props.movies}/>
                    </section>
                </div>
            </main>
        </>
    );
}

export default Main;