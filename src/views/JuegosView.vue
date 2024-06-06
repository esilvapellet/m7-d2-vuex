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
  name: 'JuegosView',
  components: {
    CompTable
  }
}
</script>
<style scoped></style>