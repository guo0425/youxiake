<template>
    <div class="head">
        <span>返回</span>
        <div></div>
        <span @click="goCity">{{city}}</span>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        goCity(){
            this.$router.push({path:"/city"})
        }
    },
    created(){

    },
    mounted(){

    }
}
</script>
<style scoped lang="stylus">
.head{
    width:100%;
    height :35px;
    border-bottom 1px solid #ccc;
    display :flex;  
    text-align :center;
    font-size :0.37rem;
    span{
        width:10%;
        line-height :35px;
    }
    div{
        width:78%;
        height :25px;
        border:1px solid #ccc;
        margin-top:5px;
    }
}
</style>