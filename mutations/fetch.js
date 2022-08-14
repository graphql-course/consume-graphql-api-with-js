require('isomorphic-fetch');
const apiUrl = require('./../constants').apiUrl;
const mutations = require('./../constants').mutations;

// JavaScript with fetch
fetch(apiUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: mutations.addComment }),
})
  .then(res => res.json())
  .then(res => console.log(res.data));

fetch(apiUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ query: mutations.addPost }),
})
  .then(res => res.json())
  .then(res => console.log(res.data));
