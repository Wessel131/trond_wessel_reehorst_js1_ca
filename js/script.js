//  Level 1 
//  Fetching API from IMDB Documentation
//  I want to display the top 250 movies list

//  The URL with key - https://imdb-api.com/en/API/Top250Movies/k_s22ggr65
const url = "https://imdb-api.com/en/API/Top250Movies/k_s22ggr65";

//  Searching for the <div> I want to inject my HTML into
const resultsContainer = document.querySelector(".containerBox");

//  The general function for fetching the API information
async function doFetch(url) {

    //  Fetching information given from the API
    const response = await fetch(url);
    const results = await response.json(url);
    const movies = results.items;

    //  Setting the HTML in the target <div> to empty
    resultsContainer.innerHTML = "";

    //  Posting the API results and the array I want to target
    console.log(movies);

    //  Looping for the array
    for (let i = 0; i < movies.length; i++) {

        //  Creating a new class with a div for the new inner HTML
        //  The elements in the <div> needs their own <p> so that I get a multi-lined output in the HTML
        resultsContainer.innerHTML +=
            `
            <div class = "top_movies">
            <img src="${movies[i].image}">
            <p>Title: ${movies[i].fullTitle}</p>
            <p>IMDB Rank: ${movies[i].rank}</p>
            <p>IMDB Rating: ${movies[i].imDbRating}</p>
            </div>
            `;

        if (i === 7) {
            break;
        };
    };
};

//  Calling the function "doFetch" with the relevant "const url"
doFetch(url);