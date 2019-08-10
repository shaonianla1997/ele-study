<template>
	<div class="fullWindow" :style="fontColor">
		<div class="backgroundclass" style="transition: all 0.5s" :style="backGroundParent">
			<div class="backBodyClass" style="transition: all 0.5s" :style="backGroundChild"></div>
		</div>
		<header class="headDiv">
			<slot name="header"></slot>
		</header>
		<main class="bodyDiv">
			<slot>
				<transition :name="transitionGroup.trransitionName" :mode="transitionGroup.mode">
					<router-view :class="transitionGroup.routerClass"></router-view>
				</transition>
			</slot>
		</main>
	</div>
</template>
<script>
	import {
		mapGetters
	} from 'vuex'
	export default {
		name: 'Frame',
		computed: {
			...mapGetters([
				'backGroundParent',
				'backGroundChild',
				'fontColor',
				'transitionGroup'
			])
		},
		methods: {

		},
	}
</script>
<style scoped>
	.fullWindow {
		-webkit-app-region: drag;
		border-radius: 3px;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		position: relative;
	}

	.bodyDiv {
		width: 100%;
		height: 100%;
		/* overflow-y: auto; */
		word-break: break-all;
		flex-grow: 1;
		position: relative;
		/* overflow-x: hidden; */
	}

	.headDiv {
		flex-shrink: 0;
	}

	.footDiv {
		flex-shrink: 0;
	}

	.backgroundclass {
		z-index: -1;
		position: absolute;
		width: 100%;
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}

	/* .backgroundclass::after{
    content: "";
    width:100%;
    height:100%;
    position: absolute;
    background: inherit;
    filter: attr(data-attr);
    overflow: hidden;
    box-sizing: border-box;
} */
	.backBodyClass {
		width: 100%;
		height: 100%;
		overflow: hidden;
		box-sizing: border-box;
	}
</style>
