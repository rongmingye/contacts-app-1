<template>
	<view class="home_content">
		<view class="header">
			<button size="mini" class="get_btn" type="primary" @tap="getContacts">获取手机联系人</button>
			<button size="mini" class="upload_btn" type="primary" @tap="uploadContacts">同步到后台</button>
		</view>
		<view class="contact_list">
			<view v-for="(item, index) in list" :key="index" class="contact_item">
				<view class="name">{{item.displayName}}</view>
				<view class="phone" v-for="(subitem, idx) in item.phoneNumbers" :key="idx">{{subitem.value}}</view>
			</view>
		</view>
	</view>
</template>
 
<script>
	import config from '../../config/config.js';
	
	export default {
		data() {
			return {
				list: [],
				userId: uni.getStorageSync('userId')
			}
		},
		onReady: function(){
			let account = uni.getStorage({
				key: 'account',
				success: function(res){
					
				},
				fail: function() {
					uni.redirectTo({
						url: "/pages/login/login"
					})
				}
			})
		},
		onShow() {
			uni.setNavigationBarTitle({
				title: '通讯录'
			});
		},
		methods: {
			getContacts: function() {
				var that = this
				// 获取通讯录对象
				plus.contacts.getAddressBook( plus.contacts.ADDRESSBOOK_PHONE, function( addressbook ) {
					uni.showToast({
					    title: '获取通讯录对象成功',
					    duration: 2000
					})
					console.log('获取通讯录对象成功')
					// console.log(addressbook)
					// 查找联系人
					addressbook.find(["displayName","phoneNumbers"], function(contacts){
						uni.showToast({
						    title: '获取联系人成功',
						    duration: 2000
						})
						console.log('获取联系人成功')
						contacts = contacts.filter(item => {
							return item.displayName && item.phoneNumbers.length>0;
						})
						console.log(JSON.stringify(contacts))
						that.list = contacts;
					}, function () {
						uni.showToast({
						    title: '获取联系人失败',
						    duration: 2000,
							icon: 'none'
						})
					},{multiple:true});
				}, function ( e ) {
					uni.showToast({
					    title: '获取通讯录对象失败:' + e.message,
					    duration: 2000,
						icon: 'none'
					})
				});
			},
			uploadContacts: function(){
				var contacts = [];
				this.list.forEach((item)=>{
					if(item.displayName && item.displayName !='' && item.displayName != 'undefined' && item.displayName != null && item.phoneNumbers.length>0){
						var user = {};
						user.name = item.displayName;
						var numbers = '';
						item.phoneNumbers.forEach((num) => {
							numbers += ' ' + num.value
						})
						user.phone = numbers.trim();
						contacts.push(user);
					}
				})
				var params = {
					userId: this.userId,
					upload: contacts,
				};
				console.log(params);
				uni.request({
					url: config.baseUrl + 'api/app/user/appUpload', 
					method: 'POST',					
					data: params,
					header: {
						'content-type': 'application/json',
					},
					success: (res) => {
						console.log(res)
						var result = res.data;
						if(result.status == '2000000'){
							uni.showToast({
								title: '同步成功',
								duration: 2000
							})
						}else{
							uni.showToast({
								title: "同步失败",
								icon: 'none',
							});
						}
					},
					fail: function(err) {
						console.log(err);
						uni.showToast({
							title: "同步失败",
							icon: 'none',
						});
					}
				});
			}
		}
	}
</script>

<style>
	.home_content{
		padding: 20px 15px;
	}
	.home_content .header{
		display: flex;
		justify-content: space-between;
	}
	.home_content .header .get_btn{
		width: 140px;
	}
	.home_content .header .upload_btn{
		width: 100px;
	}
	.contact_list{
		margin-top: 15px;
	}
	.contact_list .contact_item{
		line-height: 40px;
	}
	.contact_list .name{
		display: inline-block;
	}
	.contact_list .phone{
		display: inline-block;
		margin-left: 10px;
	}
</style>
