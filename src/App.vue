<template>
  <div id="app">
    <el-container>
    <el-main>
  <!--
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">关于</router-link> | 
      <router-link to="/postedit">博客</router-link>
    </div>
  -->
    <router-view/>
    </el-main>
    <el-footer class="foot">2019 © 
     <router-link to="/contact" class="more">联系方式</router-link>
    
    </el-footer>
  </el-container>


  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.foot {
  border-top:1px solid #ccc;
  text-align: right;
}
.more {
  color:#42b983;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    color: orange;
  }
}


</style>
