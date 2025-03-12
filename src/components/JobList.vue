<script setup>
import { ref, onMounted, defineProps, computed } from 'vue';
import JobCard from './JobCard.vue';
import axios from 'axios';

defineProps({
    limit: Number,
    showBtn: {
        type: Boolean,
        default: false
    }
})

const isLoading = ref(true)

const jobs = ref([])

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:5000/jobs')
        jobs.value = response.data
    } catch (err) {
        console.err(err)
    } finally {
        isLoading.value = false
    }
})

</script>

<template>
    <section class="lg:px-[200px] bg-blue-50 py-16">
        <h2 class="text-2xl font-bold mb-8 text-center">Últimos trabajos</h2>
        <div v-if="isLoading">Cargando...</div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8" v-else>
            <JobCard v-for="job in jobs.slice(0, limit || jobs.length)" :key="job.id" :job="job" />
        </div>

        <a href="/jobs" v-if="showBtn" class="bg-emerald-600 p-4 px-16 block max-w-max mx-auto rounded-md my-16 text-white shadow-md text-center hover:bg-indigo-600 transition-all">Ver todos los trabajos</a>
    </section>
</template>