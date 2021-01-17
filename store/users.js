export const state = () => ({
  users: [],
})

export const getters = {
  getUsers(state) {
    return state.users
  },
  getUserById(state) {
    return (id) => {
      return state.users.find((user) => user.id === id)
    }
  },
}

export const mutations = {
  setUsers(state, users) {
    state.users = users
  },
}

export const actions = {
  async init({ commit }) {
    const data = await this.$axios.$get('/users')
    commit('setUsers', data)
  },
}
