---
title: 泛型用法
editLink: true
navbar: true
category: 'TypeScript'
---

## Partial 泛型属性可选

```ts
class Person {
  name: string;
  age: number;
}
type PartialPerson = Partial<Person>; // 所有属性变为可选
```

## Required 泛型属性必选

```ts
class Person {
  name: string;
  age: number;
}
type RequiredPerson = Required<Person>; // 所有属性变为必选
```

## Readonly 泛型属性只读

```ts 
class Person {
  name: string;
  age: number;
}
type ReadonlyPerson = Readonly<Person>; // 所有属性变为只读
```
## Pick 泛型部分属性可选

```ts 
class Person {
  name: string;
  age: number;
}
type PickPerson = Pick<Person, 'name'>; // 选择部分属性
```


## Omit 删除部分泛型属性

```ts 
class Person {
  name: string;
  age: number;
}
type OmitPerson = Omit<Person, 'name'>; // 删除部分属性
```
