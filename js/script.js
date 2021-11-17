//  Level 1 


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

xhr.send();


//  LOTR API: Y1Ad4LrfyuHpAVfXmVT_
const url = "https://the-one-api.dev/v2/book/";
console.log(url);

//  Searching for the <div> I want to inject my HTML into
const resultsContainer = document.querySelector(".containerBox");

//  The general function for fetching the API information
async function doFetch() {
    //  For online data import and converstion
    //  Fetching information given from the API

    const response = await fetch(url);
    const results = await response.json(url);
    const book = results.docs;

    //  Setting the HTML in the target <div> to empty to get rid of the visual loading div 
    resultsContainer.innerHTML = "";

    //  Posting the API results and the array I want to target in my console
    console.log(book);

    //  Looping for the array
    for (let i = 0; i < book.length; i++) {
        console.log(book[i]._id);

        //  Creating a new class with a div for the new inner HTML
        //  The elements in the <div> needs their own <p> so that I get a multi-lined output in the HTML

        resultsContainer.innerHTML +=
            `
            <div class = "top_movies">
            <p>Title: ${book[i].name}</p>
            <p>ID: ${book[i]._id}</p>
            <a class="details" href="details.html?id=${book[i]._id}">More information</a>
            </div>
            `;

        if (i === 7) {
            break;
        };
    };
};

//  Calling the function "doFetch" with the relevant "const url"
doFetch();