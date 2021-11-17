//  Querystring search. I need the ID of the movie selected from the index.html
const detailContainer = document.querySelector(".details");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

//  Checking for the correct ouput
console.log(id);

// Online API data pool
// const url = "https://imdb-api.com/en/API/Top250Movies/k_s22ggr65/" + id;
// console.log(url);

//  local API data pool
import {
    data
} from '../data/data.js';
const url = data.items;
console.log(url);

async function fetchMovie() {
    detailContainer.innerHTML = "";
    try {
        //  Online response 
        // const response = await fetch(url);
        // const results = await response.json();
        // const MovieDetails = results.items;



        // Local response
        const MovieDetails = url + id;
        // console.log(details);
        console.log(MovieDetails);

        createHtml(MovieDetails);

    } catch (error) {
        console.log(error);
        detailContainer.innerHTML = message("error", error);
    }

};

fetchMovie();

function createHtml(MovieDetails) {
    detailContainer.innerHTML += `
    <div class = "details">
    <img src="${MovieDetails.image}">
    <p>${MovieDetails.fullTitle}</p>
    <p>${MovieDetails.crew}</p>
    <p>${MovieDetails.year}</p>
    <p>IMDB Rank: ${MovieDetails.rank}</p>
    <p>IMDB Rating: ${MovieDetails.imDbRating}</p>
    </div>
    `;
};