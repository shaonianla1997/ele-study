<template>
	<div id="wrapper">
		<Frame>
			<main-header v-on:setting="goSetting" slot="header" />
		</Frame>
	</div>
</template>

<script>
	import Frame from "@/components/Frame/Frame.vue"
	import MainHeader from "@/components/header/MainHeader.vue";
	export default {
		name: 'main-window',
		data() {
			return {
				setting: false
			}
		},
		components: {
			Frame,
			MainHeader
		},
		methods: {
			open(link) {
				this.$electron.shell.openExternal(link)
			},
			goSetting(e) {
				if (this.setting) {
					this.$store.dispatch('changeTransition', 'flip')
					this.$router.push('/')
					this.setting = false
				} else {
					this.$store.dispatch('changeTransition', 'flip')
					this.$router.push('/setting')
					this.setting = true
				}

			},
			closeWindow() {
				remote.app.quit()
			}
		}
	}
</script>

<style>
	#wrapper {
		height: 99vh;
		width: 99vw;
		border-radius: 6px;
		margin: 1px;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		-khtml-user-select: none;
		user-select: none;
		onselectstart: none
	}
</style>
