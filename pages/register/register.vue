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
			<view class="uni-form-item uni-column">
			    <view class="title">再次输入密码:</view>
			    <input class="uni-input"  placeholder="请输入账号" :value="user.password" />
			</view>
			<button type="primary" @tap="submitLogin">注册</button>
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
					
			}
		}
	}
</script>

<style>
</style>
