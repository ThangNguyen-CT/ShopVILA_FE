import { createRouter, createWebHistory } from "vue-router";
const routes = [{
        path: "/",
        name: "home",
        component: () =>
            import ("@/views/home.vue"),
    },
    {
        path: "/listproduct/:slug",
        name: "listproduct",
        component: () =>
            import ("@/views/listproduct-shop.vue"),
    },
    {
        path: "/search/:slug",
        name: "search",
        component: () =>
            import ("@/views/listsearch-shop.vue"),
    },
    {
        path: "/details/:slug",
        name: "details",
        component: () =>
            import ("@/views/detais-shop.vue"),
    },
    {
        path: "/pay",
        name: "pay",
        component: () =>
            import ("@/views/payment-shop.vue"),
    },
    {
        path: "/search-order",
        name: "search-order",
        component: () =>
            import ("@/views/SearchOrder-shop.vue"),
    },
    {
        path: "/findId-order",
        name: "findId-order",
        component: () =>
            import ("@/views/order-info.vue"),
    },
    {
        path: "/order-details",
        name: "order-details",
        component: () =>
            import ("@/views/orderDetails-shop.vue"),
    },
    {
        path: "/blog",
        name: "blog",
        component: () =>
            import ("@/views/blog-shop.vue"),
    },
    {
        path: "/policy/:slug",
        name: "policy",
        component: () =>
            import ("@/views/policy-shop.vue"),
    },
    {
        path: "/blog/deltais/:address",
        name: "blog_deltais",
        component: () =>
            import ("@/views/blog-deltais.vue"),
    },
    {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        component: () =>
            import ("@/views/NotFound.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes,
});

export default router;