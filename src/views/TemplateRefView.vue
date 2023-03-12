<template>
    <div>
        <h1>Template Ref</h1>
        <h2>Allow to access DOM node directly</h2>
        <p>
            steps: <br />1. give ref='varName' in the element <br />2. access
            that ref with this.$refs.varName
        </p>
        <TemplateRefVue />
    </div>
</template>

<script>
import TemplateRefVue from "@/components/TemplateRefVue.vue";
export default {
    name: "TemplateRefView",
    components: {
        TemplateRefVue,
    },
};
</script>

<style lang="scss" scoped></style>
