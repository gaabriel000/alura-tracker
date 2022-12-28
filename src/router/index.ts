import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasCadastro from '../views/TarefasCadastro.vue';
import ProjetosLista from '../views/ProjetosLista.vue'

const rotas: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Tarefas',
        component: TarefasCadastro
    },
    {
        path: '/projetos',
        name: 'Projetos',
        component: ProjetosLista
    }
]
const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;