//DOM
const searchFormEl = document.querySelector('#search-form');
const searchInputEl = document.querySelector('#search-input');
const searchOptionEl = document.querySelector('#search-option');
const searchResultEl = document.querySelector('#search-result')

const apiBaseURL = 'https://swapi.co/api';
let serachOption = 'films';

//change option function
searchOptionEl.addEventListener('change', function(e) {
    searchOption = this.value;
    // console.log(searchOption);
});

searchFormEl.addEventListener('submit',function(e) {
    e.preventDefault();
    
     const searchValue = searchInputEl.value;
    
    // prototype to ask to API
    // https://swapi.co/api/people/?search=r2
    const apiURL = `${apiBaseURL}/${searchOption}/?search=${searchValue}`;
})