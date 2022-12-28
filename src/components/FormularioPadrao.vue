<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulario para criação de uma nova tarefa">
                <input type="text" class="input" placeholder="Qual tarefa você deseja iniciar" v-model="descricao">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto">
                        <option value="">Selecione o projeto</option>
                        <option :value="projeto.id" v-for="projeto in projetos" :key="projeto.id">
                            {{ projeto.nome }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="column">
                <TemporizadorGeral @tempoFinalizado="finalizarTarefa" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import TemporizadorGeral from "./TemporizadorGeral.vue";
import { useStore } from "vuex";
import { key } from "@/store";


export default defineComponent({
    name: "FormularioPadrao",
    emits: ["executarSalvarTarefa"],
    components: {
        TemporizadorGeral
    },
    data() {
        return {
            descricao: "",
            idProjeto: ""
        }
    },
    methods: {
        finalizarTarefa(tempoDecorrido: number): void {
            this.$emit("executarSalvarTarefa", {
                duracaoSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(p => p.id == this.idProjeto)
            })
            this.descricao = ""
        }
    },
    setup() {
        const store = useStore(key)
        return {
            projetos: computed(() => store.state.projetos)
        }
    }
});
</script>

<style lang="scss" scoped>
.formulario {
    color: var(--text-primario);
    background-color: var(--bg-primario);
}
.button {
  margin-left: 8px;
}
.box {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>