---
title: 数据分析与清洗
editLink: true
navbar: true
---

# Pandas


**作者**: 西魏陶渊明
**博客**: [https://blog.springlearn.cn/](https://blog.springlearn.cn/)

>天下代码一大抄, 抄来抄去有提高, 看你会抄不会抄！

`本系列文章还是引用之前的理念，阅读文章，你不需要记，只要知道这一篇在讲什么即可，收藏起来，用的时候过来抄代码。`


前面第一篇文章算是入门, 蜻蜓点水比较简单，而这一篇是干货满满, 并配有数据案例。一定要看完, 因为这将是后面我们具体案例分析的基础。

这一篇文章中，我们将深入研究如何使用Pandas进行数据探索和清洗。您将学习如何处理缺失值、重复数据、异常值等常见的数据质量问题。通过使用Pandas的强大功能，如数据筛选、排序和重塑，您将能够有效地准备和整理数据，为后续的分析工作打下坚实的基础。


**系列文章:**
- 第一篇：Pandas入门指南：掌握Python数据处理利器
- 第二篇：数据探索与清洗：使用Pandas轻松预处理数据 【当前篇】
- 第三篇：深入了解Pandas数据结构：Series与DataFrame
- 第四篇：数据选择与过滤：Pandas中的强大索引技巧
- 第五篇：数据操作与转换：学会利用Pandas处理复杂任务

## 一、重点内容

### 1.1 数据查看

- 数据预览：使用head()函数预览数据的前几行，以了解数据的整体结构和格式。
- 基本统计量：使用describe()函数获取数据的基本统计信息，如均值、标准差、最小值、最大值等，帮助了解数据的分布和范围。
- 唯一值与计数：使用unique()和value_counts()函数获取列中的唯一值和各个值的计数，以了解数据的分类和频率分布。
- 缺失值检测：使用isnull()函数检测数据中的缺失值，并通过sum()函数统计每列的缺失值数量，帮助了解数据的完整性。

### 1.2 数据清洗

- 处理缺失值：使用dropna()函数删除包含缺失值的行或列，或者使用fillna()函数填充缺失值，选择适当的方法取决于具体的数据情况。
- 处理重复值：使用duplicated()函数检测重复值，并使用drop_duplicates()函数删除重复值，确保数据的唯一性。
- 异常值处理：通过使用可视化工具和基本统计分析来识别和处理异常值，可以使用过滤、替换或删除等方法来应对异常值。
- 数据类型转换：使用astype()函数将列的数据类型转换为正确的类型，确保数据的一致性和准确性。
- 数据格式化与规范化：对于字符串类型的数据，可以使用字符串处理函数（如str.lower()、str.upper()、str.strip()等）对数据进行格式化和规范化。


### 1.3 数据预处理

- 特征选择与删除：根据分析目标和特征的相关性，选择相关特征并删除不相关或冗余的特征，以提高后续分析的效果。
- 数据转换与衍生：使用apply()函数或自定义函数对数据进行转换和衍生，如特征缩放、数值转换、日期提取等，以适应不同的分析需求。
- 数据合并与拆分：通过使用merge()函数或concat()函数，可以将多个数据集合并成一个，或者将一个数据集拆分成多个，以满足数据分析的需要。
- 数据重塑与透视：使用pivot()函数或melt()函数，可以对数据进行重塑和透视，以更好地理解和分析数据的关系和趋势。


## 二、数据查看

当我们在接触到一份二维表格数据, 我们会先用Excel来查看数据的大概类型, 只有清楚了表格的内容信息,才知道如何来处理
这份数据。为了让大家快速的学习，我这里也列一个表格数据。然后我们针对这个数据进行分析。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/296ebcc43f628ac72cd238399e42c724.png)
首先我们读取数据。

```python
import pandas as pd
import numpy as np

df = pd.read_excel('./销售金额.xlsx')
```

### 2.1 数据预览
这个表格有多少行，多少列，每一列的类型是什么?

#### 2.1.1 查看行数列数

```python
# 12 2
# 12行2列
print(df.shape)
```

#### 2.1.2 查看头尾数据
```python
#         日期   销售金额
# 0  2023-01  100.0
print(df.head(1))

#          日期   销售金额
# 11  2023-12  534.0
print(df.tail(1))
```

#### 2.1.3 随机抽查
- axios = 0 查看行数
- axios = 1 查看列数
```python
# 随机查看2行
#          日期   销售金额
# 11  2023-12  534.0
# 1   2023-02   80.0
print(df.sample(2, axis=0))
```

#### 2.1.4 查看数据类型

查看每一列的数据类型，也可以查看指定列的类型。

```python
# 日期       object
# 销售金额    float64
# dtype: object
print(df.dtypes)

# float64
print(df['销售金额'].dtypes)
```

#### 2.1.4 查看所有信息

前面如果感觉麻烦，我们可以直接使用info方法。
`info()`函数提供了更详细的数据信息，包括每列的名称、非空值数量和数据类型。
它还可以显示数据集的内存占用情况和总体摘要。

从下面内容看,日期列都有值。no-null = 12 说明都有值，而销售金额 no-null = 11 说明有一列没有值。
`memory usage: 320.0+ bytes` 是占用的内存大小,可以看到只有320+ 字节。

