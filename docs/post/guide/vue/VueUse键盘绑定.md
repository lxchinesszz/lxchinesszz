---
title: VueUse键盘绑定
editLink: true
navbar: true
---


[键盘事件名](https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values)

- onKeyDown - 别名 onKeyStroke(key, handler, {eventName: 'keydown'})
- onKeyPressed - 别名onKeyStroke(key, handler, {eventName: 'keypress'})
- onKeyUp - 别名 onKeyStroke(key, handler, {eventName: 'keyup'})


```javascript
  // 绑定回车事件
  // https://developer.mozilla.org/en-US/docs/Web/API/UI_Events/Keyboard_event_key_values

  onKeyDown('Enter', (e) => {
    e.preventDefault();
    alert(messageContext.value);
  });
```
