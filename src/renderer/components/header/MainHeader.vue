<template>
	<div class="mian-header">
		<div class="i-wrap" @click="setting">
			<i class="iconfont iconxiala" style="font-size: 15px;"></i>
		</div>
		<div class="i-wrap" @click="hideWindow">
			<i class="iconfont iconzuixiaohua" style="font-size: 15px;"></i>
		</div>
		<div class="i-wrap" @click="closeWindow">
			<i class="iconfont iconguanbi" style="font-size: 12px;"></i>
		</div>
	</div>
</template>

<script>
	import { remote } from 'electron'
	export default {
		name: 'main-header',
		data(){
			return{}
		},
		methods: {
			setting(){
				console.log("啦啦啦啦");
				this.$emit('setting', {a:1,b:2});
			},
			hideWindow () {
			  let win = remote.getCurrentWindow()
			  if (win.isMinimized()) {
			    win.restore()
			  } else {
			    win.minimize()
			  }
			},
			closeWindow () {
			  remote.app.quit()
			}
			
		}
	}
</script>

<style>
	.mian-header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 40px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: flex-end;
		color: #DADBDD;
		padding-right: 5px;
		z-index: 100;
	}
	
	.mian-header div{
		-webkit-app-region: no-drag !important;
	}
	
	.i-wrap{
		margin-right: 12px;
		-webkit-app-region: no-drag !important;
	}
	
	.i-wrap:hover{
		color: #fff;
	}
	
</style>
