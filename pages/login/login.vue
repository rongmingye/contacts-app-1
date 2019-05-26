 <template>
	<view>
		<view class="uni-common-mt">
            <view class="uni-form-item uni-column">
                <view class="title">账号:</view>
                <input class="uni-input"  placeholder="请输入账号" :value="user.account" />
            </view>
			<view class="uni-form-item uni-column">
			    <view class="title">密码:</view>
			    <input class="uni-input"  placeholder="请输入账号" :value="user.password" />
			</view>
			<button type="primary" @tap="submitLogin">登陆</button>
			<button type="primary" @tap="register">注册</button>
		</view>
	</view>
</template>

<script>
	export default {
		data: function() {
			return {
				user: {
					account: "",
					password: ""
				}
			}
		},
		methods: {
			submitLogin: function(){
				var params = {
					account: this.user.account,
					password: this.user.password
				}
				console.log(params);
				// uni.request({
				// 	url: '', 
				// 	method: 'POST',					
				// 	data: params,
				// 	success: (res) => {
				// 		console.log(res.data);
				// 		uni.redirectTo({
				// 			url: '/pages/index/index'
				// 		});
				// 	}
				// });
				uni.redirectTo({
					url: '/pages/index/index'
				});
			},
			register: function(){
				uni.navigateTo({
					url: '/pages/register/register'
				});
			}
		}
	}
</script>

<style>
</style>
