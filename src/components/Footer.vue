<template>
    <footer>
        <div class="links">
            <a href="#!"><img src="../assets/images/fb.svg" alt="#"></a>
            <a href="#!"><img src="../assets/images/insta.svg" alt="#"></a>
            <a href="#!"><img src="../assets/images/twitter.svg" alt="#"></a>
            <a href="#!"><img src="../assets/images/linkedin.svg" alt="#"></a>
        </div>
        <p>Copyright ©2020 All rights reserved </p>
    </footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
    footer{
        display: grid;
        justify-content: center;
    }

    .links{
        display: flex;
        justify-content: space-between;
    }
</style>