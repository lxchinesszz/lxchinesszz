---
title: 阿里云的Servrless
editLink: true
navbar: true
category: '其他'
---


![](https://img-blog.csdnimg.cn/img_convert/20eccfd98397e54e824998a1772609a5.png)


五年博主教你,使用免费的技术方案，来搞事情。在正式开始之前先用阿里云的Servrless给你送你一碗[毒鸡汤](http://springboot.web-framework-xyu5.1273178173980522.cn-hangzhou.fc.devsapp.net/)感受下。

## 一、前言

传统模式如果个人up主想要搞事情, 就要有一台服务器, 为了省钱可能你还会自己搭建一个数据库。其次你的流量还是需要付费的,如果个人用用还好,但是如果要被人攻击了。那流量蹭蹭的涨, 个人是完全受不了的。这点我是比较有发言权的。因为小编我目前就有一台阿里云实例。目前部署了mysql使用宝塔来维护。每次发布自己上传jar包。下面这个截图就是我的服务, 至于地址嘛,我就不给你们看了。（我怕你们偷我的流量）,毕竟前有b站主播鱼皮,网站被攻击的先例,所以咱就低调点,自己用。

![](https://img-blog.csdnimg.cn/img_convert/7242100405d35291bebc5eb365d4b21a.png)


其次就算网站给你,你也用不了,因为网站需要暗号登陆。就像这样。

![](https://img.springlearn.cn/blog/0e287e247663afa7719c629c55c74a6e.png)

但是我还是准备放弃了, 为什么要放弃了, 因为我找到了更好的替代方案。

PS: 主要因为是免费的解决方案，本篇文章就会告诉大家这个解决方案是什么。

这里先说下我的需求,小编有一个备案过的域名,每年35元。基于这个域名我有下面这些使用需求。

1. 博客网站的图床(免费的对象存储)。 [图床软件竟然要收费，算了我自己写一个免费的](https://developer.aliyun.com/article/999997?spm=a2c6h.24874632.expert-profile.26.1d8053bdczgyVX)
   ![](https://img-blog.csdnimg.cn/img_convert/0927908907cad4bec82c24792ea610f9.png)

2. 极客导航网站,记录小编自己的常用的工具,功能全部是为自己定制的。
   ![](https://img-blog.csdnimg.cn/img_convert/08299f2d55596de907427b5bd478a89b.png)
3. 开源项目的[宣传网站](https://tomato.springlearn.cn)（PS: 使用开源项目免费获取idea的注册码）
   ![](https://img-blog.csdnimg.cn/img_convert/7deee002db55d1b5f84101fb3dbd9566.png)
   ![](https://img-blog.csdnimg.cn/img_convert/94133ef2d07fb5ab834c07a91ff731f2.png)

目前的解决方案是云服务器, 这个成本大概是每年300人民币。(阿里云活动时候购买,使用了3年,今年就过期了,虽然购买的费用,早就通过广告赚回来了,但是还是感觉太麻烦了,生怕别人攻击我。)

![](https://img-blog.csdnimg.cn/img_convert/93094062bdff254418f969102126cdcb.png)

所以我准备`跑路了`,消费不起了。
![](https://img-blog.csdnimg.cn/img_convert/0f4310517905f4bdb255d1eb5d733461.png)

我的备选方案就是阿里云函数 + railway免费db。为什么选择阿里云函数呢, 因为他支持springboot。因为我的技术栈就是 `Java`。而腾讯云目前还不支持(不知道现在支持不,有知道的可以下面评论告诉我), 因为我先用的腾讯云。后来才转到的阿里云。(绝对不是广告,我没有收到一分钱。全凭借良心。)


下面说下我为什么选择阿里云函数。


## 二、阿里云Serverless有什么优势呢?

跟直接购买一台服务器的最大优势就是: 按需消费,用多少就买单多少。不浪费硬件成本。因为你买了一台服务器,平时又不怎么用。但是还要为其付费, 这不是冤大头吗。

### 2.1 价格便宜

对于像小编这样,粉丝个位数的开发者, 写文章是完全没有收入的。但是你还想搞点事情。自己购买一个服务器是不划算的。虽然我已经买了三四年了。但是我还是要跑路。因为这个服务器就是我的成本(维护成本,安全成本)。今年就要到期了，到期后续费一年就要2400+, 完全是消费不起了。为什么选择阿里云函数呢，因为他有免费额度。如下图。如果你也有服务器,但是平时的使用场景并不是很多,也没有收益的话,强烈建议你也换云函数,避免浪费硬件,用多少就买单多少。按需消费。

![](https://img-blog.csdnimg.cn/img_convert/e5bb80056a4289cb48bddc4249c0d5a0.png)

### 2.2 维护成本

为了节约成本, 云数据库我是用不起的, 既然有服务器就自己安装一个数据库呗。但是有了服务器,你就要维护。纯命令式的维护,是比较烦人的。所以你还要搞一个宝塔。并且要绑定这么多的域名,而且免费的https每次只能申请一年的,每年都要重新去申请一次。好麻烦。

![](https://img-blog.csdnimg.cn/img_convert/aec8d2b18278e1e7e00df842cd385c1b.png)

### 2.3 安全成本

阿里云会经常提示你安全漏洞,就如下图。

![](https://img-blog.csdnimg.cn/img_convert/0082a5132baa23aa7e6ac54bd0a981e7.png)

遇到这种情况你是修还是不修呢? 不修又安全, 修就如下面。

![](https://img-blog.csdnimg.cn/img_convert/6609988f60653aa7110124c77eadf67a.png)

其次你还能收到攻击,疯狂调用你的接口,如果你的系统没有做好安全防护,拦截流量,就比较危险了。你可能会超额消费。



## 三、替换方案

### 3.1 数据库替换

这里提供几个免费的数据库平台,每个都有免费的额度。这里小编使用的 railway。

- [Railway](https://railway.app/) 【小编使用的这款】
- [Supabase](https://supabase.com/)

![](https://img-blog.csdnimg.cn/img_convert/3f3f582db6c482f13af9c4d2ce3196b0.png)

点击Connect可以获取链接,这里的链接我们后面在系统中会使用到。

![](https://img-blog.csdnimg.cn/img_convert/93b14f0e64fcd9c070f82ac2c37c4e31.png)

### 3.2 静态网页的替换方案

前面说了,小编还有一些开源项目的宣传网站和个人博客的需求。免费的替换方案如下。

- [vercel](https://vercel.com/dashboard) 【小编使用的这款】
- [netlify](https://www.netlify.com/)

[开源项目](https://tomoto.springlearn.cn)
![](https://img-blog.csdnimg.cn/img_convert/2441ed036b2e36e92cf64f7b101df504.png)

[个人博客](https://java.springlearn.cn)

![](https://img.springlearn.cn/blog/87dd9d24528dad494566b2fa10732036.png)

### 3.3 阿里云Serverless应用方案

当然就是使用阿里云Serverless应用的方案,将我原有的SpringBoot项目迁移过来。这里就以我的毒鸡汤,给大家演示下。如何部署阿里云函数。

![](https://img-blog.csdnimg.cn/img_convert/f8ddd64b865b464d2ae21d9c6499a175.png)

这个功能非常简单,后台技术栈是: `SpringBoot` + `Mybatis-plus`。



1. 步骤1: [登陆阿里云函数](https://fcnext.console.aliyun.com/applications)
2. 步骤2: 点击创建应用
   ![](https://img-blog.csdnimg.cn/img_convert/e4ce284061b026c09abb4f8853989b65.png)
3. 步骤3: 选择SpringBoot模版
   ![](https://img-blog.csdnimg.cn/img_convert/68dfb112b42db0a71ebae4e258e03112.png)
4. 步骤4: 获取github地址
   ![](https://img-blog.csdnimg.cn/img_convert/82b76fb8cf239e24f4ddb83f24a6f31f.png)
5. 步骤5: 就像SpringBoot服务一样写代码

下面就演示代码。
![](https://img-blog.csdnimg.cn/img_convert/d38eca9c01fd85adf8687b4574e48623.png)

因为我们要使用mybatis-plus所以首先我们引入依赖。

```java
		<dependency>
			<groupId>com.baomidou</groupId>
			<artifactId>mybatis-plus-boot-starter</artifactId>
			<version>3.4.2</version>
		</dependency>

		<dependency>
			<groupId>mysql</groupId>
			<artifactId>mysql-connector-java</artifactId>
			<scope>runtime</scope>
		</dependency>
```

添加配置数据库的配置文件,这里就用的railway上的链接信息。
![](https://img-blog.csdnimg.cn/img_convert/4d88eb2412d62aa3b201c4bd90a42438.png)

扫描Mybatis-plus的Mapper
![](https://img-blog.csdnimg.cn/img_convert/4a81aff539d87d839cd45885eb31b3f1.png)

```java
@Data
@TableName("soul")
public class SoulDO {

    private Long id;
 
    private String title;

    private String hits;
}    
@Mapper
public interface SoulMapper extends BaseMapper<SoulDO> {
}
```
这就是上面功能的代码,因为是演示,所以比较lower哈哈。html直接写代码里了。
![](https://img-blog.csdnimg.cn/img_convert/56f1705adfd49b9e37eb8bbe008164a6.png)

6. 步骤6: 直接提交代码到远程仓库
   提交完成后回到阿里云函数页面,会看到他会自动进行部署了。这里我的已经部署成功了。然后服务就可以访问了。
   ![](https://img-blog.csdnimg.cn/img_convert/f550ca5e9fcf6211cb994d78b3b9cdd8.png)



## 四、总结

以上就是小编我多年的总结的经验, 但是如果你是一个新手,还是建议你自己买一个阿里云服务来练练手。从中你能学会很多的东西。比如说如何部署ssh,如何服务端运维,如果管理自己的服务器等等。当你这些都学习的差不多了,如果还想折腾。就可以使用友好,划算的方案了。

这里顺便给大家分享免费领阿里云优惠券的链接, 如果是新手的话,可以领取大额的优惠券。花30元买一个月服务器学习学习,也可以凑单。几个人买一个服务器学习学习。

[阿里云新人优惠券](https://www.aliyun.com/minisite/goods?userCode=oab21mxz)

![](https://img-blog.csdnimg.cn/img_convert/b972e44b0ee1d596305d74cf359fd4f5.png)



好了,小编的分享到此结束。如果还有问题的话,可以联系我。

**寻找志同道合，喜欢折腾的朋友。👬🏻**

[MuseLink数字名片！👉](https://muselink.cc/springlearn)

- 寻找喜欢折腾，志同道合的 '新时代农民工' 寻找喜欢折腾，志同道合的 `'新时代农民工'` 朋友。
- 一起写java，一起写python，一起写js，一起写c++。 （ps: 一起逛海岛 🚗 ）

天下代码一大抄，抄来抄去有提高，看你会抄不会抄。如果不会没关系, 联系我。我们一起来探讨。

那么你准备好跟我一起 Coding 了吗?

![](https://img-blog.csdnimg.cn/img_convert/7aeb057d7d33fa39875e5c0b0b730029.png)



