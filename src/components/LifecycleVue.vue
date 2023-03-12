<template>
    <div>Child Component</div>
</template>

<script>
export default {
    name: "LifecycleVue",
    beforeCreate() {
        console.log("child before create");
    },
    created() {
        console.log("child created");
    },
    beforeMount() {
        console.log("child before mount");
    },
    mounted() {
        console.log("child mounted");
    },
    beforeUpdate() {
        console.log("child before update");
    },
    updated() {
        console.log("child updated");
    },
    beforeUnmount() {
        console.log("child before unmount");
    },
    unmounted() {
        console.log("child unmounted");
    },
};
</script>

<style lang="scss" scoped></style>
