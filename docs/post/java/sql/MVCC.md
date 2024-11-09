---
breadcrumb: false
navbar: true
sidebar: true
pageInfo: true
contributor: true
editLink: true
updateTime: true
prev: true
next: true
comment: false
footer: true
backtotop: true
title: MVCC机制
category: SQL优化
---

![](https://img.springlearn.cn/learn_c87a079fcea0d7893b03d4d57478bca7.png)

**作者**: 西魏陶渊明
**博客**: [https://blog.springlearn.cn/](https://blog.springlearn.cn/)

::: tip 西魏陶渊明
莫笑少年江湖梦，谁不少年梦江湖
:::

### 什么是MVCC?

Multi-Version Concurrency Control 多版本并发控制，MVCC 是一种并发控制的方法，一般在数据库管理系统中，实现对数据库的并发访问。

mvcc机制主要是用来解决并发情况下访问,维护数据的隔离性原则。

### 举例子

有两个字段

|字段|值|备注|
|:--|:--|:--|
|name|沙悟净|原始数据|
|name|孙悟空|事务1,已提交数据|
|name|唐三藏|事务2,未提交|
|name|猪八戒|事务3,未提交

因为我们知道事务具有隔离性，所以下面我们出几个问题。

1. 此时有一个事务4来了,看到的name是多少? 【孙悟空】
2. 事务1,以更新已提交,看到的name是多少?【孙悟空】
3. 事务2,以更新但是未提交,看到的name是多少? 【唐三藏】
4. 事务3,以更新但是未提交,看到的name是多少?【猪八戒】

看到了吗? 上面每个事务可能看到的东西不一样, 为啥不一样,因为隔离性。
那么我们思考一个问题,数据库表中,只会有一份数据,mysql是如何实现的隔离性,
让每个事务看到的东西还不一样呢? 如果让你来做,你怎么来实现呢?


### 实现原理

只使用数据库表中的数据是完全不行的,因为能落表中的数据,已经是最后一个事务提交后的数据。
要想实现多版本控制必须, 有一个地方能记录每个事务的改动。

那么在mysql中是怎么记录的呢? `undo log`

对于上面的例子,在 `undo log` 中是这样记录的。

|事务id|变动值|状态|
|:--|:--|:--|
|事务1|孙悟空|已提交|
|事务2|唐三藏|未提交|
|事务3|猪八戒|未提交|

- m_ids 当前所有活跃的事务,即未提交的事务
- min_trx_id 最早的事务
- max_trx_id 最大的事务,下一个要生成的事务id就是最大事务
- creator_trx_id 当前select创建的read view事务id

m_ids = [事务3,事务2]
min_trx_id = [事务2]
max_trx_id = [事务4]
creator_trx_id = 
trx_id = [事务4]


|事务id|变动值|状态|
|:--|:--|:--|
|事务2|唐三藏|未提交|
|事务3|猪八戒|未提交|

``` 
    for(row in rows){
        if(creator_trx_id === trx_id){
            // 自己的事务,那么能直接看到这一行数据。
            // 这个时候不用管自己的事务，是不是最后一个事务,因为隔离性我们只能读到在我们前已提交或者是自己的未提交的数据
         }else if('自己的事务id' < min_trx_id){
            // 以为当前事务创建前, 最早的事务已经更新了,只是未提交,但是根据mysql默认的隔离机制
            // 可重复读,以为他能读取
         }
    }
```



默认沙悟净,事务2,更新后不提交,相同事务下,事务2看到的就是自己修改后的唐三藏。
![](https://img.springlearn.cn/blog/66f3d6343322b2c6d571df02c10863f7.png)


此时在用线程3先查询下,已经只能看到已提交的,所以看的还是原来的沙悟净。
![](https://img.springlearn.cn/blog/d413b719a18f60288aeb2429751efb30.png)
