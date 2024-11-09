---
title: 格式转换
editLink: true
navbar: true
---

# Excel格式转换

1. 使用 excel 打开 xls 文件并转换为 xlsx

```python
import pandas as pd
import os

file_path = '/Users/xxx/PycharmProjects/drissionpagedocs/MasterData/StockLedger-ABMNZ2023.xlsx';
file_dir = os.path.dirname(file_path)
file_name = os.path.basename(file_path)
file_name_without_extension = os.path.splitext(file_name)[0]

new_file_path = file_dir + '/新建文件夹/' + file_name_without_extension + '-after.xlsx'


def saveAsNewFile(path):
    df = pd.read_excel(path)
    date = df.iloc[2, 0]

    def fetchCompName(df):
        name = ''
        for index, value in enumerate(df.iloc[7:, 0]):  # 从第 8 行开始（索引为 7）
            if pd.isna(value):  # 检查是否为缺失值
                return name
            else:
                name = value

    name = fetchCompName(df)
    new_header = df.iloc[5].to_list()
    print(f'当前处理文件:{new_header}')
    print(f'匹配到表头:{new_header}')
    print(f'匹配到日期: {date}')
    print(f'匹配到主体: {name}')

    new_file = df.drop(index=range(6)).reset_index(drop=True)
    new_file.columns = new_header
    new_file['日期'] = date
    new_file.loc[new_file['法人主体'].isna(), '法人主体'] = name
    new_file.to_excel(new_file_path, index=False)
    print(f'保存新路径: {new_file_path}')


saveAsNewFile(file_path)

```
