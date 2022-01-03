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
// import TheWrapper from './components/layout/TheWrapper.vue'
// import TheContainer from './components/layout/TheContainer.vue'

export default {
  name: 'App',
  components: {
   TheNavbar,TheContainer
  // TheWrapper
  }
  
}
</script>

<style>
@import url('./style/main.css');
/* @import url('./style/header.css');
@import url('./style/navbar.css');
@import url('./style/content.css');
@import url('./style/base/icon.css');
@import url('./style/base/button.css');
@import url('./style/base/input.css');
@import url('./style/base/paging.css');
@import url('./style/base/table.css');
@import url('./style/base/commom.css');
@import url('./style/base/combobox.css'); */

</style>
