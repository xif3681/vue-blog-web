<template>
    <div class="AsideList">
        <h4>{{title}}</h4>
        <hr/>
        <div v-if="imgsrc">
            <img :src="imgsrc" />
        </div>
        <ul>
            <li v-for="item of dataList">
                <a :href="item.link" v-if="item.link"  target="_blank">  {{item.info}}</a>
                <router-link :to="item.route"  v-if="item.route"> {{item.info}}</router-link>
            </li>

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