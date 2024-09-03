import React from "react";
import CardMovie from '..//card-movie/CardMovie';
import NotFound from "../not-found/NotFound";

function CardList(props) {

    if (props.error) {
        return <NotFound />
    }
    else {
        let cardMovies = props.movies.map((elem) => {
            return <CardMovie key={elem.imdbID}
                Id = {elem.imdbID}
                Title={elem.Title}
                Poster={elem.Poster}
                Year={elem.Year} />
        });
        return (
            <>
                {cardMovies}
            </>
        )
    }
}

export default CardList;
