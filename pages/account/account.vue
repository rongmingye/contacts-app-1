<template>
	<view class="account_content">
		<view class="account_num"> {{account}} </view>
		<view class="account_name"> 昵称: {{nickname}} </view>
		<view class="footer">
			<button type="default" @tap="quit()">退出</button>
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
		line-height: 40px;
		font-size: 20px;
	}
	.account_content view{
		margin-top: 15px;
	}
	.account_content .account_num{
		font-size: 24px;
	}
	.account_content .footer{
		margin-top: 30px;
	}
	.account_content .footer button{
		
	}
</style>
