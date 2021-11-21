const detailContainer = document.querySelector(".details");

const queryString = document.location.search;

const params1 = new URLSearchParams(queryString);

const id = params1.get("id");

console.log(id);


import {
    data
} from "../data/search.php.js";

console.log(data);



const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
console.log("Shows all results", url);
const lookUp = url;
console.log("Doesn't work", lookUp);

async function fetchTails() {
    detailContainer.innerHTML = "";

    try {
        const response = await fetch(url);

        console.log(response);

        createDetails(response);

    } catch (error) {
        console.log(error);
        // detailContainer.innerHTML = Message("error", error);
    }
};

fetchTails();

function createDetails() {

    // detailContainer.innerHTML = "";
    detailContainer.innerHTML +=
        ` <h1>${url}</h1>
        <p>${url}</p>
        `
};