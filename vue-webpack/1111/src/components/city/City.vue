<template>
    <div>
        <ul>
            <li v-for='(item,index) in cityList' :key='index' @click="tohome(item)">{{item}}</li>
        </ul>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
export default {
    props:{

    },
    components:{

    },
    data(){
        return {
            cityList:['北京','上海','西安']
        }
    },
    computed:{

    },
    methods:{
        ...mapMutations(['changeCity']),
        tohome(item){
            this.changeCity(item)
            this.$router.push({path:"/"})
        }
    },
    created(){

    },
    mounted(){
        
    }
}
</script>
<style scoped lang="stylus">

</style>