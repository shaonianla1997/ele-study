<template>
	<div class="wrapper">
		<div class="img-edge-cover">
			<img src="../../../assets/login-bg.jpg" alt="photo">
		</div>
	</div>
</template>

<script>
</script>

<style>
	.wrapper {
		width: 100%;
		height: 100%;
		background: #EBF2F9;
		-moz-box-shadow: 0px 0px 5px #808080;
		-webkit-box-shadow: 0px 0px 5px #808080;
		box-shadow: 0px 0px 5px #808080;
	}

	.img-edge-cover {
		width: 100%;
		height: 82px;
		position: relative;
	}

	.img-edge-cover:after {
		position: absolute;
		content: '';
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		box-shadow: 0px -40px 20px 0px #EBF2F9 inset;
	}

	.img-edge-cover img {
		width: 100%;
		height: 82px;
		display: block;
		margin-bottom: 20px;
	}
</style>
