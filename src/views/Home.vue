<template>
  <div class="home">
  <el-container>
    <el-header class="head">{{title}}</el-header>

    <el-container>
      <el-aside width="200px" class="aside">
        <AsideList title="最新留言"  :dataList="guestbook"/>
        <AsideList title="友情链接"  :dataList="blogroll"/>
        <AsideList title="关于"  :dataList="aboutme"/>
      </el-aside>
      <el-main>
        <h3 class="title">{{first.title}}</h3>

        <div>
          <p class="classify">分类：{{first.categories}}</p>
          <p>这里记录过去一周，我看到的值得分享的东西，每周五发布。</p>
          <p>
           <a class="more" @click="gotoroute(first.cont)">阅读全文 »</a>

          </p>
          <p class="time">{{first.time}} | 留言</p>
        </div>

        <h3 class="title" style="margin-top: 40px;">最新文章</h3>
        <ul >
          <li v-for="(item, index) in articles" :key="index">
          <a class="seemore" @click="gotoroute(item.cont)">{{$moment(item.date).format("YYYY-MM-DD HH:mm:ss")}} | {{item.title}}</a></li>
        </ul>
        <p>
              <router-link to="/article" class="more">更多文章 »</router-link>
        
        </p>
      </el-main>

    </el-container>
      <el-container  class="aside1">
        <AsideList title="最新留言"  :dataList="guestbook"/>
        <AsideList title="友情链接"  :dataList="blogroll"/>
        <AsideList title="关于"  :dataList="aboutme"/>
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
      error: '',
      url: 'http://codelead.cn',
      // apiurl: '/blog-api',
      // apiurl: 'http://notapig.cn/blog-api',
      apiurl: '/articles',
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
      first:{},
      articles: [
      ]
    }
  },
  methods: {
    gotoroute(id) {
      // this.$router.push({ name: 'details', params: { id: id }})
      window.open(`${this.url}${id}`, '_blank')
    },
    async queryWeekOrgOrder () {
      try {
        const data = await this.$services.order.queryWeekOrgOrder({
          disCode: this.distributeCode
        })
        this.weekProductData = data.data
      } catch (error) {
        console.log('queryWeekOrgOrder Error: ', error)
      }
    },

    async getNewsList(){
      try {
        const data = await this.$services.home.allarticles()
        this.articles = data.data
        this.first = this.articles.shift();
      } catch (error) {
        console.log('queryWeekOrgOrder Error: ', error)
      }

    }
  },
  mounted() {
    this.getNewsList();
  }
}
</script>

<style scoped lang="scss">
@media screen and (max-width: 760px) {
.aside {
  display:none;
}
.aside1 {
  display:block;
}
}

@media screen and (min-width: 760px) {
.aside1 {
  display:none;
}
.aside {
  display:block;
}
}

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
    &:hover {
      color: orange
    }
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
