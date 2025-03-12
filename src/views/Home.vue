<script setup>
import Hero from "@/components/Hero.vue";
import Container from "@/components/Container.vue";
import JobList from "@/components/JobList.vue";
</script>

<template>
    <main>
        <Hero title="Los mejores trabajos con VUEJs" bg="hero.jpg" />
        <Container />
        <JobList :limit="3" />
    </main>
</template>