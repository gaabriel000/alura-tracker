<template>
  <head>
    <title>Alura Tracker</title>
  </head>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': isModoEscuro }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <router-view/>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";

export default defineComponent ({
  name: "App",
  components: {
    BarraLateral
  },
  data () {
    return {
      isModoEscuro: false
    }
  },
  methods: {
    trocarTema (isModoEscuro: boolean) {
      this.isModoEscuro = isModoEscuro
    }
  }
});
</script>

<style lang="scss">
.lista {
  padding: 1.25rem;
}

main {
  --bg-primario: #fff;
  --text-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --text-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
