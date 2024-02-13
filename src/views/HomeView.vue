<template>
  <div class="home">
    <div class="home-title">
      <h1>Home Page</h1>
      <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <RouterLink to="/login">Authorization</RouterLink>
    </div>
    <img src="../assets/images/tools.png" alt="">
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>

.home{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.home-title{
  max-width: 500px;
}

.home-title>a{
  background-color: #FF6464;
  color: #FFF;
  width: 208px;
  height: 43px;
  border: none;
  font-size: 20px;
  border-radius: 2px;
  cursor: pointer;
  padding: 8px 32px;
}

.home-title>a:active{
  background-color: #f84e4e;
}
</style>