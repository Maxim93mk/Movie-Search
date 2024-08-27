import './MainPage.css';
import React from 'react';


function MainPage() {
    let title = '';
    let db = []
    let data = (search) => {
        search = encodeURIComponent(search);
        console.log(typeof (search))
        let url = `http://www.omdbapi.com/?i=tt3896198&apikey=126a658e&s=${search}`;
        fetch(url)
            .then(response => {
                console.log(response)
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Data received:', data);
                db = data.Search;
                //  return data;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
            return db
    }
    console.log(db)
    return (
        <>
            {/* {data("year")} */}
            <input type="text"
                placeholder='Введите название фильма...'
                onBlur={(evt) => data(evt.target.value)} />
            <p>{title}</p>
        </>
    );
}

export default MainPage;