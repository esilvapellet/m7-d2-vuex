import { createStore } from 'vuex'

export default createStore({
  state: {
    listaJuegos: []
  },
  getters: {
  },
  mutations: {
    SET_JUEGOS(state, listaJuegos) {
      state.juegos = listaJuegos
    },
  },
  actions: {
    async loadGames({ commit }) {
      try {
        let response = await fetch("/juegos.json");
        let data = await response.json();
        console.log(data);
        let juegos = data;
        commit("SET_JUEGOS", juegos)
        return juegos;
      } catch (error) {
        alert("No se pudo obtener el listado de juegos desde la API.")
      }
    }
  },
  modules: {
  }
})
