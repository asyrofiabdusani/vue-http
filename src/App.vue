<template>
    <nav>
        <router-link to="/">Post List</router-link> |
        <router-link to="/create-post">Create Post</router-link> |
        <router-link to="/lifecycle">Lifecycle</router-link> |
        <router-link to="/load-post-list">load Post List</router-link> |
        <router-link to="/template-ref">Template Ref</router-link> |
        <router-link to="/mixin">Mixin</router-link> |
    </nav>
    <router-view />
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>
