<template>
    <header>
        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/users">Users</RouterLink>
                <RouterLink to="/profile">Profile</RouterLink>
            </nav>
        </div>
    </header>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
nav {
    display: flex;
    justify-content: end;
    gap: 30px;
    font-size: 20px;
}
</style>