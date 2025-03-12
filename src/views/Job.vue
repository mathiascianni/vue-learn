<script setup>
import { ref, onMounted } from "vue";
import { useRoute, RouterLink } from "vue-router";
import axios from "axios";

const job = ref({})
const route = useRoute()

onMounted(async () => {
    try {
        const response = await axios.get(`http://localhost:5000/jobs/${route.params.id}`)
        job.value = response.data
    } catch (err) {
        console.err(err)
    }
})
</script>

<template>
    <div class="lg:px-[200px] xl:px-[400px] 2xl:px-[500px] bg-blue-50 py-16">
        <main class="">
            <div class="bg-white shadow-md rounded-lg p-8 mb-8">
                <div class="my-8">
                    <h1 class="text-2xl font-bold mb-4">{{ job.title }}</h1>
                    <p>{{ job.description }}</p>
                </div>
                <div class="my-8">
                    <h2 class="text-2xl font-bold mb-4">Información del trabajo</h2>
                    <p class="text-black/60 mb-2 text-sm">{{ job.time }}</p>
                    <div class="flex gap-4">
                        <p class="text-emerald-600 font-bold">{{ job.salary }}USD / Mes
                        </p>
                        <p class="text-orange-800 mb-4"> &diams; {{ job.location }} &diams;</p>
                    </div>

                </div>
            </div>
            <div class="bg-white shadow-md rounded-lg p-8 mb-8">
                <h2 class="text-2xl font-bold mb-4">Sobre la empresa</h2>
                <div class="flex items-center mb-4">
                    <img src="https://media.revistagq.com/photos/5d5d383031110c000879872d/1:1/w_1080,h_1080,c_limit/logo-starbucks.jpg"
                        alt="" class="aspect-square object-cover object-center max-w-32 rounded-full">
                    <div class=" ml-4">
                        <p class="text-xl">{{ job.company }}</p>
                        <div class="flex gap-4">
                            <p>{{ job.industry }}</p>
                            <p>{{ job.employees }} Empleados</p>
                        </div>
                    </div>
                </div>
                <p>{{ job.companyDescription }}</p>

            </div>
            <RouterLink :to="`#`"
                class="bg-emerald-600 text-white px-4 py-2 w-full text-center rounded-md inline-block hover:bg-indigo-600 transition-all cursor-pointer">
                Aplicar</RouterLink>
        </main>
    </div>
</template>