```python
# <class 'pandas.core.frame.DataFrame'>
# RangeIndex: 12 entries, 0 to 11
# Data columns (total 2 columns):
#  #   Column  Non-Null Count  Dtype  
# ---  ------  --------------  -----  
#  0   日期      12 non-null     object 
#  1   销售金额    11 non-null     float64
# dtypes: float64(1), object(1)
# memory usage: 320.0+ bytes
# None
print(df.info())
```

### 2.2 基本统计量

#### 2.2.1 统计量函数
使用`describe()`函数获取数据的基本统计信息，如均值、标准差、最小值、最大值等，帮助了解数据的分布和范围。


```
# count     11.000000  非缺失值有11个
# mean     106.090909  平均值
# std      145.143002  标准差
# min       22.000000  最小金额
# 25%       47.500000  统计学中的四分位数
# 50%       60.000000  统计学中的四分位数
# 75%       90.000000  统计学中的四分位数
# max      534.000000  最大金额
print(df['销售金额'].describe())
```

这里面比较难理解的就是四分位数，这个四分位数主要是让我们了解数据的分布和范围。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/eba1d721ea684af63ce77c1f1bcf773c.png)

**举例**

我们将销售金额从小到大排序，分别找25% 50% 75%位置的值。

[ 22.  23.  45.  50.  55.  60.  75.  80. 100. 123. 534.]

- 25% 47.5
- 50% 60 (因为正好11个值，所以中间就是第六个值，所以是60)
- 75% 90

#### 2.2.2 其他统计量函数

效果等同于前面 `describe` 的效果。

| 序号 | 函数 | 说明 |
| :--- | :--- | :--- |
| 1 | mean() | 计算每列数据的平均值。 |
| 2 | median() | 计算每列数据的中位数。 |
| 3 | sum() | 计算每列数据的总和。 |
| 4 | min() | 计算每列数据的最小值。 |
| 5 | max() | 计算每列数据的最大值。 |
| 6 | std() | 计算每列数据的标准差。 |
| 7 | var() | 计算每列数据的方差。 |
| 8 | count() | 计算每列数据的非缺失值数量。 |
| 9 | quantile() | 计算每列数据的指定分位数。 |
| 10 | corr() | 计算每列数据之间的相关系数。 |

```python
print(df['销售金额'].count())
print(df['销售金额'].mean())
print(df['销售金额'].std())
print(df['销售金额'].min())
print(df['销售金额'].max())
print(df['销售金额'].quantile(0.25))
print(df['销售金额'].quantile(0.5))
print(df['销售金额'].quantile(0.75))
print(df['销售金额'].corr(df['销售金额'], method='spearman'))
```

这里面比较难得是 `corr` 函数，这个统计函数。用于反应两组数据是否具有正相关性。
下面举一个生活中的例子。

```
月份  销量（单位）  广告费用（美元）
1    100        500
2    120        600
3    110        550
4    130        700
5    140        800
6    150        900
```

使用斯皮尔曼相关系数，您可以计算销售量和广告费用之间的关系强度。假设您计算出的斯皮尔曼相关系数为0.85。这意味着销售量和广告费用之间存在着较强的正相关关系。

#### 2.2.4 相关性分析

- spearman 斯皮尔曼相关系数（Spearman correlation coefficient）
- kendall 肯德尔相关系数（Kendall correlation coefficient）

```python

data = {
    '月份': [1, 2, 3, 4, 5, 6],
    '销量金额': [100, 120, 110, 130, 140, 150],
    '广告费用': [500, 600, 550, 700, 800, 900]
}

df = pd.DataFrame(data)

# 0.9999999999999999 说明广告费用越高,销售金额越高
print(df['广告费用'].corr(df['销量金额'],method='kendall'))


data2 = {
    '月份': [1, 2, 3, 4, 5, 6],
    '销量金额': [100, 90, 80, 70, 60, 50],
    '广告费用': [500, 600, 550, 700, 800, 900]
}

df = pd.DataFrame(data2)

# -0.9538209664765318 说明广告费用越高,销售金额越低
# 默认 spearman
print(df['广告费用'].corr(df['销量金额']))
```

### 2.3 唯一值与计数

为了方便我们演示，我们换一个表格数据。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/673abc5e9591ad2cf0a872207c7fae8d.png)
#### 2.3.1 唯一值

统计参数统计的角色

```python
# ['刘备' '关羽' '张飞' '赵云' '黄忠' '马超' '曹操' '孙权' '周瑜']
print(df['角色'].unique())
```
#### 2.3.2 统计颜色出现的次数

- 可选参数

| 参数 | 说明 |
| :--- | :--- |
| normalize | 如果设置为True，则返回的计数将以相对频率的形式显示，而不是绝对计数。默认值为False。 |
| sort | 如果设置为True，则按计数值的降序对结果进行排序。默认值为True。 |
| ascending | 如果设置为True，则按计数值的升序对结果进行排序。默认值为False。 |
| bins | 用于连续型数据的分箱数。可以传递一个整数值，将数据分成指定数量的等宽区间。 |
| dropna | 如果设置为False，则不会忽略缺失值（NaN）并将其视为一个独立的类别。默认值为True，即忽略缺失值。 |

