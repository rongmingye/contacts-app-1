 <template>
	<view class="login_content">
		<view class="uni-common-mt">
            <view class="uni-form-item uni-column">
                <view class="title">账号:</view>
                <input class="uni-input" focus placeholder="请输入账号" v-model:value="user.account" />
            </view>
			<view class="uni-form-item uni-column">
			    <view class="title">密码:</view>
			    <input type="password" class="uni-input"  placeholder="请输入密码" v-model:value="user.password" />
			</view>
			<view class="uni-form-item footer">
				<button type="primary" @tap="submitLogin">登陆</button>
				<button type="default" @tap="register">注册</button>
			</view>
		</view>
	</view>
</template>

<script>
	import config from '../../config/config.js';
	
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
				if(!this.user.account){
					uni.showToast({
						title: "请输入账号",
						icon: 'none',
					});
				}
				else if(!this.user.password){
					uni.showToast({
						title: "请输入密码",
						icon: 'none',
					});
				}else {
					uni.request({
						url: config.baseUrl + 'api/app/user/appLogin', 
						method: 'POST',					
						data: params,
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: function(res){
							console.log(res);
							var result = res.data;
							if(result.status == "2000000"){
								uni.setStorageSync('account', result.data.account,);
								uni.setStorageSync('nickname', result.data.nickname,);
								uni.setStorageSync('userId', result.data.id,);
								uni.switchTab({
									url: '/pages/index/index'
								});
							}else{
								uni.showToast({
									title: "登录失败",
									icon: 'none',
								});
							}
						},
						fail: function() {
							uni.showToast({
								title: "登录失败",
								icon: 'none',
							});
						}
					})
				}
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
	.login_content{
		padding: 20px 15px;
	}
	.login_content .uni-form-item{
		line-height: 30px;;
		padding: 10px 0;
	}
	.login_content .uni-input{
		margin-top: 10px;
	}
	.login_content .footer{
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}
	.login_content .footer button{
		display: inline-block;
		width: 100px;
	}
</style>
