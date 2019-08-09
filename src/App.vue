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
     <a class="more">Email: luo.shuqi@live.com</a>
    
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
