<template>
  <div class="about">
  <el-container>
    <el-main>
    <h1 class="title">
      <router-link to="/">蒙奇·D·伊丽莎白  »  </router-link>
    </h1>
    <img alt="Vue logo" class="logo" src="@/assets/me.jpg">
    <HelloWorld />
    </el-main>

  </el-container>
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
.title {
      text-align: left;
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
      a { 
          color: orange;
          text-decoration: none;
        }
}
  
</style>