```python
# 统计颜色出现的次数
# 红色    4
# 绿色    2
# 蓝色    2
# 黄色    1
print(df['颜色'].value_counts())

# 升序
# 颜色
# 黄色    1
# 绿色    2
# 蓝色    2
# 红色    4
# Name: count, dtype: int64
print(df['颜色'].value_counts(ascending=True))

# 黄色    0.111111
# 绿色    0.222222
# 蓝色    0.222222
# 红色    0.444444
# Name: proportion, dtype: float64
print(df['颜色'].value_counts(ascending=True,normalize=True))
```
### 2.4 缺失值检测

这个问题可能是我们遇到最多的情况情况了。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/8c7007fdac4c75ce45b42f992fcebf31.png)
看下面这个表,我们用pandas读取数据后发现, 销售金额中既有缺省值,也有空字符。

```python
#          日期 销售金额
# 0   2023-01  100
# 1   2023-02   80
# 2   2023-03   50
# 3   2023-04   60
# 4   2023-05  NaN
# 5   2023-06   23
# 6   2023-07   45
# 7   2023-08   55
# 8   2023-09     
# 9   2023-10   75
# 10  2023-11  123
# 11  2023-12  534
print(df.head(12))
```

#### 2.4.1 检查函数

总共有12列, 使用前面的 info就能发现有值的只有11列? 那么不对啊,上面命名发现 5月是NaN, 9月也没有啊? 为什么是
11列呢，其实9月不是没有值, 而是有值,只不过是个空值。

这种情况我们在Excel中可以直接找到这行给删除里面的空内容。但是如果数据量很多呢, 怎么处理呢?

| 序号 | 函数 | 说明 |
| :--- | :--- | :--- |
| 1 | isnull() | 返回一个布尔型的DataFrame，标记了数据中的缺失值位置。对于缺失值位置，返回True；对于非缺失值位置，返回False。 |
| 2 | notnull() | 返回一个布尔型的DataFrame，标记了数据中的非缺失值位置。对于非缺失值位置，返回True；对于缺失值位置，返回False。 |
| 3 | isna() | isnull()的别名函数，执行相同的操作。 |
| 4 | notna() | notnull()的别名函数，执行相同的操作。 |
| 5 | any() | 检测DataFrame或Series对象中是否存在任何缺失值。返回一个布尔值，如果存在缺失值，则为True；否则为False。 |
| 6 | all() | 检测DataFrame或Series对象中的所有值是否都是缺失值。返回一个布尔值，如果所有值都是缺失值，则为True；否则为False。 |


```python
# isna(): isnull()的别名函数，执行相同的操作
#         日期 销售金额
# 4  2023-05  NaN
#         日期 销售金额
# 4  2023-05  NaN
print(df[df['销售金额'].isna()])
print(df[df['销售金额'].isnull()])

# 有一个满足是NaN, 5月是NaN 就返回 True
print(df['销售金额'].isna().any())
# 全部满足是NaN,因为只有5月是NaN,所以就返回 False
print(df['销售金额'].isna().all())

# 当我敲一个空格,发现可以找到
#         日期 销售金额
# 8  2023-09
print(df[df['销售金额']==' '])

# 当我敲一个tab键发现就找不到了
print(df[df['销售金额']=='  '])
```

#### 2.4.2 空字符检测与处理

通过前面的检查,会发现NaN的缺省值,非常好处理。但是对于那些空字符, 因为我们并不知道是几个空字符。
可能是一个空格，可能是二个空格，也可能是一个tab键，更有甚者是一个换行键。那么对于这种数据我们怎么来处理呢?

1. 一个空格 或 多个空格
2. 一个tab或者多个tab
3. 一个换行或者多个换行
4. 前面的混合出现,有空格有换行

`我们的思路就是将上面的情况,全转换成空字符,然后再将空字符转换成NaN,然后就能使用前面2.4.1中的方法了`

```python
# 空格替换前 Empty DataFrame (因为不知道有几个空格,所以这样找不到数据)
print('空格替换前', df[df['销售金额'] == ''])

# 不管有多个空字符都换成空字符
df['销售金额'] = df['销售金额'].replace(' ', '')

# 空格替换后    (因为空格都转换成空字符,所以这里就能找到了)     
# 日期 销售金额
# 8  2023-09     
print('空格替换后', df[df['销售金额'] == ''])
```

针对于上面可能出现的所有情况, 有没有万能的办法呢? 当然有tab键其实就是 `\t` 换行就是 `\n`。我们可以通过正则匹配的形式进行移除。

我们使用了str.replace()方法，并传递了匹配模式`r'\s'`。该模式表示匹配任何空字符（包括空格、换行符和制表符）。
通过将匹配模式替换为空字符串''，我们将匹配到的空字符、换行符和制表符移除。

```python
data = {'Text': ['  Hello  ', ' \nWorld\n', '\tWelcome']}
df = pd.DataFrame(data)

#          Text
# 0     Hello  
# 1   \nWorld\n
# 2   \tWelcome
print(df)
# 移除 Text 列中的空字符、换行符和制表符

df['Text'] = df['Text'].str.replace(r'\s', '', regex=True)

#       Text
# 0    Hello
# 1    World
# 2  Welcome
print(df)
```

然后我们在将空字符换成缺省值

