
<template>
    <div class="s-container">
        <TheHeader/>
        <TheContent/>
        
    </div>
</template>
<style scoped>

.s-container {
    flex: 1;
}
</style>
<script>
import TheHeader from '../../components/layout/TheHeader.vue'
import TheContent from '../../components/layout/TheContent.vue'

export default {
    components: {
   TheHeader,TheContent
  
  }
    
}
</script>
