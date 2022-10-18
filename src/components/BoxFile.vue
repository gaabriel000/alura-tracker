<template>
    <div class="box has-text-weight-bold">
        <slot>
        </slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({ name: 'BoxFile' })
</script>

<style scoped lang="scss">
.box {
    background: #faf3d5;
}
</style>