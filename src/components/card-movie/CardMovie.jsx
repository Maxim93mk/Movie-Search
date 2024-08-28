import React from "react";
import './CardMovie.css';

function CardMovie (props){
    return (
        <>
        <div className="card">
            <img src={props.poster} alt={props.title} />
            <p>{props.title}</p>
            <p>{props.year}</p>
        </div>
        </>
    )
}

export default CardMovie;
