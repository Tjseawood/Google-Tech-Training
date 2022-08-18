// import './style.css'

/*
1. Create a new local project that uses Vite, Prettier, and ESLint
2. Register for a free OMDb API API key
3. Create a form that lets the user search the API using the following options:
    - API Key (required, string)
    - Title or IMDB ID (one or the other required, string)
  - Year (optional, number, greater than 1928, less than or equal to the current year, for whatever the current year is)
- Short or long plot (required, one or the other)





*/

/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable operator-linebreak */
/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
// import APIKEY from './API-INFO/api-key.env'; 

// const mainURL = 'https://www.omdapi.com/';

// // Variables from the 'search for movie by name' form
// const formInfo = document.getElementById('movieForm'); 
// const movieName = document.getElementById('movieName'); 
// const resYear = document.getElementById('movieYear');
// const plotLen = document.getElementById('plotLength'); 

// // Variables from the 'Find on IMDB' form
// const formIMDB = document.getElementById('movidID-form'); 
// const IMDB_NUM = document.getElementById('IMDB_NUM'); 
// const plotInf = document.getElementById('plotInfo'); 

// const displayResults = document.getElementById('searchResults'); 

// const prodError = (element, message) => {
//   displayResults.textContent = ' '; 

//   const inputControl = element.ParentElement;
//   // eslint-disable-next-line no-param-reassign
//   element.placeholder = message; 
//   inputControl.classList.add('error'); 
//   inputControl.classList.remove('success'); 
// };

// const prodSucc = (element) => {
//   const inputControl = element.ParentElement;

//   inputControl.classList.add('success'); 
//   inputControl.classList.remove('error'); 
// }; 

// const noResultsFound = () => {
//   displayResults.textContent = '';

//   const divNo = document.createElement('div');
//   divNo.classList.add('no-response');
//   const noResponse = document.createElement('h2');
//   noResponse.textContent =
//     'Sorry, no results matched the information that you entered. Please try again.';

//   divNo.appendChild(noResponse);
//   displayResults.appendChild(divNo);
// };

// const movieResults = (movie) => {
//   displayResults.textContent = ''; 

//   const resultsInfo = document.createElement('div');
//   resultsInfo.classList.add('results-info'); 

//   const imgDiv = document.createElement('div');
//   const poster = document.createElement('img'); 
//   poster.src = movie.Poster; 
//   poster.alt = `${movie.Title} poster`; 
//   imgDiv.appendChild(poster); 

//   const titDiv = document.createElement('div');
//   const movieNme = document.createElement('h2'); 
//   movieNme.textContent = movie.Title; 
//   titDiv.appendChild(movieNme); 
//   const Years = document.createElement('h3'); 
//   Years.textContent = `Year: ${movie.Year}`; 
//   titDiv.appendChild(Years);

//   const moviePlot = document.createElement('p'); 
//   const spanPlt = document.createElement('span'); 
//   spanPlt.textcontent = 'Plot: ';
//   moviePlot.appendChild(spanPlt); 
//   titDiv.appendChild(moviePlot); 

//   resultsInfo.appendChild(imgDiv); 
//   resultsInfo.appendChild(titDiv); 

//   displayResults.appendChild(resultsInfo);  
// }; 

// // retrieve movie results
// const loadResults = async (url) => {
//   try {
//     const res = await fetch(url); 
//     const data = await res.json(); 
//     console.log(data); 

//     if (data.Response === 'false') {
//       noResultsFound(); 
//     } else {
//       movieResults(data); 
//     }
//   } catch (error) {
//     console.log(error.message); 
//   }
// }; 

// formInfo.addEventListener('submit', (e) => {
//   e.preventDefault(); 

//   const searchTerm = movieName.value.trim(); 
//   const plotVal = plotLen.value; 
//   const yearVal = resYear.value; 

//   if (searchTerm && searchTerm !== '' && yearVal && yearVal !== '') {
//     loadResults(
//       `${mainURL}?t=${searchTerm}&y=${yearVal}&plot=${plotVal}&apikey=${APIKEY}`,
//     ); 
//     movieName.value = ''; 
//     resYear.value = ''; 
//   } else if (searchTerm && searchTerm !== '') {
//     loadResults(`${mainURL}?t=${searchTerm}&apikey=${APIKEY}`);
//     prodSucc(movieName); 
//     movieName.value = ' '; 
//   } else {
//     prodError(movieName, 'Please Enter a Movie Name');
//   }
// }); 

// formIMDB.addEventListener('submit', (e) => {
//   e.preventDefault(); 

//   const searchTerm = IMDB_NUM.value.trim();
//   const plotVal = plotInf.value; 

//   if (searchTerm && searchTerm !== '') {
//     loadResults(`${mainURL}?i=${searchTerm}&plot=${plotVal}&apikey=${APIKEY}`); 
//     prodSucc(IMDB_NUM); 
//     IMDB_NUM.value = ''; 
//   } else {
//     prodError(IMDB_NUM, 'Please enter the IMDB # associated with the movie you are are searching for.'); 
//   }
// }); 