```python
data = {'Text': ['  \t\n', ' \nWorld\n', '\tWelcome']}

df = pd.DataFrame(data)
#          Text
# 0        \t\n
# 1   \nWorld\n
# 2   \tWelcome
print(df)

# 移除多余的符号
df['Text'] = df['Text'].replace(r'\s', '', regex=True)

# 然后将空字符换成NaN
df['Text'] = df['Text'].replace('', np.NAN)

#       Text
# 0      NaN
# 1    World
# 2  Welcome
print(df)
```
到这里我们就可以将空格等情况,全部统一处理成 `NaN` 了。

然后pandas里面还有一个统一处理NaN的方法,比如将所有的NaN,都换成指定的值。

```python

# 不管有多个空字符都换成空字符
df['销售金额'] = df['销售金额'].replace(r'\s', '', regex=True)
# 将空字符都转换成NaN
df['销售金额'] = df['销售金额'].replace('', np.NAN)

#          日期   销售金额
# 0   2023-01  100.0
# 1   2023-02   80.0
# 2   2023-03   50.0
# 3   2023-04   60.0
# 4   2023-05    NaN
# 5   2023-06   23.0
# 6   2023-07   45.0
# 7   2023-08   55.0
# 8   2023-09    NaN
# 9   2023-10   75.0
# 10  2023-11  123.0
# 11  2023-12  534.0
print(df)
```
## 三、数据清洗
### 3.1  处理缺失值
#### 3.1.1 填充指定值

前面我们已经将销售表格中的空字符都处理成了NaN,这里讲如果处理缺失值。

`fillna()` 是Pandas中的一个函数，用于填充（替换）数据中的缺失值。该函数可以用于Series或DataFrame对象。以下是fillna()函数的使用方法和示例：将我们的销售表格缺省值填充为0.

```python
# 将所有列的的NaN都转换成0
df.fillna(0, inplace=True)

# 填充指定列
df['销售金额'].fillna(0, inplace=True)

#          日期   销售金额
# 0   2023-01  100.0
# 1   2023-02   80.0
# 2   2023-03   50.0
# 3   2023-04   60.0
# 4   2023-05    0.0
# 5   2023-06   23.0
# 6   2023-07   45.0
# 7   2023-08   55.0
# 8   2023-09    0.0
# 9   2023-10   75.0
# 10  2023-11  123.0
# 11  2023-12  534.0
print(df)
```

#### 3.1.2 填充前一个的值

看到索引1是None,填充了他的前一个值也是1
索引值3, 也填充了他的前一个值3

```python
import pandas as pd

s = pd.Series([1, None, 3, None, 5])
filled_s = s.fillna(method='ffill')

# 0    1.0
# 1    1.0
# 2    3.0
# 3    3.0
# 4    5.0
# dtype: float64
print(filled_s)
```

#### 3.1.3 填充后一个的值

可以看到他是向后填充的，如果最后一个值也是NaN的话,因为没有后面的值,所以不填充。

```python
s = pd.Series([1, None, 3, None, 5, None])
filled_s = s.fillna(method='bfill')

# 0    1.0
# 1    3.0
# 2    3.0
# 3    5.0
# 4    5.0
# 5    NaN
print(filled_s)
```

#### 3.1.4 删除缺省值

`dropna()` 是 Pandas 中用于删除缺失值的函数。它可以用于 Series 或 DataFrame 对象，并提供了一些参数来控制删除缺失值的方式。前面我们讲缺省值转换成了其他的值。这个函数是将缺失值直接删除。


`thresh参数用法是：保留至少有n个非NaN数据的行/列`

索引0 有2个非NaN的值,所以保留了
索引1 只有1个非NaN的值,所以删除了
索引2 没有非NaN的值,所以删除了

- 如果不指定thresh, 则有NaN就删除。只有当这一行或这一列全部都是非NaN才会保留。

```python
df = pd.DataFrame({'A': [1, None, None], 'B': [6, 7, None]})

#      A    B
# 0  1.0  6.0
# 1  NaN  7.0
# 2  NaN  NaN
print(df)

# 保留至少有2个非NaN的
#      A    B
# 0  1.0  6.0
print(df.dropna(thresh=2))
```


### 3.2 处理重复值

#### 3.2.1 查看重复值

duplicated() 是 Pandas 中用于检测重复值的函数。它可以用于 Series 或 DataFrame 对象，并返回一个布尔类型的 Series，指示每个元素是否为重复值。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/aa4645702a9807dc2924fcb8fe020840.png)


```python

df = pd.DataFrame({'A': [1, 2, 3, 2, 8, 8], 'B': [1, 6, 7, 6, 8, 8]})

#    A  B
# 0  1  1
# 1  2  6
# 2  3  7
# 3  2  6
# 4  8  8
# 5  8  8
print(df)

# 0    False
# 1    False
# 2    False
# 3     True
# 4    False
# 5     True
# dtype: bool
print(df.duplicated())

# 0    False
# 1    False
# 2    False
# 3     True
# 4    False
# 5     True
print(df['A'].duplicated())

```

#### 3.2.2 删除重复值

`drop_duplicates()` 是 Pandas 中用于删除重复值的函数。

