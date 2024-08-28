import React from "react";
import './CardMovie.css';

function CardMovie(props) {
    console.log(props)
    let list = props.movies.map((elem) => {
        return <div className="card">
            <img src={elem.Poster} alt={elem.Title} />
            <p>{elem.Title}</p>
            <p>{elem.Year}</p>
        </div>
    });

    return (
        <>
            {list}
        </>
    )
}

export default CardMovie;
