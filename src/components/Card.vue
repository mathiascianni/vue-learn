<script setup>
import { defineProps, ref } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
    title: String,
    cta: String,
    href: String,
    color: String
})

</script>

<template>
    <aside :class="`${color === 'emerald' ? 'bg-emerald-200' : 'bg-neutral-200'} shadow-md p-8 rounded-lg text-black`">
        <div>
            <h1 class="uppercase font-bold text-xl mb-2">{{ title }}</h1>
            <p class="mb-4">
                <slot></slot>
            </p>

            <RouterLink :to="href"
                :class="`${color === 'emerald' ? 'bg-emerald-600' : 'bg-neutral-600'} text-white px-4 py-2 rounded-md inline-block hover:bg-indigo-600 transition-all cursor-pointer`">
                {{ cta }}</RouterLink>
        </div>
    </aside>
</template>