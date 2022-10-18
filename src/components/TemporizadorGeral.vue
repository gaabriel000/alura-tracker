<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
        <CronometroHorario :tempoSegundos="tempoSegundos" />
        <button class="button" @click="iniciar" :disabled="cronometroAtivo">
            <span class="icon">
                <i class="fas fa-play"></i>
            </span>
            <span>play</span>
        </button>
        <button class="button" @click="finalizar" :disabled="!cronometroAtivo">
            <span class="icon">
                <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroHorario from './CronometroHorario.vue';

export default defineComponent({
    name: 'TemporizadorGeral',
    emits: ['tempoFinalizado'],
    components: {
        CronometroHorario
    },
    data() {
        return {
            tempoSegundos: 0,
            cronometro: 0,
            cronometroAtivo: false
        }
    },
    methods: {
        iniciar() {
            this.cronometro = setInterval(() => {
                this.tempoSegundos += 1
                this.cronometroAtivo = true
            }, 1000)
        },
        finalizar() {
            clearInterval(this.cronometro)
            this.$emit('tempoFinalizado', this.tempoSegundos)
            this.tempoSegundos = 0
            this.cronometroAtivo = false
        }
    }
});
</script>