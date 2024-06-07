<template>
  <div class="hello">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Código</th>
          <th scope="col">Nombre</th>
          <th scope="col">Stock</th>
          <th scope="col">Precio</th>
          <!-- <th scope="col">Color</th> -->
          <th scope="col">Acciones</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(game, index) in games" :key="index">
          <td>{{ game.code }}</td>
          <td>{{ game.name }}</td>
          <td>{{ game.stock }}</td>
          <td>{{ game.price }}</td>
          <!-- <td>{{ juego.color }}</td> -->
          <td>
            <div class="d-flex justify-content-center align-items-center">
              <i class="fa-regular fa-square-plus btn btn-secondary mx-2" @click="addButton(game.code)"></i>
              <i class="fa-regular fa-square-minus btn btn-secondary mx-2" @click="delButton(game.code)"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "CompTable",
  components: {
    // AddProduct
  },
  data() {
    return {
      // games: []
    }
  },
  async created() {
    await this.loadGames();
  },
  computed: {
    ...mapState(["gamesList"]),
    games() {
      return this.gamesList
    }
  },
  methods: {
    ...mapActions(['loadGames']),
    addButton(index) {
      this.$store.dispatch('stockAdd', index)
    },
    delButton(index) {
      this.$store.dispatch('stockDel', index)
    }
  },
};
</script>
<style scoped></style>
