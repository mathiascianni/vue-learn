<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

defineProps({
    job: Object
})

</script>

<template>
    <aside class="shadow-md p-8 text-black bg-slate-100 rounded-lg">
        <p class="text-black/60 mb-2 text-sm">{{ job.time }}</p>
        <h1 class="uppercase font-bold text-xl mb-2">{{ job.title }}</h1>
        <p class="mb-4 line-clamp-4">{{ job.description }}</p>
        <p class="text-emerald-600 font-bold">{{ job.salary }}USD / Mes
        </p>
        <div class="h-px w-full bg-black/20 my-8"></div>
        <p class="text-orange-800 mb-4"> &diams; {{ job.location }} &diams;</p>
        <RouterLink :to="`/jobs/${job.id}`"
            class="bg-emerald-600 text-white px-4 py-2 w-full text-center rounded-md inline-block hover:bg-indigo-600 transition-all cursor-pointer">Ver
            más</RouterLink>
    </aside>
</template>