<template>
    <FormularioPadrao @executarSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <BoxFile v-if="listaVazia">
            Sem tarefas adicionadas hoje.
        </BoxFile>
        <TarefaRegistrada v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import FormularioPadrao from '../components/FormularioPadrao.vue';
import TarefaRegistrada from '../components/TarefaRegistrada.vue';
import BoxFile from '../components/BoxFile.vue';
import ITarefa from '../interfaces/ITarefa';

export default defineComponent({
    name: 'App',
    components: {
        FormularioPadrao,
        TarefaRegistrada,
        BoxFile
    },
    data() {
        return {
            tarefas: [] as ITarefa[],
        }
    },
    methods: {
        salvarTarefa(tarefa: ITarefa) : void {
            this.tarefas.push(tarefa)
        }
    },
    computed: {
        listaVazia(): boolean {
            return this.tarefas.length === 0
        }
    }
});
</script>
