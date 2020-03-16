const state = () => ({
  menu:[],
  hotPlace: {}
})

const mutations = {
  setHotPlace(state, val) {
    state.hotPlace = val
  },
  setMenu(state, val) {
    state.menu = val
  }
}

const actions = {
  setHotPlace: ({commit}, val) => {
    commit('setHotPlace', val)
  },
  setMenu: ({commit}, val) => {
    commit('setMenu', val)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

