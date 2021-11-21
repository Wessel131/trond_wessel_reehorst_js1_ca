//  Level 1 

//  LOTR API: Y1Ad4LrfyuHpAVfXmVT_
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
console.log(url);

//  Searching for the <div> I want to inject my HTML into
const resultsContainer = document.querySelector(".containerBox");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

//  The general function for fetching the API information
async function doFetch() {
    //  For online data import and converstion
    //  Fetching information given from the API

    const response = await fetch(url);
    const results = await response.json(url);
    const cockTails = results.drinks;

    //  Setting the HTML in the target <div> to empty to get rid of the visual loading div 
    resultsContainer.innerHTML = "";

    //  Posting the API results and the array I want to target in my console
    console.log(cockTails);

    //  Looping for the array
    for (let i = 0; i < cockTails.length; i++) {
        console.log(cockTails[i].idDrink);

        //  Creating a new class with a div for the new inner HTML
        //  The elements in the <div> needs their own <p> so that I get a multi-lined output in the HTML

        resultsContainer.innerHTML +=
            `<div class = "top_movies">
            <p>Name: ${cockTails[i].strDrink}</p>
            <p>Category: ${cockTails[i].strCategory}</p>
            <p>Galss type: ${cockTails[i].strGlass}</p>            
            <a class="details" href="details.html?id=${cockTails[i].idDrink}">More information</a>
            </div>
            `;

        if (i === 9) {
            break;
        };
    };
};

//  Calling the function "doFetch" with the relevant "const url"
doFetch();