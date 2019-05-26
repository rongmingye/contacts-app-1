<template>
	<view>
		<button type="primary" @tap="getContacts">获取联系人</button>
		<button type="primary" @tap="uploadContacts">上传联系人</button>
		<view v-for="(item, index) in list" :key="index" class="uni-flex uni-row">
		    <view>{{item.displayName}}</view>
			<view  v-for="(subitem, idx) in item.phoneNumbers" :key="idx">
				<view>{{subitem.value}}</view>
			</view>
		</view>
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
					console.log(addressbook)
					// 查找联系人
					addressbook.find(["displayName","phoneNumbers"], function(contacts){
						uni.showToast({
						    title: '获取联系人成功',
						    duration: 2000
						})
						console.log('获取联系人成功')
						console.log(JSON.stringify(contacts))
						that.list = contacts
					}, function () {
						uni.showToast({
						    title: '获取联系人失败',
						    duration: 2000
						})
					},{multiple:true});
				}, function ( e ) {
					uni.showToast({
					    title: '获取通讯录对象失败:' + e.message,
					    duration: 2000
					})
				});
			},
			uploadContacts: function(){
				var params = {
					contacts: this.list
				};
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
			}
		}
	}
</script>

<style>
	
</style>
