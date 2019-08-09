<template>
	<div class="mian-header">
		<div v-for="(item,index) in headOption" class="cicle" @mouseenter="enter(index)" @mouseleave="leave" :style="{background:(item.color)}">
			<div v-show="isShow==index">×</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'main-header',
		data(){
			return{
				isShow: NaN,
				headOption:[
					{
						name:"",
						color:"#FF5F52"
					},
					{
						name:"",
						color:"#FFBE05"
					},
					{
						name:"",
						color:"#15CC35"
					}
				]
			}
		},
		methods: {
			enter(index){
				this.isShow=index;
				console.log("好了");
				//alert("啦啦啦啦")
			},
			leave(){
				this.isShow=NaN;
			}
		}
	}
</script>

<style>
	
	*{
		-webkit-app-region: drag
	}
	
	.mian-header {
		width: 100%;
		height: 30px;
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.cicle {
		width: 16px;
		height: 16px;
		display:flex;
		align-items:center;
		justify-content: center;
		border-radius: 50%;
		background: #000;
		margin-left: 10px;
		-webkit-app-region: no-drag;
	}
</style>
