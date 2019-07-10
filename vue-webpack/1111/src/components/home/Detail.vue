<template>
    <div>
		

<img :src="this.$route.query.img"/>
<p>{{this.$route.query.title}}</p>
<Quer :qunaiList='qunaiList'></Quer>
<button @click="btns()">侧边栏</button>
<transition
 enter-active-class="bounceInLeft"
 leave-active-class="bounceOutLeft"
>
<div class="mark animated" v-show="isShow"></div>
</transition>
<count-down
  v-on:start_callback="countDownS_cb(1)"
  v-on:end_callback="countDownE_cb(1)"
  :currentTime="168983555"
  :startTime="1638983555"
  :endTime="1638983565"
  :dayTxt="'天'"
  :hourTxt="'小时'"
  :minutesTxt="'分钟'"
  :secondsTxt="'秒'">
</count-down>
    </div>
</template>
<script>
import CountDown from 'vue2-countdown'
import Quer from './qunaer'
export default {
    props:{

    },
    components:{
Quer,
CountDown
    },
    data(){
        return {
            qunaiList:[

		{
			"name":"门票",
			"child":[
				{
					"name":"成人票",
					"child":[
						{
							"name":"舞台剧《金面王朝》17:30场门票成人票(D区)"
						},
						{
							"name":"金面王朝D区演出票"
						}
					]
				},
				{
					"name":"儿童票"
				}
			]
		},
		{
			"name":"年卡",
			"child":[
				{
					"name":"年卡卡",
					"child":[
						{
							"name":"包年卡"
						},
						{
							"name":"包包包包卡"
						}
					]
				},
				{
					"name":"卡卡年"
				}
			]
		},
		{
			"name":"一日游"
		}


    ],
    isShow:false
        }
    },
    computed:{

    },
    methods:{
        btns(){
           this.isShow=!this.isShow
		},
		countDownS_cb: function (x) {
           console.log(x)
      },
      countDownE_cb: function (x) {
           console.log(x)
      }
    },
    mounted(){
        // this.axios.get('/api/qunar.json').then(({data})=>{
        //     this.qunaiList=data
        // })
    }
}
</script>
<style scoped lang="stylus">
.mark{
    position :absolute;
    left:0;
    top:0;
    right:0;
    bottom :0;
    width :200px;
    height:100%;
    background :#000;
}
button{
    float:right;
}
</style>