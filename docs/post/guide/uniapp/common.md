---
title: uni-app-api
editLink: true
navbar: true
category: uni-app
---

# uni-app

## 全局事件

https://zh.uniapp.dcloud.io/api/application.html


### uni.onAppShow

应用切前台事件的回调函数

### uni.onAppHide

应用切后台事件的回调函数。该事件与 App.onHide 的回调参数一致。





## 路由

https://zh.uniapp.dcloud.io/api/router.html#navigateto

### uni.navigateTo



定义：保留当前页面，跳转到应用内的某个页面，使用uni.navigateBack可以返回到原页面。

| 参数 | 类型 | 必填 | 默认值 | 说明 | 平台差异说明 |
| --- | --- | --- | --- | --- | --- |
| url | String | 是 | - | 需要跳转的应用内非 tabBar 的页面的路径 , 路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，path为下一个页面的路径，下一个页面的onLoad函数可得到传递的参数 | - |
| animationType | String | 否 | pop-in | 窗口显示的动画效果，详见：窗口动画 | App |
| animationDuration | Number | 否 | 300 | 窗口动画持续时间，单位为 ms | App |
| events | Object | 否 | - | 页面间通信接口，用于监听被打开页面发送到当前页面的数据。2.8.9+ 开始支持。 | - |
| success | Function | 否 | - | 接口调用成功的回调函数 | - |
| fail | Function | 否 | - | 接口调用失败的回调函数 | - |
| complete | Function | 否 | - | 接口调用结束的回调函数（调用成功、失败都会执行） | - |


```txt
// 1.不传参
uni.navigateTo({
    url:'./home/index'
});
// 2.传参字符串
uni.navigateTo({
    url:`./home/index?title=${title}`
});
// 3.传参对象
// 传入
let data = {
    title:'hello',
    id: 1
}
uni.navigateTo({
    url:`./home/index?data=`+ encodeURIComponent(JSON.stringify(data))
})

// 接受参数
onLoad: function (option) {
    const item = JSON.parse(decodeURIComponent(option.item));
}
```

### uni.redirectTo

定义：可以关闭当前界面并跳转到其他的非tabbar界面（可带参数）

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | String | 是 | 需要跳转的应用内非 tabBar 的页面的路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2' |
| success | Function | 否 | 接口调用成功的回调函数 |
| fail | Function | 否 | 接口调用失败的回调函数 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |


```javascript
uni.redirectTo({
    url: 'test?id=1'
});
```

### uni.reLaunch(OBJECT)

定义：关闭当前所有页面，打开到应用内的某个页面。

| 参数 | 类型 | 必填 | 说明 |
| --- | --- | --- | --- |
| url | String | 是 | 需要跳转的应用内页面路径，路径后可以带参数。参数与路径之间使用?分隔，参数键与参数值用=相连，不同参数用&分隔；如 'path?key=value&key2=value2'，如果跳转的页面路径是 tabBar 页面则不能带参数 |
| success | Function | 否 | 接口调用成功的回调函数 |
| fail | Function | 否 | 接口调用失败的回调函数 |
| complete | Function | 否 | 接口调用结束的回调函数（调用成功、失败都会执行） |


```txt
uni.reLaunch({
	url: 'test?id=1'
});
```

## 数据缓存


**注意:**

uni-app的Storage在不同端的实现不同：

- H5端为localStorage，浏览器限制5M大小，是缓存概念，可能会被清理
- App端为原生的plus.storage，无大小限制，不是缓存，是持久化的
- 各个小程序端为其自带的storage api，数据存储生命周期跟小程序本身一致，即除用户主动删除或超过一定时间被自动清理，否则数据都一直可用。
- 微信小程序单个 key 允许存储的最大数据长度为 1MB，所有数据存储上限为 10MB。
- 支付宝小程序单条数据转换成字符串后，字符串长度最大200*1024。同一个支付宝用户，同一个小程序缓存总上限为10MB。
- 百度小程序策略详见、抖音小程序策略详见
- 非App平台清空Storage会导致uni.getSystemInfo获取到的deviceId改变


### uni.setStorage

```javascript
uni.setStorage({
	key: 'storage_key',
	data: 'hello',
	success: function () {
		console.log('success');
	}
});
```

注意: uni-、uni_、dcloud-、dcloud_为前缀的key，为系统保留关键前缀。如uni_deviceId、uni_id_token，请开发者为key命名时避开这些前缀。

### uni.setStorageSync

将 data 存储在本地缓存中指定的 key 中，会覆盖掉原来该 key 对应的内容，这是一个同步接口。

```js
try {
	uni.setStorageSync('storage_key', 'hello');
} catch (e) {
	// error
}
```

### uni.getStorage

```js 
uni.getStorage({
	key: 'storage_key',
	success: function (res) {
		console.log(res.data);
	}
});
```

### uni.getStorageSync

```js
try {
	const value = uni.getStorageSync('storage_key');
	if (value) {
		console.log(value);
	}
} catch (e) {
	// error
}
```

### uni.removeStorage
从本地缓存中异步移除指定 key。

```js 
uni.removeStorage({
	key: 'storage_key',
	success: function (res) {
		console.log('success');
	}
});
```

### uni.removeStorageSync

从本地缓存中同步移除指定 key。

```js 
try {
	uni.removeStorageSync('storage_key');
} catch (e) {
	// error
}
```

### uni.clearStorage

- uni.clearStorage()
- uni.clearStorageSync();
