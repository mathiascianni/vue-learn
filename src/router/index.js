import { createRouter, createWebHistory } from "vue-router"
import Home from "@/views/Home.vue"
import Jobs from "@/views/Jobs.vue"
import NotFound from "@/views/NotFound.vue"
import Job from "@/views/Job.vue"

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },
        {
            path: "/jobs",
            name: "jobs",
            component: Jobs,
        },
        {
            path: "/jobs/:id",
            name: "job",
            component: Job,
        },
        {
            path: "/:catchAll(.*)",
            name: "not-found",
            component: NotFound,
        },
    ],
})

export default router