| 参数名称       | 描述                                                         |
| :-------------- | :------------------------------------------------------------ |
| `subset`       | 指定在哪些列中检查重复值。可以是单个列名的字符串或包含多个列名的列表 |
| `keep`         | 指定保留哪个重复值。可选值包括 `'first'`、`'last'`、`False`    |
| `inplace`      | 指定是否在原始对象上进行就地删除。默认为 `False`               |
| `ignore_index` | 重置索引，使删除重复值后的 DataFrame 的索引连续递增           |
| `subset_keep`  | 为每个指定的列提供一个保留方式的字典。可以用于为不同的列指定不同的保留方式 |

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/47ae539a5b248263b1496892b65f249f.png)
```python

df = pd.DataFrame({'A': [1, 2, 3, 2, 8, 8], 'B': [1, 6, 7, 6, 8, 8]})

#    A  B
# 0  1  1
# 1  2  6
# 2  3  7
# 3  2  6
# 4  8  8
# 5  8  8
print(df)

# ------------------
#    A  B
# 0  1  1
# 1  2  6
# 2  3  7
# 4  8  8
print(df.drop_duplicates(subset=['A']))

# ------------------
#    A  B
# 0  1  1
# 1  2  6
# 2  3  7
# 4  8  8
print(df.drop_duplicates(subset=['A', 'B']))
```

上面keep不填默认删除最后一个,下面我们指定保留最后一个。删除前面的重复。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/27f6008bd6ea3f266be8456fe3763232.png)
```python
df = pd.DataFrame({'A': [1, 2, 3, 2, 8, 8], 'B': [1, 6, 7, 6, 8, 8]})

#    A  B
# 0  1  1
# 1  2  6
# 2  3  7
# 3  2  6
# 4  8  8
# 5  8  8
print(df)

# ------------------
#    A  B
# 0  1  1
# 2  3  7
# 3  2  6
# 5  8  8
print(df.drop_duplicates(subset=['A'], keep='last'))


# ------------------
#    A  B
# 0  1  1
# 2  3  7
# 3  2  6
# 5  8  8
print(df.drop_duplicates(subset=['A', 'B'], keep='last'))
```
### 3.3 异常值处理

对于异常值的处理我们有以下三种常见的解决办法。

- 过滤：将异常值从数据中排除，不进行进一步分析。
- 替换：使用合适的方法（例如均值、中位数等）将异常值替换为其他值，使其更符合数据分布。
- 删除：完全删除包含异常值的行或列，如果异常值影响整体分析结果。

#### 3.3.1 过滤

过滤的前提是我们能先发现数据问题,如下面的例子。发现是NaN的直接过滤。

```python

data = {
    '角色': ['刘备', '关羽', '张飞', '赵云', '黄忠', '马超', '曹操', '孙权', '周瑜'],
    '颜色': ['红色', '绿色', '蓝色', '', '红色', np.NAN, '蓝色', '黄色', '红色']
}

df = pd.DataFrame(data)

#    角色   颜色
# 0  刘备   红色
# 1  关羽   绿色
# 2  张飞   蓝色
# 3  赵云     
# 4  黄忠   红色
# 5  马超  NaN
# 6  曹操   蓝色
# 7  孙权   黄色
# 8  周瑜   红色
print(df)

print('------------------')

# 找到空字符 或者 nan的 然后利用 ~取反,
new_df = df[~((df['颜色'] == '') | (df['颜色'].isna()))]

# ------------------
#    角色  颜色
# 0  刘备  红色
# 1  关羽  绿色
# 2  张飞  蓝色
# 4  黄忠  红色
# 6  曹操  蓝色
# 7  孙权  黄色
# 8  周瑜  红色
print(new_df)
```

#### 3.3.2 替换

- 找到要替换的数据规律: `((df['颜色'] == '') | (df['颜色'].isna()))`
- df.loc[条件,要替换的列] = 要替换的新值

```python
data = {
    '角色': ['刘备', '关羽', '张飞', '赵云', '黄忠', '马超', '曹操', '孙权', '周瑜'],
    '颜色': ['红色', '绿色', '蓝色', '', '红色', np.NAN, '蓝色', '黄色', '红色']
}

df = pd.DataFrame(data)

#    角色   颜色
# 0  刘备   红色
# 1  关羽   绿色
# 2  张飞   蓝色
# 3  赵云
# 4  黄忠   红色
# 5  马超  NaN
# 6  曹操   蓝色
# 7  孙权   黄色
# 8  周瑜   红色
print(df)

print('------------------')

# 找到空字符 或者 nan的 然后利用 ~取反,

df.loc[((df['颜色'] == '') | (df['颜色'].isna())), '颜色'] = '黑色'

# ------------------
#    角色  颜色
# 0  刘备  红色
# 1  关羽  绿色
# 2  张飞  蓝色
# 3  赵云  黑色
# 4  黄忠  红色
# 5  马超  黑色
# 6  曹操  蓝色
# 7  孙权  黄色
# 8  周瑜  红色
print(df)
```

#### 3.3.3 条件删除

第一种方法就是前面说的, 利用取反 ~ 就可以达到删除的效果。

- df[条件] 找到符合条件的行
- df.drop(df[条件].index, inplace=True)

```python
df.drop(df[((df['颜色'] == '') | (df['颜色'].isna()))].index, inplace=True)
```


### 3.4 数据类型转换

如下列子，B列的数值看起来是数字，但是实际上却是字符。
当对字符类型进行sum会发现结果等于字符串拼接 100100200。
如果我们要当做数组进行处理,要使用 `astype` 方法, 并传入指定的类型。

#### 3.4.1 基本类型转换

