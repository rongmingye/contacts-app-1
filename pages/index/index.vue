<template>
	<view>
		<button type="primary" @tap="quit">退出</button>
	</view>
</template>
 
<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: '首页'
			});
		},
		methods: {
			quit: function() {
				uni.redirectTo({
					url: '/pages/login/login'
				});
			}
		}
	}
</script>

<style>
	
</style>
