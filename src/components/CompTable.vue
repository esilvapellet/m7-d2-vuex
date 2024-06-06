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
        <tr v-for="(juego, index) in juegos" :key="index">
          <td>{{ juego.codigo }}</td>
          <td>{{ juego.nombre }}</td>
          <td>{{ juego.stock }}</td>
          <td>{{ juego.precio }}</td>
          <!-- <td>{{ juego.color }}</td> -->
          <td>
            <div class="d-flex justify-content-center align-items-center">
              <i class="fa-regular fa-square-plus btn btn-secondary mx-2"></i>
              <i class="fa-regular fa-square-minus btn btn-secondary mx-2"></i>
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
      listaJuegos: []
    }
  },
  async created() {
    await this.loadGames();
  },
  computed: {
    ...mapState(["juegos"])
  },
  methods: {
    ...mapActions(['loadGames']),
  },
};
</script>
<style scoped></style>
