"use strict"

const SRC_LINK = 'https://raw.githubusercontent.com/Elkfox/Australian-Postcode-Data/master/au_postcodes.json';

const cities = [];


fetch(SRC_LINK)
.then(blob => blob.json())
.then(data => cities.push(...data))

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {

        const regex = new RegExp(wordToMatch, 'gi');
        return place.place_name.match(regex);
    });
}
function displayMatches() {
    
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        return `
        <li>
            <span class="name">${place.postcode}, ${place.place_name}, ${place.state_code}</span>
        </li>
            `
    })
    suggestions.innerHTML = html;
    
}
const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');
searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);