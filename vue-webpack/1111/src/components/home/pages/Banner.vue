<template>
    <div class="banner">
<div class="swiper-container" id='swiper-banner'>
    <div class="swiper-wrapper">
       <div class="swiper-slide">
        <img src="https://img1.qunarzz.com/sight/p0/1808/22/2272ea0de6998a7aa3.img.png_600x330_e910b169.png" alt="">
      </div>
       <div class="swiper-slide">
        <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/57c0942b8ad742abf288489ee3acfcff.jpg_750x200_a23f426d.jpg" alt="">
      </div>
       <div class="swiper-slide">
        <img src="http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20196/b421363bbbb9184deacb4247eeea7485.jpg_750x200_12b42643.jpg" alt="">
      </div>
    </div>
  </div>
    </div>
</template>
<script>
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
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

    },
    methods:{

    },
    created(){

    },
    mounted(){
        var MySwiper=new Swiper('#swiper-banner',{
            autoplay:true,
            loop:true
        })
    }
}
</script>
<style scoped lang="stylus">
.banner,.swiper-container,.swiper-slide{
    width 100%;
    height :4rem;
}

img{
   width 100%;
    height :100%;
}
</style>