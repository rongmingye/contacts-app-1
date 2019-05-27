<template>
	<view class="account_content">
		<view> 账号: {{account}} </view>
		<view> 昵称: {{nickname}} </view>
		<view class="footer">
			<button type="primary" @tap="quit()">退出</button>
		</view>
		
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				account: uni.getStorageSync('account'),
				nickname: uni.getStorageSync('nickname')
			}
		},
		onShow() {
			
		},
		methods: {
			quit: function() {
				uni.redirectTo({
					url: '/pages/login/login'
				});
				uni.clearStorage();
			},
		}
	}
</script>

<style>
	.account_content{
		padding: 20px 15px;
		line-height: 30px;
		font-size: 20px;
	}
	.account_content view{
		margin-top: 15px;
	}
	.account_content .footer{
		margin-top: 30px;
	}
	.account_content .footer button{
		width: 100px;
	}
</style>
