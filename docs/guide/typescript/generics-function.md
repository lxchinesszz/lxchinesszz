---
title: 泛型函数
editLink: true
navbar: true
category: 'TypeScript'
---

## Capitalize 首字母大写

```ts  
type Original = 'hello world';
type Capitalized = Capitalize<Original>; // 'Hello world'

interface Example {
  capitalized: Capitalized;
}

const example: Example = {
  capitalized: 'Hello world',
};
```

## Uncapitalize 首字母小写

```ts 
type Original = 'hello world';
type Uncapitalized = Uncapitalize<Original>; // 'hello world'
interface Example {
  uncapitalized: Uncapitalized;
}

const example: Example = {
  uncapitalized: 'hello world',
};

```

## Uppercase 大写

```ts 
type Original = 'hello world';
type Uppercased = Uppercase<Original>;
interface Example {
  uppercased: Uppercased;
}

const example: Example = {
  uppercased: 'HELLO WORLD',
};

```

## Lowercased 小写

```ts
type Original = 'hello world';
type Lowercased = Lowercase<Original>; // 'hello world'

interface Example {
  lowercased: Lowercased;
}

const example: Example = {
  lowercased: 'hello world',
};
```
