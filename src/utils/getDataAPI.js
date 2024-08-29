
// Функция для получения данных с API
let getDataAPI = async (search) => {
    let errorNetwork = false;
    search = encodeURIComponent(search);
    console.log(search)

    if (search === 'undefind' || search === "") {
        search = undefined;
    }
    let url = `http://www.omdbapi.com/?i=tt3896198&apikey=126a658e&s=${search}`;

    await fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();

        })
        .then(data => {
            errorNetwork = false;
            console.log('Data received:', data);
            return data.Search;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
           return  errorNetwork = true;
        });
};

export default getDataAPI;