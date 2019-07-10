<template>
    <div class="home">
<Header></Header>
<Banner></Banner>
<Icons :iconlist='iconlist'></Icons>
<Hot :hotlist='hotlist'></Hot>
<Like :likelist='likelist'></Like>
    </div>
</template>
<script>
import Header from './pages/Header'
import Banner from './pages/Banner'
import Icons from './pages/Icons'
import Hot from './pages/Hot'
import Like from './pages/Like'
import {mapState}  from 'vuex'
export default {
    props:{

    },
    components:{Header,Banner,Icons,Hot,Like},
    data(){
        return {
            cityName:'',
            iconlist:[],
            hotlist:[],
            likelist:[],
            changeCityName:''
        }
    },
    computed:{
        ...mapState(['city'])
    },
    methods:{
        httpHome(){
             this.axios.get('/api/dataHome.json')
        .then(({data})=>{
           data.data.map((item,index)=>{
               if(item.city== localStorage.getItem('cityName')){
                   let data=item
                    this.iconlist= data.iconsList,
                    this.hotlist=data.hotList
                    this.likelist=data.likeList
               }
           })
        
        })
       }
    },
    created(){

    },
    mounted(){
        this.changeCityName=this.city
        console.log(this.city)
       this.httpHome()
    },
    activated(){
        if(this.city!=this.changeCityName){
            this.httpHome()
            this.changeCityName=this.city
        }
    }
}
</script>
<style scoped lang="stylus">
.home{
    width: 100%;
    height: 100%;
}
</style>