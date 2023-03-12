<template>
    <div>
        <input type="text" ref="inputRef" />
    </div>
</template>

<script>
export default {
    name: "TemplateRefVue",
    mounted() {
        this.$refs.inputRef.focus();
    },
};
</script>

<style lang="scss" scoped></style>
