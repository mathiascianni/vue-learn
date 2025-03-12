<script setup>
import { ref, onMounted } from 'vue';
import JobCard from "@/components/JobCard.vue";
import axios from 'axios';

const jobs = ref([])

onMounted(async () => {
    try {
        const response = await axios.get('http://localhost:5000/jobs')
        jobs.value = response.data
        console.log(jobs)
    } catch (err) {
        console.err(err)
    }
})
</script>

<template>
    <h1 class="text-2xl font-bold mb-8 text-center mt-16">Todos los trabajos</h1>
    <main>
        <section class="lg:px-[200px] bg-blue-50 py-16">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <JobCard v-for="job in jobs" :key="job.id" :job="job" />
            </div>

            <a href="/jobs" v-if="showBtn"
                class="bg-emerald-600 p-4 px-16 block max-w-max mx-auto rounded-md my-16 text-white shadow-md text-center hover:bg-indigo-600 transition-all">Ver
                todos los trabajos</a>
        </section>
    </main>
</template>