<template>
  <div class="about">
    <img alt="Vue logo" class="logo" src="../assets/me.jpg">
    <HelloWorld msg="蒙奇·D·伊丽莎白"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'about',
  components: {
    HelloWorld
  }
}
</script>

<style scoped lang="scss">

.logo {
  width:200px;
  // height:200px;
}
  
</style>