```python
df = pd.DataFrame({
    'A': ['2023-01', '2023-02', '2023-03'],
    'B': ['100', '100', '200']
})

#  #   Column  Non-Null Count  Dtype 
# ---  ------  --------------  ----- 
#  0   A       3 non-null      object
#  1   B       3 non-null      object
print(df.info())
# B 列相加 100100200
print(df['B'].sum())

# 修改B列的值,为数字类型
df['B'] = df['B'].astype(int)

# #   Column  Non-Null Count  Dtype 
# ---  ------  --------------  ----- 
#  0   A       3 non-null      object
#  1   B       3 non-null      int64 
print(df.info())

# B 列相加 100100200
print(df['B'].sum())
```

#### 3.4.2 日期类型转换

A列看起来是日期,我们同样进行日期转换。
通过 `pd.to_datetime` 按照日期格式进行转换。


| 日期格式类型      | 格式字符串               |
|:----------------- | :------------------------ |
| 年-月-日          | '%Y-%m-%d'               |
| 月/日/年          | '%m/%d/%Y'               |
| 日-月-年          | '%d-%m-%Y'               |
| 年/月/日 小时:分钟:秒 | '%Y/%m/%d %H:%M:%S'      |
| 年-月-日 小时:分钟:秒 | '%Y-%m-%d %H:%M:%S'      |
| 年-月-日 小时:分钟    | '%Y-%m-%d %H:%M'         |
| 月/日/年 小时:分钟 AM/PM | '%m/%d/%Y %I:%M %p'      |
| 月/日/年 小时:分钟:秒 AM/PM | '%m/%d/%Y %I:%M:%S %p' |

```python
df['A'] = pd.to_datetime(df['A'], format='%Y-%m')

#  #   Column  Non-Null Count  Dtype
# ---  ------  --------------  -----
#  0   A       3 non-null      datetime64[ns]
#  1   B       3 non-null      int64
print(df.info())

# 通过.dt获取日期
df['year'] = df['A'].dt.year
df['month'] = df['A'].dt.month
df['day'] = df['A'].dt.day
print(df)
```

当A类转换成日期类型后,我们就可以获取更多的时间信息。

| 属性                 | 描述                                 |
| :-------------------- | :------------------------------------ |
| `.dt.year`           | 年份                                 |
| `.dt.month`          | 月份，范围为 1 到 12                  |
| `.dt.day`            | 日期，范围为 1 到 31                  |
| `.dt.hour`           | 小时数，范围为 0 到 23                |
| `.dt.minute`         | 分钟数，范围为 0 到 59                |
| `.dt.second`         | 秒数，范围为 0 到 59                  |
| `.dt.microsecond`    | 微秒数，范围为 0 到 999999            |
| `.dt.weekday`        | 星期几的数值，范围为 0（周一）到 6（周日） |
| `.dt.day_name()`     | 星期几的名称                          |
| `.dt.quarter`        | 季度，范围为 1 到 4                   |
| `.dt.is_month_start` | 检查日期是否为月初                     |
| `.dt.is_month_end`   | 检查日期是否为月末                     |
| `.dt.is_quarter_start`| 检查日期是否为季度初                  |
| `.dt.is_quarter_end` | 检查日期是否为季度末                   |
| `.dt.is_year_start`  | 检查日期是否为年初                     |
| `.dt.is_year_end`    | 检查日期是否为年末                     |

### 3.5 数据格式化与规范化

对于字符串类型的数据，可以使用字符串处理函数（如str.lower()、str.upper()、str.strip()等）对数据进行格式化和规范化。

```python
import pandas as pd

# 创建示例数据
data = {
    'Name': ['  John Smith  ', 'Mary Johnson', '  David Brown  ']
}

df = pd.DataFrame(data)

# 转换为小写
df['Lowercase'] = df['Name'].str.lower()

# 转换为大写
df['Uppercase'] = df['Name'].str.upper()

# 去除首尾空格
df['Trimmed'] = df['Name'].str.strip()

#               Name        Lowercase        Uppercase       Trimmed
# 0     John Smith       john smith       JOHN SMITH      John Smith
# 1     Mary Johnson     mary johnson     MARY JOHNSON  Mary Johnson
# 2    David Brown      david brown      DAVID BROWN     David Brown
print(df)

```

## 四、数据预处理

### 4.1  特征选择与删除
#### 4.1.1 特征选择

什么是特征选择,比如一个Excel中有多列的数据, 但是我们只需要某些列。那么我们就可以选择指定的列进行使用。

- `df[['A','B']]` or `df['A']`
- `df.loc[1:3,'A']` loc可以选择具体的索引,比如就选择索引从1-3的

```python
# 创建示例数据
data = {
    '年龄': [25, 30, 35, 40],
    '性别': ['男', '女', '男', '女'],
    '收入': [50000, 60000, 70000, 80000],
    '购买历史': ['是', '否', '是', '否'],
    '目标': [1, 0, 1, 0]
}

df = pd.DataFrame(data)

# 特征选择与删除
selected_features = ['年龄', '收入', '购买历史']  # 选择与购买行为相关的特征
df_selected = df[selected_features]

#    年龄     收入 购买历史
# 0  25  50000    是
# 1  30  60000    否
# 2  35  70000    是
# 3  40  80000    否
print(df_selected)


#    年龄     收入 购买历史
# 1  30  60000    否
# 2  35  70000    是
# 3  40  80000    否
print(df.loc[1:3, selected_features])
```

