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
comment: true
footer: true
backtotop: true
title: Spring事务管理器Hooks
category: Spring
---

![](https://img.springlearn.cn/blog/learn_1647108921000.png)

**作者: 八阿哥的剑**

*博客: https://springlearn.cn*

::: tip 一日一句毒鸡汤
问世间钱为何物，只叫人生死相许。！😄
:::

写文章不容易，如果感觉还行，请点个关注，点关注不迷路。

## TransactionSynchronizationManager

`TransactionSynchronizationManager` 是 Spring 框架中的一个工具类，它主要用于管理事务同步的相关内容。在 Spring 中，事务管理是通过声明式事务或者编程式事务实现的，而 `TransactionSynchronizationManager` 则是 Spring 管理事务同步时的核心组件之一。

它的主要功能包括：

1. **绑定资源**：`TransactionSynchronizationManager` 允许将资源（如数据库连接、会话等）绑定到当前线程，使得在事务过程中，这些资源可以在不同的调用方之间共享。

2. **事务同步**：它管理事务的同步回调，在事务的不同阶段（如提交前、提交后、回滚时等）执行注册的回调操作。这使得你可以在事务的不同状态时执行一些自定义的操作。

3. **事务状态管理**：可以检查当前线程是否有绑定的事务，或者当前事务是否只读，事务的隔离级别等。

4. **事务挂起和恢复**：当嵌套事务或传播行为为“暂停当前事务”时，它可以挂起当前事务的资源并在需要时恢复它们。

常用的方法包括：
- `isSynchronizationActive()`：检查当前线程是否有活动的事务同步。
- `registerSynchronization(TransactionSynchronization synchronization)`：在当前事务上注册同步回调。
- `getResource(Object key)`：从当前线程获取与指定 key 绑定的资源。
- `bindResource(Object key, Object value)`：绑定资源到当前线程。
- `unbindResource(Object key)`：解除资源的绑定。

这在基于 Spring 的事务管理中非常关键，因为 Spring 通过这些机制实现了高度的事务管理抽象，使开发者能更简单地处理事务。

## 使用场景

### 事务提交后hooks

- afterCommit()
  - 此方法会在事务成功提交之后调用，适合进行一些依赖于事务成功的后续操作。比如在事务成功提交后，发送确认消息或者邮件通知。
  - 注意:
    - 如果方法中抛出 RuntimeException，异常会被传播给调用者（注意，不要在这里抛出 TransactionException 的子类）。
    - 事务已经提交，但事务资源可能仍然活跃且可访问。这意味着此时执行的数据访问操作仍然会参与原始事务。
```java
    /**
     * 事务代码块,代码块里面的操作会放在一个单独的事务中
     */
    @FunctionalInterface
    public interface TransactionCodeBlock {

        /**
         * 事务动作
         */
        void transactionAction();
    }
    
   public static void afterCommit(TransactionCodeBlock codeBlock) {
        TransactionSynchronizationManager.registerSynchronization(new TransactionSynchronization() {
            @Override
            public void afterCommit() {
                codeBlock.transactionAction();
            }
        });
    }
```

- afterCompletion(int status)
  - 此方法在事务完成后调用，无论事务是提交还是回滚。通常用于清理资源，例如关闭连接或释放锁等操作。
  - 注意同上
