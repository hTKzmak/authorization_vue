<template>
  <div class="container">
    <Header/>
    <main>
      <RouterView />
    </main>
    <Footer/>
  </div>

</template>


<script>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default{
  components: {Header, Footer}
}
</script>


<style>

main{
  margin-top: 100px;
  margin-bottom: 200px;
}

</style>
