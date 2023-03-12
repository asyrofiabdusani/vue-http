<template>
    <div>
        <h2>Load Post List View On Created Lifecycle</h2>
        <hr />
        <div class="container">
            <div v-for="post in posts" :key="post.id">
                <Card>
                    <template v-slot:image>
                        <img src="https://picsum.photos/200" alt="" />
                    </template>
                    <template v-slot:title>
                        <h2>{{ post.title }}</h2>
                    </template>
                    <template v-slot:body>
                        <p>
                            {{ post.body }}
                        </p>
                    </template>
                </Card>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
import Card from "@/components/Card.vue";
export default {
    name: "PostListVue",
    components: { Card },
    data() {
        return {
            posts: [],
            errors: "",
        };
    },
    created() {
        this.getPosts();
    },
    methods: {
        getPosts() {
            axios
                .get("https://jsonplaceholder.typicode.com/posts")
                .then((response) => (this.posts = response.data));
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    justify-content: space-evenly;
}
</style>
