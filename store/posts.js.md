const collect = require('collect.js')

export const state = () => ({
  posts: []
})

export const mutations = {
  setPosts(state, payload) {
      state.posts = payload
  }
}

export const getters = {
  // lastPosts: state => state.posts.slice(-2).reverse(),
  lastPosts: state => state.posts.slice(-2),

  // posts: state => state.posts.slice().reverse(),
  posts: state => state.posts,

  post: state => id => state.posts.find(post => post.title_slug === id),




// // const filtered = collection.map(post => post.tags)
// let payload = collection.filter(item => {
//     return collect(item.tags).contains('java')
//   }).all()

  categoryPosts: state => id => collect(state.posts).filter(item => { return collect(item.tags).contains(id) }).all()
  
}