<template>
  <main class="container">
    <h1>Vista juegos</h1>
    <hr>
    <section>
      <CompTable />
    </section>
  </main>
</template>
<script>
import CompTable from "@/components/CompTable.vue"

export default {
  name: 'GamesView',
  components: {
    CompTable
  },
  methods: {
    created() {
      document.title = "Lista Juegos - Tienda 32 Bits"
    }
  }
}
</script>
<style scoped></style>