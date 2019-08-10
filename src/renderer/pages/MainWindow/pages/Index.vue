<template>
	<div class="wraper">
		<div class="login-bg">TIM</div>
		<div class="login-pane">
			<div class="login-user-head">
				<div class="login-head">
					<img class="login-head-img" />
				</div>
				<i class="iconfont icontianjiahaoyou" style="position: absolute;bottom: 12px;left: 12px;font-size: 22px;"></i>
			</div>
			<div class="login-count">
				<div class="login-count-inout">
					<div class="login-count-inout-line">
						<div class="login-count-inout-wrap" style="border-top-left-radius: 3px;border-top-right-radius: 3px;border-bottom: none;">
							<input placeholder="QQ号码/手机/邮箱" />
							<i class="iconfont iconxiala" style="color: #A2A2A2;font-size: 12px;margin-right: 6px;"></i>
						</div>
						<div style="font-size: 12px;margin-left: 10px;">注册账号</div>
					</div>
					<div class="login-count-inout-line">
						<div class="login-count-inout-wrap" style="border-bottom-left-radius: 3px;border-bottom-right-radius: 3px;">
							<input placeholder="密码" />
							<i class="iconfont iconruanjianpan" style="color: #A2A2A2;font-size: 15px;margin-right: 6px"></i>
						</div>
						<div style="font-size: 12px;margin-left: 10px;">找回密码</div>
					</div>
					<div class="login-option">
						<div>
							<input type="checkbox" id="checkbox" v-model="checked" style="-webkit-app-region: no-drag;">
							<span>记住密码</span>
						</div>
						<div>
							<input type="checkbox" id="checkbox" v-model="checked" style="-webkit-app-region: no-drag;">
							<span>自动登录</span>
						</div>
					</div>
					<div class="login-btn">登录</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				checked: true
			}
		},
	}
</script>

<style>
	/* *{
		
	} */
	.wraper {
		width: 100%;
		height: 100%;
		background: #EBF2F9;
		-moz-box-shadow: 0px 0px 16px #808080;
		-webkit-box-shadow: 0px 0px 16px #808080;
		box-shadow: 0px 0px 16px #808080;
	}

	.login-bg {
		width: 100%;
		height: 182px;
		background: url(../../../assets/login-bg.jpg);
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 60px;
		color: #fff;
	}


	.login-pane {
		width: 100%;
		height: 150px;
		display: flex;
		flex-direction: row;

	}

	.login-user-head {
		position: relative;
		width: 115px;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.login-head {
		width: 70px;
		height: 70px;
		position: absolute;
		top: 10px;
		right: 0;
	}

	.login-head-img {
		width: 70px;
		height: 70px;
		border-radius: 50%;
		background: #DADBDD;
	}

	.login-count {
		display: flex;
		flex-direction: column;
		margin-left: 12px;
		-webkit-app-region: no-drag;
	}

	.login-count-inout {
		margin-top: 15px;
	}

	.login-count-inout-line {
		display: flex;
		flex-direction: row;
		align-items: center;
		color: #2786E4;
	}

	.login-count-inout-wrap {
		width: 200px;
		height: 30px;
		border: 1px solid #c1c1c1;
		background: #FFFFFF;
		overflow: hidden;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	.login-count-inout-wrap input {
		border: none;
		width: 150px;
		height: 100%;
		margin-left: 5px;
		background: none;
		-webkit-app-region: no-drag;
		outline: none;
	}

	.login-option {
		width: 200px;
		height: 30px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		font-size: 12px;
		color: #8D9195;
		-webkit-app-region: no-drag;
	}

	.login-option div {
		display: flex;
		flex-direction: row;
		align-items: center;
	}

	.login-btn {
		width: 200px;
		line-height: 30px;
		margin-top: 5px;
		text-align: center;
		background: #00A3FF;
		border-radius: 4px;
		color: #fff;
		font-size: 12px;
		letter-spacing: 10px
	}
</style>
