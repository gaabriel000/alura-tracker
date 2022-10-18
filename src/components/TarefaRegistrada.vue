<template>
    <BoxFile>
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao || 'Tarefa sem descrição' }} 
            </div>
            <div class="column">
                <CronometroHorario :tempoSegundos="tarefa.duracaoSegundos"/>
            </div>
        </div>
    </BoxFile>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import CronometroHorario from './CronometroHorario.vue';
import ITarefa from '../interfaces/ITarefa';
import BoxFile from './BoxFile.vue';

export default defineComponent({
    name: 'TarefaRegistrada',
    components: {
        CronometroHorario,
        BoxFile
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    }
})
</script>