<template>
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': isModoEscuro }">
    <div class="column is-one-quarter">
      <BarraLateral @aoTemaAlterado="trocarTema" />
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioPadrao @executarSalvarTarefa="salvarTarefa" />
      <div class="lista">
        <TarefaRegistrada v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <BoxFile v-if="listaVazia">
          Sem tarefas adicionadas hoje.
        </BoxFile>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue'
import FormularioPadrao from './components/FormularioPadrao.vue'
import TarefaRegistrada from './components/TarefaRegistrada.vue'
import ITarefa from './interfaces/ITarefa'
import BoxFile from './components/BoxFile.vue';

export default defineComponent ({
  name: 'App',
  components: {
    BarraLateral,
    FormularioPadrao,
    TarefaRegistrada,
    BoxFile
  },
  data () {
    return {
      tarefas: [] as ITarefa[],
      isModoEscuro: false
    }
  },
  computed: {
    listaVazia () : boolean {
      return this.tarefas.length === 0
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa)
    },
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
