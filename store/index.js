
// import axios from 'axios'
// const unique = require('uniq')

export const state = () => ({
    isOverflow: false
})


export const mutations = {
    overflow(state, payload) {
        state.isOverflow = payload
    }
}

// export const actions = {
//     loadSettings({ commit }, context) {
//       return this.$storyapi.get(`cdn/stories/${context.language}/settings`, {
//         version: context.version
//       }).then((res) => {
//         commit('setSettings', res.data.story.content)
//       })
//     }
//   },

export const actions = {


    async nuxtServerInit({commit}, context ) {
        
        const {data} = await context.app.$storyapi.get('cdn/stories', {
            version: 'published',
            starts_with: 'categories/'
        })

        commit('categories/setCategories', data.stories)
    }
}    
    // async getData({commit}) {

    //     const { data } = await axios.post(process.env.POSTS_URL,
    //         JSON.stringify({
    //             filter: { published: true },
    //             sort: {_created:-1},
    //             populate: 1
    //           }),
    //           {
    //             headers: { 'Content-Type': 'application/json' }
    //           }
    //     )

    //     let tags = unique(data.entries.map(post => post.tags).flat())
    //     // .unique()
    //     // .map(tag => {
    //     //   let payload = collection.filter(item => {
    //     //     return collect(item.tags).contains(tag)
    //     //   }).all()

    //     commit('categories/setCategories', tags)
    //     // const posts = await axios.get(process.env.API_POSTS)
    //     commit('posts/setPosts', data.entries)
        
    //     // const categories = await axios.get(process.env.API_CATEGORIES)
    //     // commit('categories/setCategories', categories.data.entries)
        
    // }

// }