class DataSource {
    static searchFilm(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/movie?api_key=6e92f16997ac9f635732d2431a167427&query=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson =>{
             if(responseJson.results.length !==0) {
               return Promise.resolve(responseJson.results);
           } else {
               return Promise.reject(`${keyword} is not found`);
           }
        });
    }

    static getMovie(){
        return fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&/discover/movie?sort_by=popularity.desc&api_key=6e92f16997ac9f635732d2431a167427")
        .then(response =>{
            return response.json();
        })
        .then(responseJson =>{
             if(responseJson.results.length !==0) {
               return Promise.resolve(responseJson.results);
           } else {
               return Promise.reject("Movie is not found");
           }
        });
    }
}

export default DataSource;