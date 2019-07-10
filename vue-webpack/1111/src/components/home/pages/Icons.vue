<template>
    <div class="icon">
      
<div class="swiper-container" id='swiper-Box'>
    <div class="swiper-wrapper">
       <div class="swiper-slide " v-for="(item,index) in changeList" :key='index'>
       <div v-for='(val,idx) in item' :key='idx' class="ever">
           <img :src='val.imgUrl'/>
           <span>{{val.title}}</span>
       </div>
      </div>
    </div>
  </div>
  <div class="local">
      定位
  </div>
    </div>
</template>
<script>
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
export default {
    props:{
        iconlist:Array
    },
    components:{

    },
    data(){
        return {

        }
    },
    computed:{
        changeList(){
            let arr=[]
            this.iconlist.forEach((item,index)=>{
                let ind=Math.floor(index/8)
                if(!arr[ind]){
                    arr[ind]=[]
                }
                arr[ind].push(item)
            })
            return arr
        }
    },
    methods:{

    },
    created(){

    },
    mounted(){
  const IconSwiper=new Swiper('#swiper-Box',{
      autoplay:true,
      loop:true
  })
    }
}
</script>
<style scoped lang="stylus">
.icon{
    width:100%;
    height :4.5rem;
    font-size :0.37rem;
}
.swiper-container,.swiper-slide{
      width:100%;
    height :3.5rem;
}
.icon{
    border-bottom :  1px solid #ccc;
}
.swiper-slide{
    display :flex;
    flex-wrap:wrap;
    justify-content:space-between;
}
.ever{
     text-align:center;
    width:25%;
    height :1.5rem;
    span{
        display :inline-block;
        text-align:center;
    }
}
img{
    width:70%;
    height :1.3rem;
}
.local{
    width:100%;
    height:0.9rem;
    line-height :0.9rem;
}
</style>