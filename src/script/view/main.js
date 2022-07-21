import DataSource from "../data/data-source.js";
import "../component/search-bar.js";


const main = () => {
    const searchElement = document.querySelector("search-bar");
    const cardContent = document.getElementById("cardContent");
    const IMG_URL = "https://image.tmdb.org/t/p/w500";

    
    const getMovie = async () => {
        try{
            const results = await DataSource.getMovie();
            renderResult(results);
            console.log(results);
        }catch(message){
            fallbackResult(message);
        }
    };

    const onButtonSearchClicked = async () => {
        try{
            const results = await DataSource.searchFilm(searchElement.value);
            renderResult(results);
            console.log(results);
        } catch (message) {
            fallbackResult(message);
        }
    };

    const renderResult =  result => {
        cardContent.innerHTML = "";

        result.forEach(movie =>{
            const {title, poster_path, vote_average, release_date} = movie;
            let releaseDate = release_date;
            releaseDate = releaseDate.split("-");
            const card = document.createElement("div");
            card.classList.add("card");
            card.innerHTML = `
                    <img class="film-image" id="filmImage" src="${poster_path? IMG_URL+poster_path: "http://via.placeholder.com/200x400" }" alt="${title}">
                    <h3 class="film-name" id="filmName">${title}</h3>
                    <div class="year-star" id="yearStar">
                        <p class="film-year" id="filmYear">${releaseDate[0]}</p>
                        <div class="film-star" id="filmStar">
                            <i class="ri-star-fill"></i>
                            <p>${vote_average}</p>
                        </div>
                    </div>
        `;
            cardContent.appendChild(card);
        });
    };

    const fallbackResult = message => {
        cardContent.innerHTML = `
            <h2>${message}</h2>
        `;

        
    };

    getMovie();
    searchElement.clickEvent = onButtonSearchClicked;

};

export default main;