<template>
    <div>
        <h3 @mouseover="increment">Counter = {{ counter }}</h3>
    </div>
</template>

<script>
import Counter from "../mixins/Counter";
export default {
    name: "HoverCounterVue",
    mixins: [Counter],
};
</script>

<style lang="scss" scoped></style>
