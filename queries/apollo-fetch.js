const { createApolloFetch } = require('apollo-fetch');
const apiUrl = require('./../constants').apiUrl;
const queries = require('./../constants').queries;

const fetch = createApolloFetch({
  uri: apiUrl,
});

fetch({
  query: queries.postsList,
}).then(res => {
  console.log(res.data);
});

// You can also easily pass variables for dynamic arguments
fetch({
  query:  queries.getPostDinamically,
  variables: { id: 1 },
}).then(res => {
    console.log('Post ID 1 - Data')
  console.log(res.data);
});

fetch({
  query:  queries.getPostDinamically,
  variables: { id: 2 },
}).then(res => {
    console.log('Post ID 2 - Data')
  console.log(res.data);
});

fetch({
  query:  queries.getPostDinamically,
  variables: { id: 3 },
}).then(res => {
    console.log('Post ID 3 - Data')
  console.log(res.data);
});