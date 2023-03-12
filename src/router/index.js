import { createRouter, createWebHashHistory } from "vue-router";
import PostListView from "../views/PostListView.vue";
import CreatePostView from "../views/CreatePostView.vue";
import LifecycleView from "../views/LifecycleView.vue";
import LoadPostListView from "../views/LoadPostListView.vue";
import TemplateRefView from "../views/TemplateRefView.vue";
import MixinView from "../views/MixinView.vue";

const routes = [
    {
        path: "/",
        name: "post-list",
        component: PostListView,
    },
    {
        path: "/create-post",
        name: "create-post",
        component: CreatePostView,
    },
    {
        path: "/lifecycle",
        name: "lifecycle",
        component: LifecycleView,
    },
    {
        path: "/load-post-list",
        name: "load-post-list",
        component: LoadPostListView,
    },
    {
        path: "/template-ref",
        name: "template-ref",
        component: TemplateRefView,
    },
    {
        path: "/mixin",
        name: "mixin",
        component: MixinView,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
