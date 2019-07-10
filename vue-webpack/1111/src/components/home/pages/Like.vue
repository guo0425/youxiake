<template>
    <div class="like">
<h4>猜你喜欢</h4>
<ul>
    <li v-for='(item,index) in likelist' :key='index' @click="todetail(item)">
     <div><img :src='item.imgUrl'/></div>   
        <div>
            <h4>{{item.title}}</h4>
        </div>
    </li>
</ul>
    </div>
</template>
<script>
export default {
    props:{
likelist:Array
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{

    },
    methods:{
        todetail(item){
            
            this.$router.push({path:'/detail',query:{img:item.imgUrl,title:item.title}})
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="stylus">
.like{
    width:100%;
    border-bottom 1px solid #ccc;
    font-size :0.37rem;
    h4{
        width :100%;
        height :0.9rem;
        line-height 0.9rem;
    }
}
</style>