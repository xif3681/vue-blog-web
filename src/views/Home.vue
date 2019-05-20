<template>
  <div class="home">
  <el-container>
    <el-header class="head">{{title}}</el-header>
    <el-container>
      <el-aside width="200px">
        <AsideList title="最新留言"  :dataList="guestbook"/>
        <AsideList title="友情链接"  :dataList="blogroll"/>
        <AsideList title="关于"  :dataList="aboutme"/>
      </el-aside>
      <el-main>
        <h3 class="title">{{first.title}}</h3>

        <div>
          <p class="classify">分类：{{first.classify}}</p>
          <p>这里记录过去一周，我看到的值得分享的东西，每周五发布。</p>
          <p>
           <a class="more" @click="gotoroute(first.id)">阅读全文 »</a>

          </p>
          <p class="time">{{first.time}} | 留言</p>
        </div>

        <h3 class="title" style="margin-top: 40px;">最新文章</h3>
        <ul >
          <li v-for="item of articles">{{item.time}}>><a class="seemore" @click="gotoroute(item.id)">{{item.title}}</a></li>
        </ul>
        <p>
              <router-link to="/article" class="more">更多文章 »</router-link>
        
        </p>
      </el-main>
    </el-container>


  </el-container>

  </div>
</template>

<script>
// @ is an alias to /src
import AsideList from '@/components/AsideList.vue'

export default {
  name: 'home',
  components: {
    AsideList
  },
  data() {
    return {
      title: '蒙奇·D·伊丽莎白',
      aboutme: [
        {info:'微博', link: 'https://github.com/xif3681'},
        {info:'CSDN', link: 'https://blog.csdn.net/xif3681'},
        {info:'github', link: 'https://github.com/xif3681'},
        {info:'更多', route: '/about'},
      ],
      guestbook: [

      ],
      blogroll: [

        {info:'Angular', link: 'https://www.angular.cn/docs'},
        {info:'vue', link: 'https://cn.vuejs.org/'},
        {info:'react', link: 'http://caibaojian.com/react/'},
      ],
      first:{id: 10056, time:'2019-05-20',title: '每周分享第 56 期',classify:'JS'},
      articles: [
        {id: 10055, time:'2019-05-20',title: '每周分享第 55 期',classify:'JS'},
        {id: 10054, time:'2019-05-20',title: '每周分享第 54 期',classify:'JS'},
        {id: 10053, time:'2019-05-20',title: '每周分享第 53 期',classify:'JS'},
        {id: 10052, time:'2019-05-20',title: '每周分享第 52 期',classify:'JS'},
      ]
    }
  },
  methods: {
    gotoroute(id) {
      this.$router.push({ name: 'details', params: { id: id }})
    }
  },
}
</script>

<style scoped lang="scss">
.head {
    color: orange;
    border-bottom: 1px solid #ccc;
    margin-bottom: 19px;
    line-height: 60px;
    text-align: left;
    font-size: 20px;
    font-weight: bold
}
.foot {
  border-top:1px solid #ccc;
  text-align: right;
}
.classify {
  text-align:right;
}
.more {
  color:#42b983;
  cursor: pointer;
  &:hover {
    color: orange;
  }
}
.seemore {
    cursor: pointer;
}
ul {
    list-style-type: none;
    li {
          padding: 15px 0;
          // text-align: left;
    }
}
.title {
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
}
.time {
  color: #3d3d3d;
  font-size: 12px;
  border-top: 1px solid #ccc;
}
  
</style>
