var url5 = "https://the-one-api.dev/v2/book/";

var xhr = new XMLHttpRequest();
xhr.open("GET", url5);

xhr.setRequestHeader("Accept", "application/json");
xhr.setRequestHeader("Authorization", "Bearer {Y1Ad4LrfyuHpAVfXmVT_}");

xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
    }
};


//  Querystring search. I need the ID of the movie selected from the index.html
const detailContainer = document.querySelector(".details");

// const queryString = document.location.search;

// const params = new URLSearchParams(queryString);

// const id = params.get("id");

//  Checking for the correct ouput
// console.log(id);

// Online API data pool
const url = "https://the-one-api.dev/v2/book/5cf5805fb53e011a64671582";

// console.log(url);

// async function fetchMovie() {

//     detailContainer.innerHTML = "";

//     try {
//         //   Online response 
//         const response = await fetch(url);
//         const results = await response.json();
//         const book = results;

//         createHtml(book);

//         console.log(book);

//     } catch (error) {
//         console.log(error);
//         detailContainer.innerHTML = message("error", error);
//     }

// };

// fetchMovie();

async function fetchMovie() {

    detailContainer.innerHTML = "";

    try {
        const response = await fetch(url);
        const json = await response.json();
        const details = json;

        console.log(details);

        createHtml(details);

    } catch (error) {
        console.log(error);
    }
};

fetchMovie();

function createHtml(details) {
    detailContainer.innerHTML +=
        `<div class = "top_movies">
        <p>Title: ${details.name}</p>
        <p>ID: ${details._id}</p>
        </div>
        `;
};