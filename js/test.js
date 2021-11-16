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

const apiUrl = 'https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=6f126368ed1440048387bf06fc0bfd75';

// Fetching the API database
async function getDataFromAPI(resource) {
    try {
        const response = await fetch(`${apiUrl}${resource}`);
        return await response.json();
    } catch (error) {
        showHelpfulErrorToUser("There was a problem loading data from the server.");
        console.warn(error);
        return [];
    };
};

//  Creates the API data card, ready for inserting to the HTML
function createGameCard(game) {
    const card = document.createElement('div');
    card.classList.add('game');
    card.innerHTML = `
      <h2>${game.name}</h2>
      <i>${game.rating}</i>
      <b>${game.tags.length}</b>
    `;
    return card;
}

async function setupGamePage() {
    const games = await getDataFromAPI("games");
    // Get all games from the API in an array

    const gameCardList = games.map(createGameCard);
    // Create a new array of HTML elements by running each game through the `createGameCard` function

    document.querySelector('#games').append(...gameList);
    // Append the list of game cards to the `#games` element

    return "The page is ready!"
}

setupGamePage().then((message) => console.log)