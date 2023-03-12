<template>
    <div class="card">
        <div>
            <slot name="image"></slot>
        </div>
        <div>
            <slot name="title"></slot>
        </div>
        <div>
            <slot name="body"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "CardVue",
};
</script>

<style>
.card {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    padding: 1em;
    margin-bottom: 20px;
    width: 200px;
}
.card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}
</style>
