<template>
  <div class="s-wrapper">
    <TheNavbar/>
    <TheContainer/>
    <!-- <TheWrapper/> -->
    <!-- <TheContainer/>  -->
   
  </div>
</template>

<script>
//B1 import
import TheNavbar from './components/layout/TheNavbar.vue'
import TheContainer from './components/layout/TheContainer.vue'


export default {
  name: 'App',
  components: {
   TheNavbar,TheContainer

  }
  
}
</script>

<style>
@import url('./style/main.css');


</style>