### 4.2 数据转换与衍生

#### 4.2.1 衍生-增加列

这个例子,前面已经说过。就是日期的例子。参考: `3.4.2 日期类型转换`, 很方便的添加列。

```python
df['A'] = pd.to_datetime(df['A'], format='%Y-%m')

#  #   Column  Non-Null Count  Dtype
# ---  ------  --------------  -----
#  0   A       3 non-null      datetime64[ns]
#  1   B       3 non-null      int64
print(df.info())

# 通过.dt获取日期
df['year'] = df['A'].dt.year
df['month'] = df['A'].dt.month
df['day'] = df['A'].dt.day
print(df)
```

#### 4.2.2 衍生-增加行

`len()` 是查看行数, 因为len的返回值是从1开始的,所以每次正好是最后一行。利用这个特性
来新增一行。


```python
import pandas as pd

# 创建空的 DataFrame
df = pd.DataFrame(columns=['Name', 'Age', 'Gender'])

# 方法一: 通过索引的方式增加行，值按照顺序 姓名,爱好
df.loc[len(df)] = ['诸葛庐', '计谋']

# 方法二: 通过索引的方式增加行，值根据字典来指定
df.loc[len(df)] = {'爱好': '哭', '姓名': '刘备'}

# 打印结果
#     姓名   爱好
# 0   张飞   喝酒
# 1  朱元璋   你猜
# 2  周杰伦  喝奶茶
# 3  诸葛庐   计谋
# 4   刘备    哭
print(df)

# 老版本还可以使用 append 进行追加。新版这个方法已经废弃。官方建议使用 concat
# https://pandas.pydata.org/docs/whatsnew/v1.4.0.html?highlight=append
df3 = pd.concat([df, df], ignore_index=True)

#     姓名   爱好
# 0   张飞   喝酒
# 1  朱元璋   你猜
# 2  周杰伦  喝奶茶
# 3  诸葛庐   计谋
# 4   刘备    哭
# 5   张飞   喝酒
# 6  朱元璋   你猜
# 7  周杰伦  喝奶茶
# 8  诸葛庐   计谋
# 9   刘备    哭
print(df3)
```


注意: 老版本还可以使用 append 进行追加。新版这个方法已经废弃。官方建议使用 concat
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/a0e0af894632a7f94653caadfd5cf27e.png)

### 4.3 数据合并与拆分

#### 4.3.1 数据合并
假设我们有两个数据集，一个包含客户信息，另一个包含订单信息。我们希望将这两个数据集根据客户ID进行合并，以便分析客户的订单行为。

- 主要用到merge方法

以下是`merge()`方法中常用参数的补全，包括可选值和默认值：

| 参数       | 说明                                               | 可选值                            | 默认值  |
|:------------|:----------------------------------------------------|:----------------------------------|---------|
| `left`     | 左侧的DataFrame，要进行合并的左侧数据集。            | DataFrame                        |         |
| `right`    | 右侧的DataFrame，要进行合并的右侧数据集。            | DataFrame                        |         |
| `how`      | 合并方式，指定如何对齐和合并数据。                   | 'inner', 'outer', 'left', 'right' | 'inner' |
| `on`       | 列名或列名列表，用于指定进行合并的列。               | 列名或列名列表  ,如果要关联的名称两笔都一样,可以直接用on                  |         |
| `left_on`  | 左侧DataFrame中用于合并的列。                        | 列名或列名列表,如果要关联的名称不一样,可以使用这个。支持列表参数                    |         |
| `right_on` | 右侧DataFrame中用于合并的列。                        | 列名或列名列表,如果要关联的名称不一样,可以使用这个。支持列表参数                      |         |
| `suffixes` | 用于解决合并后列名冲突的后缀。                       | 元组或列表                       | ('_x', '_y') |

如果你看不懂 how 的参数，可以参考下图。
![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/7677bb5f2d606006af8b64ef3e0632d3.png)

```python

import pandas as pd

# 客户信息数据集
customer_data = {
    '客户ID': ['001', '002', '003'],
    '姓名': ['张三', '李四', '王五'],
    '年龄': [25, 30, 35]
}
df_customer = pd.DataFrame(customer_data)

# 订单信息数据集
order_data = {
    '客户ID': ['001', '002', '003'],
    '订单号': ['A001', 'A002', 'A003'],
    '金额': [100, 200, 150]
}
df_order = pd.DataFrame(order_data)

# 数据合并,如果学过数据库,就会发现其实join
df_merged = pd.merge(df_customer, df_order, on='客户ID')

# 打印合并结果
#   客户ID  姓名  年龄   订单号   金额
# 0  001   张三   25    A001  100
# 1  002   李四   30    A002  200
# 2  003   王五   35    A003  150
print(df_merged)

```
#### 4.3.2 数据拆分

可以参考 `4.1.1 特征选择`

- df[列名]
- loc[:,列]



### 4.4 数据重塑与透视
#### 4.4.1 数据重塑-宽数据转长数据

`melt()` 方法用于将宽格式的DataFrame转换为长格式，也称为"unpivot"操作。下面是melt()方法的参数及其说明：

