<template>
    <div>

     <div
      v-for='(item,index) in qunaiList' 
      :key='index'
     >
   <p >{{item.name}}</p>  
          <qunar :qunaiList='item.child'></qunar>
     </div>

    </div>
</template>
<script>
export default {
    name:'qunar',
    props:{
qunaiList:Array
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
</style>