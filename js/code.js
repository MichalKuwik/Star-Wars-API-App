//DOM
const searchFormEl = document.querySelector('#search-form');
const searchInputEl = document.querySelector('#search-input');
const searchOptionEl = document.querySelector('#search-option');
const searchResultEl = document.querySelector('#search-result')

const apiBaseURL = 'https://swapi.co/api';
let serachOption = 'films';

//change option function
searchOptionEl.addEventListener('change', function() {
    searchOption = this.value;
    console.log(searchOption);
});