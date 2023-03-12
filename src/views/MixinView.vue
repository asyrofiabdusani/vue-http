<template>
    <div>
        <h1>Mixins</h1>
        <h2>
            allow to access functionality between components <br />
            1. create mixin file with ext .js file which has method and data
            needed <br />
            2. import mixin file in the component used <br />
            3. use mixin with mixins:[nameMixin] <br />
            <br />
            mixins can has data, methods, watcher, computed the data, methods,
            watcher, computed in the component has higher priority than mixin
        </h2>
        <ClickCounter />
        <HoverCounterVue />
    </div>
</template>

<script>
import ClickCounter from "@/components/ClickCounter.vue";
import HoverCounterVue from "@/components/HoverCounterVue.vue";
export default {
    name: "MixinVue",
    components: {
        ClickCounter,
        HoverCounterVue,
    },
};
</script>

<style lang="scss" scoped></style>
