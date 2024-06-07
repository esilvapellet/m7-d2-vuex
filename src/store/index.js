import { createStore } from 'vuex'

export default createStore({
  state: {
    gamesList: [],
  },
  getters: {
    // getGameById: (state) => (codigo) => {
    //   return state.gamesList.find(game => game.codigo == codigo)
    // },
  },
  mutations: {
    SET_GAMES(state, gamesList) {
      state.gamesList = gamesList
    },
    ADD_STOCK(state, index) {
      state.gamesList[index].stock++
    },
    DEL_STOCK(state, index) {
      state.gamesList[index].stock--
    }
  },
  actions: {
    async loadGames({ commit }) {
      try {
        let response = await fetch("/games.json");
        let games = await response.json();
        // console.log(juegos);
        // let juegos = data;
        commit("SET_GAMES", games)
        return games;
      } catch (error) {
        alert("No se pudo obtener el listado de juegos desde la API.")
      }
    },
    stockAdd(context, code) {
      let index = context.state.gamesList.findIndex(
        (game) => game.code == code)
      console.log(code)
      context.commit('ADD_STOCK', index)
    },
    stockDel(context, code) {
      let index = context.state.gamesList.findIndex(
        (game) => game.code == code)
      console.log(code)
      context.commit('DEL_STOCK', index)
    }
  },
  modules: {
  }
})
