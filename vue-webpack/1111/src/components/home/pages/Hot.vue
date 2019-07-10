<template>
    <div class="hot">
        <h4>本周热门榜单</h4>
        <ul class="hot-list" >
            <li v-for='(item,index) in this.hotlist' :key='index'>
                <img :src='item.imgUrl'/>
                <span>{{item.title}}</span>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:{
        hotlist:Array
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

    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="stylus">
.hot{
    width:100%;
    height :3rem;
    border-bottom 1px solid #ccc;
    font-size :0.37rem;
    h4{
        width :100%;
        height :0.9rem;
        line-height 0.9rem;
    }
}
.hot-list{
    width :100%;
    height :2rem;
    display:flex;
    overflow-x:scroll;
    li{
        width :25%;
        height :2rem;
        img{
            width:100%;
            height :1.5rem;
        }
    }
}
</style>