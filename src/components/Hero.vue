<script setup>
import { defineProps } from 'vue';

defineProps({
    title: String,
    bg: String | null
})

</script>

<template>
    <div class=" bg-cover bg-center h-[60vh] flex items-center justify-center" :style="{ backgroundImage: `url(/src/assets/${bg})` }">
        <h1 class="text-white text-4xl font-bold uppercase w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center">{{ title }}</h1>
    </div>
</template>

<style scoped></style>