| 参数       | 说明                                               |
|:------------|:----------------------------------------------------|
| `frame`    | 要进行转换的DataFrame。                            |
| `id_vars`  | 保持不变的列，即转换后的长格式中的标识符列。         |
| `value_vars` | 要转换的列，即转换后的长格式中的值列。              |
| `var_name` | 用于标识值列的名称列的名称。                        |
| `value_name` | 用于标识值的列的名称。                              |

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/fa1f26caf8a67ada0d576cf27a424102.png)
```python
import pandas as pd

# 销售数据集
sales_data = {
    '产品': ['A', 'B'],
    '销售额1月': [1000, 2000],
    '销售额2月': [1500, 1800],
    '销售额3月': [1200, 2300]
}
df_sales = pd.DataFrame(sales_data)

print(df_sales)

print('------------')
# 数据拆分
df_long = pd.melt(df_sales, id_vars=['产品'], var_name='月份', value_name='销售额')

# 打印拆分结果
print(df_long)

# 假如我不想要销售额3月的数据,还可以通过 `value_vars` 来执行。
df_long = pd.melt(df_wide, id_vars=['产品'],value_vars=['销售额1月', '销售额2月'],
                  var_name='月份', value_name='销售额')

# 打印转换结果
#   产品     月份   销售额
# 0  A  销售额1月  1000
# 1  B  销售额1月  2000
# 2  A  销售额2月  1500
# 3  B  销售额2月  1800
print(df_long)
```

#### 4.4.2 数据透视

数据透视是一种数据处理技术，用于将原始数据重新组织和汇总，以便更好地理解和分析数据的关系和趋势。透视表是数据透视的一种常见形式，它将数据按照指定的行和列进行分组，并对其中的数值进行聚合计算。
通过数据透视，您可以根据自己的需求和分析目标，对数据进行灵活的重塑和汇总，以便从不同的角度和维度观察和理解数据。

如下我们会用到下面这些函数。
- pivot
- pivot_table
- groupby

下面我们演示如下数据, 产品每个月的销售额。

```python
import pandas as pd

# 销售数据集
sales_data = {
    '产品': ['A', 'A', 'B', 'B', 'A', 'B'],
    '月份': ['一月', '二月', '一月', '二月', '三月', '三月'],
    '销售额': [1000, 1500, 2000, 1800, 1200, 2300]
}
df_sales = pd.DataFrame(sales_data)

#   产品  月份   销售额
# 0  A   一月   1000
# 1  A   二月   1500
# 2  B   一月   2000
# 3  B   二月   1800
# 4  A   三月   1200
# 5  B   三月   2300
print(df_sales)
```

我们想分析下,每个产品每月的销售额。这种情况我们的维度其实就是
- 维度: 产品 + 月份 指标: sum(销售额)

index + columns 都是维度，不同的是index放在列，columns 是行。

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/dc2dc299e564ce900a51d3e00df56a5e.png)


```python
# 月份    一月    三月    二月
# 产品
# A   1000  1200  1500
# B   2000  2300  1800
print(df_sales.pivot(index='产品', columns='月份', values='销售额'))
```

以上就是 pivot函数。还有一个pivot_table。

pivot_table()和pivot()都是Pandas中用于数据重塑和透视的函数，但它们之间存在一些区别。
pivot_table()函数是一个通用的透视表函数，可以处理具有重复索引值的数据，并允许使用聚合函数对重复值进行汇总计算。

注意: pivot 不能处理重复值, 及维度和指标如果是重复的则会报错。pivot_table则可以处理重复值，且可以对指标进行计算。

| 参数          | 说明                                                        |
|:---------------|:-------------------------------------------------------------|
| `data`        | 要进行透视表操作的数据集。                                   |
| `values`      | 用于聚合的列，即要进行透视和计算的值列。                     |
| `index`       | 用于分组的列或列列表，即透视表的行索引。                     |
| `columns`     | 用于分组的列或列列表，即透视表的列索引。                     |
| `aggfunc`     | 聚合函数或函数列表，用于对重复值进行聚合操作，默认为`np.mean`。|
| `fill_value`  | 替换缺失值的值。                                            |
| `margins`     | 是否显示行和列的汇总统计，默认为`False`。                    |
| `margins_name`| 汇总统计的行和列的标签名称。                                 |


```python
# 透视表操作
# 月份     一月    三月    二月   总金额
# 产品
# A       1000   1200   1500   3700
# B       2000   2300   1800   6100
# 总金额   3000   3500   3300   9800
df_pivot = df_sales.pivot_table(index='产品', columns='月份', values='销售额', aggfunc='sum', margins=True,
                                margins_name="总金额")
```

如果对编程有经验的同学会发现这其实就是数据分组，按照一定的分组分组，分组后的数据进行数据计算。
所以如果要统计产品和月份每月的销售额。其实groupby方法也可以实现。

```python
# 月份  产品
# 一月   A     1000
#       B     2000
# 三月   A     1200
#       B     2300
# 二月   A     1500
#       B     1800
groupby = df_sales.groupby(by=['月份', '产品'])['销售额'].sum()
```

---

在本系列文章中，我们会从实战出发,深入探讨了Pandas数据分析库的众多功能和强大之处。掌握使用Pandas进行数据处理、清洗和分析的基本技巧。全系列课程均是免费。你的关注是我继续的动力。
