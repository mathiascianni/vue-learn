<script setup>
import { ref } from "vue";
import { RouterLink, useRoute } from "vue-router";

const links = ref([
    { name: "Home", href: "/" },
    { name: "Jobs", href: "/jobs" },
    { name: "Contact", href: "/contact" },
])

const isActiveLink = (routePath) => {
    const route = useRoute()
    return route.path === routePath;
}

</script>

<template>
    <nav class="flex justify-between p-4 bg-emerald-600 text-white lg:px-[200px]">
        <RouterLink to="/" class="font-bold">VJBS</RouterLink>
        <ul class="flex gap-4">
            <li v-for="link in links" :key="link.name">
                <RouterLink :to="link.href" :class="isActiveLink(link.href) ? 'bg-indigo-600 px-2 py-1 rounded-md transition-all' : 'hover:bg-indigo-600 px-2 py-1 rounded-md transition-all'">{{ link.name }}</RouterLink>
            </li>
        </ul>
    </nav>
</template>

<style scoped></style>