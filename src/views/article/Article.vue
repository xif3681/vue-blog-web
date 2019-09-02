<template>
  <div class="about">
  <el-container>
    <el-main>
    <h1 class="title">
      <router-link to="/">蒙奇·D·伊丽莎白  »  </router-link>
    </h1>
    <ul >
      <li v-for="(item, index) in articles" :key="index">
      <a class="seemore" @click="gotoroute(item.cont)">{{$moment(item.date).format("YYYY-MM-DD HH:mm:ss")}} | {{item.title}}</a></li>
    </ul>
    <el-pagination
      background
      layout="prev, pager, next"
      :current-page="page"
      @current-change="currentChange"
      :total="total">
    </el-pagination>

    </el-main>

  </el-container>
  </div>
</template>
<style scoped lang="scss">


.title {
      text-align: left;
      border-bottom: 1px solid #ccc;
      padding-bottom: 10px;
      a { 
          color: orange;
          text-decoration: none;
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
  
</style>
<script>
export default {
    // name: 'article',
    data() {
      return {
        articles: [],
        url: 'http://codelead.cn',
        // apiurl: 'http://notapig.cn/blog-api',
        // apiurl: '/blog-api',
        apiurl: '/articles',
        total : 0,
        page: 1,
        pageSize: 10
      }
    },
    methods: {
    gotoroute(id) {
      // this.$router.push({ name: 'details', params: { id: id }})
      window.open(`${this.url}${id}`, '_blank')
    },

    async getNewsList(){
      try {
        const response = await this.$services.article.allarticlesPage({page: this.page, pageSize: this.pageSize})
        this.articles=response.data;
        this.total = response.total;
      } catch (error) {
        console.log('queryWeekOrgOrder Error: ', error)
      }

    },
    currentChange (val) {
      this.page = val;
      this.getNewsList();
    },


  },
  mounted() {
    this.getNewsList();
  }
}
</script>