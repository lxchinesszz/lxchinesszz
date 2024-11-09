---
title: 文件路径处理
editLink: true
navbar: true
---

## 文件处理

1. 指定目录中文件打平处理
2. 获取完整路径名，文件名，文件后缀名
3. 使用 `shutil` 进行复制或移动
4. 使用 `re` 匹配文件名

```python
import os
import shutil
import re

data_source = '/Users/liuxin/PycharmProjects/drissionpagedocs/MasterData/新建文件夹'
for file_path, dir, files in os.walk(data_source, topdown=False):
    # /Users/liuxin/PycharmProjects/drissionpagedocs/MasterData/新建文件夹
    # print(f'file_path:{file_path}')
    # dir:['test']
    # print(f'dir:{dir}')
    for fl in files:
        # 文件完整路径 /Users/liuxin/PycharmProjects/drissionpagedocs/MasterData/新建文件夹/StockLedger-Nap AU 2018-after-after-1.csv
        file_full_path = os.path.join(file_path, fl)
        # 含扩展名 StockLedger-Nap AU 2018-after-after-1.csv
        file_full_name = os.path.basename(fl)
        # 文件名 StockLedger-Nap AU 2018-after-after-1
        file_name = os.path.splitext(fl)[0]
        # 文件扩展名 .csv
        file_ext_name = os.path.splitext(fl)[1];
        # 根据名字匹配
        mat = re.findall(pattern="菜鸟|订单|费用|结算|预收", string=fl, flags=re.IGNORECASE)
        if len(mat) != 0:
            # 把匹配上的文件都移动到指定的目录
            if mat[0] == "菜鸟":
                # 或者移动 move
                shutil.copy(file_full_path,
                            dst=os.path.join('/Users/liuxin/PycharmProjects/drissionpagedocs/MasterData/static', fl))
                print(file_full_path)
                print('===================')

```


## shutil

`shutil` 是 Python 标准库中的一个模块，专门用于处理文件和目录的高级操作，例如复制、移动、删除文件和目录等。它提供了一些便捷的方法，能够实现类似于操作系统的文件操作。下面是一些 `shutil` 模块的主要功能和用法。

### 1. `shutil.copy()`
- **作用**：复制文件。
- **参数**：
    - `src`：源文件路径。
    - `dst`：目标文件路径或目录。
- **示例**：
  ```python
  import shutil
  shutil.copy('source_file.txt', 'destination_folder/')
  ```

### 2. `shutil.copy2()`
- **作用**：与 `copy` 类似，但会保留源文件的元数据（例如创建时间、修改时间）。
- **参数**：同 `shutil.copy()`。
- **示例**：
  ```python
  shutil.copy2('source_file.txt', 'destination_folder/')
  ```

### 3. `shutil.copytree()`
- **作用**：递归复制整个目录树，即复制目录及其中的所有文件和子目录。
- **参数**：
    - `src`：源目录路径。
    - `dst`：目标目录路径（若目录已存在，会抛出错误）。
- **示例**：
  ```python
  shutil.copytree('source_folder', 'destination_folder')
  ```

### 4. `shutil.move()`
- **作用**：移动文件或目录。
- **参数**：
    - `src`：源文件或目录路径。
    - `dst`：目标文件或目录路径。
- **示例**：
  ```python
  shutil.move('source_file.txt', 'destination_folder/')
  ```

### 5. `shutil.rmtree()`
- **作用**：递归删除目录及其所有内容。**使用时请小心，因为这是不可逆操作。**
- **参数**：`path`：要删除的目录路径。
- **示例**：
  ```python
  shutil.rmtree('folder_to_delete')
  ```

### 6. `shutil.make_archive()`
- **作用**：创建压缩包。
- **参数**：
    - `base_name`：压缩包的文件名（不带扩展名）。
    - `format`：压缩格式，如 `'zip'`、`'tar'` 等。
    - `root_dir`：要压缩的目录。
- **示例**：
  ```python
  shutil.make_archive('backup', 'zip', 'folder_to_compress')
  ```

### 7. `shutil.unpack_archive()`
- **作用**：解压缩文件。
- **参数**：
    - `filename`：压缩文件名。
    - `extract_dir`：解压目标目录。
- **示例**：
  ```python
  shutil.unpack_archive('backup.zip', 'extracted_folder')
  ```

### 使用注意
- `shutil.rmtree()` 删除操作不可撤销，建议在操作前仔细确认路径。
- `shutil.copytree()` 不允许目标路径已存在，因此通常在复制前检查路径。
