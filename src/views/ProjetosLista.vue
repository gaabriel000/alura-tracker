<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeProjeto" class="label">
                    Nome do Projetos
                </label>
                <input id="nomeProjeto" type="text" class="input" v-model="nomeProjeto" />
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th> ID </th>
                    <th> Nome </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { computed, defineComponent } from "vue";

export default defineComponent({
    name: "ProjetosLista",
    data() {
        return {
            nomeProjeto: "",
        };
    },
    methods: {
        salvar() {
            this.store.commit('ADICIONA_PROJETO', this.nomeProjeto);
            this.nomeProjeto = "";
        },
    },
    setup () {
        const store = useStore()
        return {
            store,
            projetos: computed(() => store.state.projetos)
        }
    }
});

</script>

<style scoped lang="scss">
.projetos {
    padding: 1.25rem
}
</style>