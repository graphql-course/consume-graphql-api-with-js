const axios_ = require('axios');
const apiUrl = require('./../constants').apiUrl;
const queries = require('./../constants').queries;

axios_.post(apiUrl, {
    query: queries.authorInfo
})
.then((res) => {
  console.log(`statusCode: ${res.status}`)
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
});

axios_.post(apiUrl, {
  query: queries.postsList
})
.then((res) => {
console.log(`statusCode: ${res.status}`)
console.log(res.data)
})
.catch((error) => {
console.error(error)
});