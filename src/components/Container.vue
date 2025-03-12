<script setup>
import { ref } from 'vue'
import Card from './Card.vue';


</script>

<template>
    <div class="grid md:grid-cols-2 gap-8 lg:px-[200px] my-24">
        <Card title="Para devs" href="/jobs" color="emerald" cta="Buscar trabajos">Busca tu trabajo ideal y comienza tu carrera profesional hoy</Card>
        <Card title="Para empresas" href="/jobs/add" color="neutral" cta="Añadir oferta">Pon en búsqueda a los mejores talentos para tus proyectos</Card>
    </div>
</template>