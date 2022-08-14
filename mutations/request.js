const request_ = require('request');
const apiUrl = require('./../constants').apiUrl;
const mutations = require('./../constants').mutations;

request_.post(apiUrl, {
  json: {
    query: mutations.addComment
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log('AddComment');
  console.log(`statusCode: ${res.statusCode}`)
  console.log(body)
});

request_.post(apiUrl, {
  json: {
    query: mutations.addPost
  }
}, (error, res, body) => {
  if (error) {
    console.error(error)
    return
  }
  console.log('addPost');
  console.log(`statusCode: ${res.statusCode}`)
  console.log(body)
});