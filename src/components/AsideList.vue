<template>
    <div class="AsideList">
        <h4>{{title}}</h4>
        <hr/>
        <div v-if="imgsrc">
            <img :src="imgsrc" />
        </div>
        <ul>
            <li v-for="item of dataList"><a :href="item.link">  {{item.info}}</a></li>
        </ul>

    
        
    </div>
</template>
<script>
export default {
    name: 'AsideList',
    props: {
        title:String,
        imgsrc:String,
        dataList: Array
    }
}
</script>
<style scoped lang="scss">

.AsideList{

    padding:5px;
    margin-bottom:15px;
    border: 1px solid #ccc;
    border-radius: 10px;
}

 ul {

     li {
            padding: 15px 0;
            text-align: left;
            a {
                color:#42b983;
                &:hover {
                color: orange;
                }
            }

     }
 }
    
</style>