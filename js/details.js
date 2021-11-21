//  Querystring search. I need the ID of the movie selected from the index.html

// const title = document.querySelector(".title");
// const query = document.location.search;
// const titleParams = new URLSearchParams(query);
// const tit = params.get("strDrink")

const detailContainer = document.querySelector(".details");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// Checking for the correct ouput
console.log(id);

// "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="

var urlId = "www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id;

// console.log(lookUp);

async function fetch() {

    detailContainer.innerHTML = "";

    try {
        const response = await fetch(urlId);
        const json = await response.json();
        const lookUp = json;

        console.log(lookUp);

        createDetails(lookUp);

    } catch (error) {
        console.log(error);
    }
};

fetch();

lookUp.forEach(function createDetails() {
    detailContainer.innerHTML +=
        `<div class = "top_movies">
        <p>Name: ${lookUp.strDrink}</p>
        <p>Category: ${lookUp.strCategory}</p>
        <p>Galss type: ${lookUp.strGlass}</p>
        <p>${lookUp.strInstructions}</p>
        <p></p>
        </div>
        `;
});