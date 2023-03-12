<template>
    <div>
        <h1>Vue Lifecycle</h1>
        <h2>See console</h2>
        <LifecycleVue v-if="isShown" />
        <button @click="isShown = !isShown">Hide/Show Child</button>
    </div>
</template>

<script>
import LifecycleVue from "@/components/LifecycleVue.vue";
export default {
    name: "LifecycleView",
    beforeCreate() {
        console.log("parent before create");
    },
    created() {
        console.log("parent created");
    },
    beforeMount() {
        console.log("parent before mount");
    },
    mounted() {
        console.log("parent mounted");
    },
    beforeUpdate() {
        console.log("parent before update");
    },
    updated() {
        console.log("parent updated");
    },
    beforeUnmount() {
        console.log("parent before unmount");
    },
    unmounted() {
        console.log("parent unmounted");
    },
    components: {
        LifecycleVue,
    },
    data() {
        return {
            isShown: true,
        };
    },
};
</script>

<style lang="scss" scoped></style>
