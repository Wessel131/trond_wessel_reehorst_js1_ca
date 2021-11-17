//  Level 1 
//  Fetching API from IMDB Documentation
//  I want to display the top 250 movies list
// Note that I wanted to create a general function for the API, but I couldn't.

// Importing local API file, saved from the IMDB API pool.
// import {
//     data
// } from '../data/data.js';
// const url = data;
// console.log(data);

//  The URL with API-key - https://imdb-api.com/en/API/Top250Movies/k_s22ggr65
const url = "https://imdb-api.com/en/API/Top250Movies/k_s22ggr65";

//  Searching for the <div> I want to inject my HTML into
const resultsContainer = document.querySelector(".containerBox");
const details = document.querySelector(".details");

//  The general function for fetching the API information
async function doFetch() {
    //  For online data import and converstion
    //  Fetching information given from the API

    const response = await fetch(url);
    const results = await response.json(url);
    const movies = results.items;

    // For local data import
    // const movies = url.items;

    //  Setting the HTML in the target <div> to empty to get rid of the visual loading div 
    resultsContainer.innerHTML = "";

    //  Posting the API results and the array I want to target in my console
    console.log(movies);

    //  Looping for the array
    for (let i = 0; i < movies.length; i++) {
        console.log(movies[i].id);

        //  Creating a new class with a div for the new inner HTML
        //  The elements in the <div> needs their own <p> so that I get a multi-lined output in the HTML
        resultsContainer.innerHTML +=
            `
            <div class = "top_movies">
            <img src="${movies[i].image}">
            <p>Title: ${movies[i].title}</p>
            <p>IMDB Rank: ${movies[i].rank}</p>
            <p>IMDB Rating: ${movies[i].imDbRating}</p>
            <a class="details" href="details.html?id=${movies[i].id}">More information</a>
            </div>
            `;

        if (i === 7) {
            break;
        };
    };
};

//  Calling the function "doFetch" with the relevant "const url"
doFetch();