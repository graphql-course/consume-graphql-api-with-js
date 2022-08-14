require('isomorphic-fetch');
const apiUrl = require('./../constants').apiUrl;
const queries = require('./../constants').queries;

// JavaScript with fetch
fetch(apiUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: queries.postsList }),
})
  .then(res => res.json())
  .then(res => console.log(res.data));


fetch(apiUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: queries.postOne }),
})
  .then(res => res.json())
  .then(res => console.log(res.data));

fetch(apiUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: queries.authorInfo }),
})
  .then(res => res.json())
  .then(res => console.log(res.data));