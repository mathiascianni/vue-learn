<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
    <div class="lg:px-[200px]">
        <h1 class="text-2xl font-bold my-8">Algo salió mal</h1>
        <main>
            <p class="mb-4">La pagina no se encontró</p>
            <RouterLink to="/" class="bg-emerald-600 text-white px-4 py-2 text-center rounded-md inline-block hover:bg-indigo-600 transition-all cursor-pointer">Ir al inicio</RouterLink>
        </main>
    </div>
</template>
