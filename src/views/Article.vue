<template>
  <div class="about">
  <el-container>
    <el-main>
    <h1 class="title">
      <router-link to="/">蒙奇·D·伊丽莎白  »  </router-link>
    </h1>
    <ul >
      <li v-for="(item, index) in articles" :key="index">
      <a class="seemore" @click="gotoroute(item.cont)">{{item.date |moment("YYYY-MM-DD HH:mm:ss")}} | {{item.title}}</a></li>
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
    getNewsList(){
      this.axios.get(`${this.apiurl}/articles/article?page=${this.page}&pageSize=${this.pageSize}`)
      .then((response) => {
        this.articles=response.data.data;
        this.total = response.data.total;
      })
      .catch((response) => {
        this.error = response;
      })
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