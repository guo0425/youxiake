<template>
  <div id="app">

      {{location.creditCity}}
      {{location.creditArea}}
      {{location.creditStreet}}
     
    <router-view/>
    
  </div>
</template>

<script>
import BMap from 'BMap'
export default{
    data() {
	     return {
	     	 location: null
	     }
	},
    methods:{
		getCity(){
		      let _this = this
		      var geolocation = new BMap.Geolocation();

		      geolocation.getCurrentPosition(function(r) {
		        if (this.getStatus() == BMAP_STATUS_SUCCESS) {
		          if(r.accuracy==null){
			   		//alert('您已拒绝地理位置授权');
			    //用户决绝地理位置授权
			    return;
			  }else{
		            const myGeo = new BMap.Geocoder()
		            myGeo.getLocation(new BMap.Point(r.point.lng, r.point.lat), data => {
		             if (data.addressComponents) {
		              const result = data.addressComponents
		              const location = {
		                creditLongitude: r.point.lat, // 经度
		                creditLatitude: r.point.lng, // 纬度
		                creditProvince: result.province || '', // 省
		                creditCity: result.city || '', // 市
		                creditArea: result.district || '', // 区
		                creditStreet: (result.street || '') + (result.streetNumber || '') // 街道
		              }
		              _this.location = location;

		              _this.creditCity=location.creditCity;

		              _this.creditLongitude=location.creditLongitude;

		              _this.creditLatitude=location.creditLatitude;
		             
		              // alert(this.getStatus());
		             }
		            })
		          }
		        }
		    })
		}   
	},
	mounted() {
	       this.getCity();
	}
}
</script>
<style type="text/css">
.map{
	width:100%;
	height: 500px;
}
</style>