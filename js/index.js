//DOM
const searchFormEl = document.querySelector('#search-form');
const searchInputEl = document.querySelector('#search-input');
const searchOptionEl = document.querySelector('#search-option');
const searchResultEl = document.querySelector('#search-result')

const apiBaseURL = 'https://swapi.co/api';
let serachOption = 'people';

//change option function
searchOptionEl.addEventListener('change', function(e) {
    serachOption = this.value;
    console.log(serachOption);
});

searchFormEl.addEventListener('submit',function(e) {
    
    e.preventDefault();
    
     const searchValue = searchInputEl.value;
     console.log(searchValue)
    
    // prototype to ask to API
    // https://swapi.co/api/people/?search=r2
    const apiURL = `${apiBaseURL}/${serachOption}/?search=${searchValue}`;

    axios(apiURL)
    .then(resp => resp.data)
    .then(data => {
        console.log(data.results);
        showResult(serachOption, data.results);
    })
    .catch(err => console.log(err));
    
})

const generateHTML = (text) => {
    return `<li class="list-group-item">${text}</li>`;
}

const showResult = (serachOption, result) => {
    let html;

    if(serachOption === 'people'){
    html = result.map(resu => generateHTML(`<b>Imię i nazwisko:</b> ${resu.name}, <b>Płeć:</b> ${resu.gender} , <b>Wzrost:</b> ${resu.height}cm`))
    }else if(serachOption === 'planets'){
        html = result.map(resu => generateHTML(`<b>Nazwa:</b> ${resu.name}, <b>Teren:</b> ${resu.terrain} , <b>Populacja:</b> ${resu.population}mieszkańców`))
    }else if(serachOption === 'films'){
        html = result.map(resu => generateHTML(`<b>Tytuł:</b> '${resu.title}', <b>Reżyser:</b> ${resu.director} , <b>Data wydania:</b> ${resu.release_date}r.`))
    }

    searchResultEl.innerHTML = html.join('');
}