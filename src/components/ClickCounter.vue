<template>
    <div>
        <button @click="increment">Counter = {{ counter }}</button>
    </div>
</template>

<script>
import Counter from "../mixins/Counter";

export default {
    name: "ClickCounterVue",
    mixins: [Counter],
};
</script>

<style lang="scss" scoped></style>
