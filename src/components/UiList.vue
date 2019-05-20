<template>
    <div>
        <h4>{{title}}</h4>
        <ul>
            <li v-for="skill of datalist"><a  target="_blank" rel="noopener">{{skill.name}}</a></li>
        
        </ul>
    
    </div>
</template>
<script>
export default {
    name: 'UiList',
    props: {
        datalist:Array,
        title:String
    }
}
</script>
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>