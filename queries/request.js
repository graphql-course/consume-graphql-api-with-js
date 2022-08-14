const request_ = require('request');
const apiUrl = require('./../constants').apiUrl;
const queries = require('./../constants').queries;

request_.post(apiUrl, {
  json: {
    query: queries.authorInfo
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log('Select Author');
  console.log(`statusCode: ${res.statusCode}`)
  console.log(body)
});

request_.post(apiUrl, {
  json: {
    query: queries.postsList
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log('Post list!!');
  console.log(`statusCode: ${res.statusCode}`)
  console.log(body)
});