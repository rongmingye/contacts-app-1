(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"1f86":function(n,t,e){},"65c4":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=a(e("e894"));function a(n){return n&&n.__esModule?n:{default:n}}var i={data:function(){return{list:[],userId:n.getStorageSync("userId")}},onReady:function(){n.getStorage({key:"account",success:function(n){},fail:function(){n.redirectTo({url:"/pages/login/login"})}})},onShow:function(){n.setNavigationBarTitle({title:"通讯录"})},methods:{getContacts:function(){var t=this;plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE,function(e){n.showToast({title:"获取通讯录对象成功",duration:2e3}),console.log("获取通讯录对象成功"," at pages/index/index.vue:53"),e.find(["displayName","phoneNumbers"],function(e){n.showToast({title:"获取联系人成功",duration:2e3}),console.log("获取联系人成功"," at pages/index/index.vue:61"),e=e.filter(function(n){return n.displayName&&n.phoneNumbers.length>0}),t.list=e},function(){n.showToast({title:"获取联系人失败",duration:2e3,icon:"none"})},{multiple:!0})},function(t){n.showToast({title:"获取通讯录对象失败:"+t.message,duration:2e3,icon:"none"})})},uploadContacts:function(){var t=[];this.list.forEach(function(n){if(n.displayName&&""!=n.displayName&&"undefined"!=n.displayName&&null!=n.displayName&&n.phoneNumbers.length>0){var e={};e.name=n.displayName;var o="";n.phoneNumbers.forEach(function(n){o+=" "+n.value}),e.phone=o.trim(),t.push(e)}});var e={userId:this.userId,upload:t};console.log(e," at pages/index/index.vue:100"),n.request({url:o.default.baseUrl+"api/app/user/appUpload",method:"POST",data:e,header:{"content-type":"application/json"},success:function(t){console.log(t," at pages/index/index.vue:109");var e=t.data;"2000000"==e.status?n.showToast({title:"同步成功",duration:2e3}):n.showToast({title:"同步失败",icon:"none"})},fail:function(t){n.showToast({title:"同步失败",icon:"none"})}})}}};t.default=i}).call(this,e("6e42")["default"])},"65cc":function(n,t,e){"use strict";e.r(t);var o=e("65c4"),a=e.n(o);for(var i in o)"default"!==i&&function(n){e.d(t,n,function(){return o[n]})}(i);t["default"]=a.a},b127:function(n,t,e){"use strict";e.r(t);var o=e("f38c"),a=e("65cc");for(var i in a)"default"!==i&&function(n){e.d(t,n,function(){return a[n]})}(i);e("c0d5");var u=e("2877"),s=Object(u["a"])(a["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},c0d5:function(n,t,e){"use strict";var o=e("1f86"),a=e.n(o);a.a},f38c:function(n,t,e){"use strict";var o=function(){var n=this,t=n.$createElement;n._self._c},a=[];e.d(t,"a",function(){return o}),e.d(t,"b",function(){return a})}},[["7f9a","common/runtime","common/vendor"]]]);