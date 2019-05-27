 <template>
	<view class="register_content">
		<view class="uni-common-mt">
            <view class="uni-form-item uni-column">
                <view class="title">账号:</view>
                <input class="uni-input" focus id="account" placeholder="请输入账号"  v-model:value="user.account" />
            </view>
			 <view class="uni-form-item uni-column">
                <view class="title">昵称:</view>
                <input class="uni-input" id="nickname" placeholder="请输入昵称"  v-model:value="user.nickname" />
            </view>
			<view class="uni-form-item uni-column">
			    <view class="title">密码:</view>
			    <input type="password" class="uni-input" id="password" placeholder="请输入密码"  v-model:value="user.password" />
			</view>
			<view class="uni-form-item uni-column">
			    <view class="title">再次输入密码:</view>
			    <input type="password"  class="uni-input" id="againPassword" placeholder="请再次输入密码" v-model:value="user.againPassword" />
			</view>
			<view class="uni-form-item footer">
				<button type="primary" @tap="submitRegister()">注册</button>
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
					nickname: "",
					password: "",
					againPassword: ""
				}
			}
		},
		methods: {
			submitRegister: function(){
				var params = {
					account: this.user.account,
					password: this.user.password,
					nickname: this.user.nickname
				}
				console.log(params);
				if(!this.user.account){
					uni.showToast({
						title: "请输入账号",
						icon: 'none',
					});
				}else if(!this.user.password){
					uni.showToast({
						title: "请输入密码",
						icon: 'none',
					});
				}else if(this.user.password != this.user.againPassword){
					uni.showToast({
						title: "两次输入的密码不一致",
						icon: 'none',
					});
				}else{
					uni.request({
						url: config.baseUrl + 'api/app/user/appRegister', 
						method: 'GET',					
						data: params,
						header: {
							'content-type': 'application/x-www-form-urlencoded'
						},
						success: function(res) {
							console.log(res);
							var result = res.data;
							if(result.status == "2000000"){
								uni.showToast({
									title: "注册成功",
									icon: "success",
								});
								uni.redirectTo({
									url: '/pages/login/login'
								});
							}else{
								uni.showToast({
									title: "注册失败",
									icon: 'none',
								});
							}
						},
						fail: function(err) {
							uni.showToast({
								title: "注册失败",
								icon: 'none',
							});
						}
					});
				}
			}
		}
	}
</script>

<style>
	.register_content{
		padding: 20px 15px;
	}
	.register_content .uni-form-item{
		line-height: 30px;;
		padding: 10px 0;
	}
	.register_content .uni-input{
		margin-top: 10px;
	}
	.register_content .footer{
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}
	.register_content .footer button{
		display: inline-block;
		width: 100px;
	}
</style>
