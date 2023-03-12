<template>
    <div>
        <h1>Create Post</h1>
        <form @submit.prevent="createPost()">
            <div class="container">
                <input
                    type="number"
                    name="uid"
                    id="uid"
                    placeholder="User Id"
                    v-model="formInput.uid" />
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title Post"
                    v-model="formInput.title" />
                <input
                    type="text"
                    name="body"
                    id="body"
                    placeholder="Content Post"
                    v-model="formInput.body" />
                <button>Submit</button>
            </div>
        </form>
        <hr />
        <h2>output</h2>
        <pre>
            {{ JSON.stringify(response) }}
        </pre>
    </div>
</template>

<script>
import axios from "axios";
export default {
    name: "CreatePostView",
    data() {
        return {
            formInput: {
                uid: "",
                title: "",
                body: "",
            },
            response: {},
        };
    },
    methods: {
        createPost() {
            axios
                .post(
                    "https://jsonplaceholder.typicode.com/posts",
                    this.formInput
                )
                .then((res) => (this.response = res.data));
        },
    },
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: column;
}
</style>
