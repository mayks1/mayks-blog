export const state = () => ({
    categories: []
})

export const mutations = {
    setCategories(state, payload) {
        state.categories = payload
    }
}

export const getters = {
    categories: state => state.categories
}
