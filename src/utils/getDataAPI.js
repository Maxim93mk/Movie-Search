import React from "react";
import { useState } from "react";


// Функция для получения данных с API
const useGetMovies = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const apiUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=126a658e`;

    const fetchData = async (query = 'The Man in Black') => {
        setIsLoading(true);
        await fetch(apiUrl + (query ? `&s=${query}` : 'The Man in Black'))
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setError(null);
                setMovies(data.Search || []);
            })
            .catch(error => {
                setError(error);
                console.error('There was a problem with the fetch operation:', error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return {isLoading, movies, error, fetchData}
}

export default useGetMovies;