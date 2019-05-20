<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      WEB开发工程师

    </p>
    <UiList title="IT 技能" :datalist="itSkill"/>
    <UiList title="工作经历" :datalist="works"/>
    <UiList title="个人评价" :datalist="evaluation"/>

  </div>
</template>

<script>
// @ is an alias to /src
import UiList from '@/components/UiList.vue'
export default {
  name: 'HelloWorld',
  components: {
    UiList
  },
  props: {
    msg: String
  },
  data() {
    return {
      itSkill : [
        {name: 'ES6 && TypeScript'},
        {name: 'HTML5 && CSS3'},
        {name: 'Angularjs && Angular'},
        {name: 'vue && react'},
        {name: 'less && sass'},
      ],
      works: [
        {name: '深圳创新设计研究院有限公司', time: '2018.4-2019.4'},
        {name: '上海爱数信息技术股份有限公司', time: '2016.2-2017.7'}
      ],
      evaluation: [
        {name: '热爱工作'},
        {name: '追求进步'}
      ]
    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

