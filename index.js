/*****************************************************************************
 * Challenge 2: Review the provided code. The provided code includes:
 * -> Statements that import data from games.js
 * -> A function that deletes all child elements from a parent element in the DOM
*/

// import the JSON data about the crowd funded games from the games.js file
import GAMES_DATA from './games.js';

// create a list of objects to store the data about the games using JSON.parse
const GAMES_JSON = JSON.parse(GAMES_DATA)

// remove all child elements from a parent element in the DOM
function deleteChildElements(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

/*****************************************************************************
 * Challenge 3: Add data about each game as a card to the games-container
 * Skills used: DOM manipulation, for loops, template literals, functions
*/

// grab the element with the id games-container
const gamesContainer = document.getElementById("games-container");

// create a function that adds all data from the games array to the page
function addGamesToPage(games) {

    // loop over each item in the data
    for (let game of games){

    


        // create a new div element, which will become the game card
        let div = document.createElement("div");


        // add the class game-card to the list
        div.classList.add("game-card")


        // set the inner HTML using a template literal to display some info 
        // about each game
        // TIP: if your images are not displaying, make sure there is space
        // between the end of the src attribute and the end of the tag ("/>")
        div.innerHTML = `
            <img src= "${game.img}" class = "game-img">
            <h1> ${game.name}</h1>
            <p1> ${game.description}
            <br> <br>
            Pledged: ${game.pledged}</p1>
            
        `


        // append the game to the games-container
        gamesContainer.appendChild(div);
    }

}

// call the function we just defined using the correct variable
// later, we'll call this function using a different list of games
addGamesToPage(GAMES_JSON);


/*************************************************************************************
 * Challenge 4: Create the summary statistics at the top of the page displaying the
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: arrow functions, reduce, template literals
*/

// grab the contributions card element
const contributionsCard = document.getElementById("num-contributions");

// use reduce() to count the number of total contributions by summing the backers
const total_contributions = GAMES_JSON.reduce((total,game)=>{
    return total + game.backers;
}, 0);


// set the inner HTML using a template literal and toLocaleString to get a number with commas
contributionsCard.innerHTML = `
<p1> ${total_contributions.toLocaleString('en-US')} </p1>`;



// grab the amount raised card, then use reduce() to find the total amount raised
const raisedCard = document.getElementById("total-raised");

const total_raised = GAMES_JSON.reduce((total,game) => {
    return total + game.pledged;
},0);

// set inner HTML using template literal
raisedCard.innerHTML = `
<p1>$${total_raised.toLocaleString('en-US')} </p1>`;


// grab number of games card and set its inner HTML
const gamesCard = document.getElementById("num-games");
const total_games = GAMES_JSON.reduce((total) => {
    return total + 1;
},0);
gamesCard.innerHTML = `
<p1>${total_games}</p1>`;


/*************************************************************************************
 * Challenge 5: Add functions to filter the funded and unfunded games
 * total number of contributions, amount donated, and number of games on the site.
 * Skills used: functions, filter
*/

// show only games that do not yet have enough funding
function filterUnfundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have not yet met their goal
    let list_of_underfunded = GAMES_JSON.filter((game) =>{
        return game.pledged < game.goal;
    },0);


    // use the function we previously created to add the unfunded games to the DOM
    addGamesToPage(list_of_underfunded);

}

// show only games that are fully funded
function filterFundedOnly() {
    deleteChildElements(gamesContainer);

    // use filter() to get a list of games that have met or exceeded their goal
    let list_of_funded = GAMES_JSON.filter((game)=>{
        return game.pledged >= game.goal;
    },0);


    // use the function we previously created to add funded games to the DOM
    addGamesToPage(list_of_funded);

}

// show all games
function showAllGames() {
    deleteChildElements(gamesContainer);

    // add all games from the JSON data to the DOM
    addGamesToPage(GAMES_JSON);

}

function unfunded_stats_mode(){
    filterUnfundedOnly();
    let num_unfunded = GAMES_JSON.reduce((total,game)=>{
        if (game.pledged < game.goal){
            return total + 1;
        }
        return total;
    },0);

    let list_of_underfunded = GAMES_JSON.filter((game) =>{
        return game.pledged < game.goal;
    },0);

    let unfunded_cont = list_of_underfunded.reduce((total,game)=>{
        return total + game.backers;
    },0);

    gamesCard.innerHTML = `<p1> ${num_unfunded} <p1>`
    contributionsCard.innerHTML = `<p1> ${unfunded_cont} <p1>`
}

function funded_stats_mode(){

}

// select each button in the "Our Games" section
const unfundedBtn = document.getElementById("unfunded-btn");
const fundedBtn = document.getElementById("funded-btn");
const allBtn = document.getElementById("all-btn");

// add event listeners with the correct functions to each button
unfundedBtn.addEventListener('click',unfunded_stats_mode);
fundedBtn.addEventListener("click",filterFundedOnly);
allBtn.addEventListener("click",showAllGames);


/*************************************************************************************
 * Challenge 6: Add more information at the top of the page about the company.
 * Skills used: template literals, ternary operator
*/

// grab the description container
const descriptionContainer = document.getElementById("description-container");

// use filter or reduce to count the number of unfunded games
let num_unfunded = GAMES_JSON.reduce((total,game)=>{
    if (game.pledged < game.goal){
        return total + 1;
    }
    return total;
},0);

// create a string that explains the number of unfunded games using the ternary operator
const displaystring = 
    `A total of $${total_raised.toLocaleString('en-US')} has been raised for ${total_games} games. Currently,
    ${num_unfunded} ${num_unfunded > 1 || num_unfunded == 0 ? "games remain" : "game remains"} 
     unfunded. We need your help to fund these amazing games!`



// create a new DOM element containing the template string and append it to the description container
let unfunded_desciption = document.createElement("p");
unfunded_desciption.textContent = displaystring;
descriptionContainer.appendChild(unfunded_desciption);


/************************************************************************************
 * Challenge 7: Select & display the top 2 games
 * Skills used: spread operator, destructuring, template literals, sort 
 */

const firstGameContainer = document.getElementById("first-game");
const secondGameContainer = document.getElementById("second-game");

const sortedGames =  GAMES_JSON.sort( (item1, item2) => {
    return item2.pledged - item1.pledged;
});

// use destructuring and the spread operator to grab the first and second games
const [first_game,second_game,...other] = sortedGames;

// create a new element to hold the name of the top pledge game, then append it to the correct element
let top_pledge_game = document.createElement("p");
top_pledge_game.innerHTML = `<p1> ${first_game.name} </p1>`;

firstGameContainer.appendChild(top_pledge_game);

// do the same for the runner up item
let second_pledge_game = document.createElement("p");
second_pledge_game.innerHTML = `<p1> ${second_game.name} </p1>`;
secondGameContainer.appendChild(second_pledge_game);
