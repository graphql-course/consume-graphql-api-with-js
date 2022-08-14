const axios_ = require('axios');
const apiUrl = require('./../constants').apiUrl;
const mutations = require('./../constants').mutations;

axios_.post(apiUrl, {
    query: mutations.addComment
})
.then((res) => {
  console.log(`statusCode: ${res.status}`)
  console.log(res.data)
})
.catch((error) => {
  console.error(error)
});

