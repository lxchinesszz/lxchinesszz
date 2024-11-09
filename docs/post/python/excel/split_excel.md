---
title: Excel文件拆分
editLink: true
navbar: true
---

# Excel文件拆分


```python
import pandas as pd
import os

def split_excel_to_csv(file_path, rows_per_file=20000):
    # 读取Excel文件
    df = pd.read_excel(file_path)

    # 获取首行
    header = df.columns.to_frame().T  # 保持首行作为 DataFrame

    print(header)

    # 将数据按20000行拆分
    for i in range(0, len(df), rows_per_file):
        # 创建小表格
        chunk = df.iloc[i:i + rows_per_file]

        # 组合成新的DataFrame，保持首行不变
        new_df = pd.concat([header, chunk], ignore_index=True)

        # 生成新的文件名
        base_name, _ = os.path.splitext(file_path)
        file_name = os.path.basename(file_path).split('.xlsx')[0]
        file_name = f"{file_name}-{i // rows_per_file + 1}.csv"
        dir_name = os.path.dirname(file_path);
        new_file_name = dir_name + '/新建文件夹/' + file_name
        # 保存为CSV格式
        new_df.to_csv(new_file_name, index=False, header=False)  # header=False因为首行已包含在数据中

    print(f"拆分完成，共生成 {len(df) // rows_per_file + 1} 个文件。")

dir_path = '/Users/xxx/PycharmProjects/drissionpagedocs/MasterData'

for i in os.listdir(dir_path):
    if (i.endswith(".xlsx")):
        file_path = dir_path + '/' + i;
        print(file_path)
        split_excel_to_csv(file_path,
                           rows_per_file=2)
```
