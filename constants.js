module.exports = {
    apiUrl: 'https://heroku-node-express-mugan86.herokuapp.com/graphql',
    queries: {
        authorInfo: '{ author(id: "88d6bec2") { id name email} }',
        postsList: '{ posts { id title content author { name }} }',
        postOne: '{ post(id: 1) { id title content author { name }} }',
        getPostDinamically: `query queryValue ($id: Int!) {
            post(id: $id) { id title content author { name }} 
        }`
    },
    mutations: {
        addComment:  `mutation {
            addComment(comment: {
              name: "Hola",
              content: "Bien!",
              postId: 1
            }) {
              id
              name
              content
            }
        }`,
        addPost : `mutation {
            addPost(post: {
              title: "Prueba Fetch",
              content: "Esperemos que salga bien!",
              author: "88d6bec2",
              url: ""
            }) {
              id
              content
            }
        }`
    }
}