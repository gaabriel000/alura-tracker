<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-8" role="form" aria-label="Formulario para criação de uma nova tarefa">
                <input 
                    type="text" 
                    class="input" 
                    placeholder="Qual tarefa você deseja iniciar"
                    v-model="descricao">
            </div>
            <div class="column">
                <TemporizadorGeral @tempoFinalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TemporizadorGeral from './TemporizadorGeral.vue';

export default defineComponent({
    name: 'FormularioPadrao',
    emits: ['executarSalvarTarefa'],
    components: {
        TemporizadorGeral
    },
    data () {
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa (tempoDecorrido: number) : void {
            this.$emit('executarSalvarTarefa', {
                duracaoSegundos: tempoDecorrido,
                descricao: this.descricao
            })
            this.descricao = ''
        }
    }
});
</script>

<style lang="scss">
.formulario {
    color: var(--text-primario);
    background-color: var(--bg-primario);
}
</style>