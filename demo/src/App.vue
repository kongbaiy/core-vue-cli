<template>
    <div>{{ msg }}</div>
    <hello-world />
    <ep-delete />
</template>

<script lang="ts" setup>
import HelloWorld from './components/HelloWorld.vue'

const msg = ref<string>('你好')
</script>

<style lang="scss" scoped>
div {
    @apply color-#333;
}
</style>
